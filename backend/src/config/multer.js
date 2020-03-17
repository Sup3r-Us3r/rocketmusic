import multer from 'multer';
import { resolve, extname } from 'path';
import crypto from 'crypto';

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

        return cb(null, filename);
      });
    },
  }),
};
