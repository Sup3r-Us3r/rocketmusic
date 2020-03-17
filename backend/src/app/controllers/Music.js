import Music from '../models/Music';

class MusicController {
  async recordMusicData(req, res) {
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
        filename,
      },
      (err, response) => {
        if (err) {
          return res.status(400).json({ error: 'Error sending music!' });
        }

        return res.json(response);
      }
    );
  }

  async listMusics(req, res) {
    const listAllMusics = await Music.musicModel
      .find({}, '-_id -__v')
      .populate('filename', '-_id -__v');

    if (!listAllMusics) {
      return res.status(400).json({ error: 'Error listing songs!' });
    }

    return res.json(listAllMusics);
  }
}

export default new MusicController();
