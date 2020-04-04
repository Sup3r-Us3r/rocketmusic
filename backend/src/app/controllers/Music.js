import fs from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

import Music from '../models/Music';

class MusicController {
  async sendMusicInfo(req, res) {
    const { name, author, gender, cover, release, filename } = req.body;

    await Music.musicModel.create(
      {
        name,
        author,
        gender,
        cover,
        release,
        filename,
      },
      (err, response) => {
        if (err) {
          return res.status(400).json({ error: 'Error creating song info!' });
        }

        return res.json(response);
      }
    );
  }

  async sendMusic(req, res) {
    const { filename } = req.file;

    await Music.filenameModel.create(
      {
        originalName: filename,
      },
      (err, response) => {
        if (err) {
          return res.status(400).json({ error: 'Error sending music!' });
        }

        return res.json(response);
      }
    );
  }

  async listMusic(req, res) {
    const { id } = req.params;

    const music = await Music.musicModel
      .findOne({ _id: id }, '-_id -__v')
      .populate('filename', '-_id -__v');

    if (!music) {
      return res.status(400).json({ error: 'Error listing music!' });
    }

    const { originalName } = music.filename;

    const musicPath = resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      `${originalName}`
    );

    // Get size in bytes using stat of fs
    const getStat = promisify(fs.stat);
    const stat = await getStat(musicPath);

    // Set headers
    res.set('Content-Type', 'audio/mp3');
    res.set('Content-Length', stat.size);

    // Create stream
    const stream = fs.createReadStream(musicPath);

    // When the song is fully loaded, read it
    stream.on('end');

    // Streaming audio
    return stream.pipe(res);
  }

  async listMusics(req, res) {
    const listAllMusics = await Music.musicModel
      .find({}, '-__v')
      .populate('filename', '-_id -__v')
      .sort({ createdAt: 'DESC' });

    if (!listAllMusics) {
      return res.status(400).json({ error: 'Error listing musics!' });
    }

    return res.json(listAllMusics);
  }
}

export default new MusicController();
