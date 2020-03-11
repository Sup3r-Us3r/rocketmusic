import multer from 'multer';
import { resolve, extname } from 'path';
import crypto from 'crypto';

import MusicController from '../app/controllers/Music';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, async (err, random) => {
        if (err) {
          return cb(err);
        }

        const randomToHex = random.toString('hex');
        const filename = `${randomToHex}${extname(file.originalname)}`;

        await MusicController.recordMusicData(filename);

        return cb(null, filename);
      });
    },
  }),
};
