// import { resolve, join } from 'path';
// import fs from 'fs';

import Music from '../models/Music';

class MusicController {
  async recordMusicData(filename) {
    const date = new Date();

    const newRecord = await Music.create({
      name: filename,
      author: 'Author1',
      gender: 'Gender1',
      cover: 'Cover1',
      release: date,
    });

    if (!newRecord) {
      return new Error('Error recording song data!');
    }

    return newRecord;
  }

  // async show(req, res) {}

  async store(req, res) {
    const { filename } = req.file;

    // Terei que separar a parte da música das informações dela.

    return res.send();
  }

  async index(req, res) {
    await Music.find((err, response) => {
      if (err) {
        res.status(400).json({ error: 'Error listing songs!' });
      }

      // Hide Data
      response[0].__v = undefined;

      return res.json(response);
    });
  }

  // async destroy(req, res) {}
}

export default new MusicController();
