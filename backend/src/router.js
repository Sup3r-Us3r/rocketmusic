import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/User';
import MusicController from './app/controllers/Music';

import AuthMiddleware from './app/middlewares/Auth';

const routes = Router();

// User Routes
routes.get('/users', AuthMiddleware, UserController.index);
routes.post('/register', UserController.store);
routes.post('/login', UserController.show);
routes.delete('/delete/:id', UserController.destroy);

// Music Routes
routes.get('/musics', MusicController.listMusics);
routes.get('/musics/:id', MusicController.listMusic);
routes.post(
  '/sendmusic',
  multer(multerConfig).single('sendMusic'),
  MusicController.sendMusic
);
routes.post('/sendmusicinfo', MusicController.sendMusicInfo);

export default routes;
