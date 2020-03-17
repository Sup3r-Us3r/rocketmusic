import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

import jwtSecret from '../../config/auth';

class UserController {
  async index(req, res) {
    await User.find((err, response) => {
      if (err) {
        return res.status(400).json({ error: 'Error finding all users!' });
      }

      return res.json(response);
    });
  }

  async store(req, res) {
    const { name, email, password } = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'User already exists!' });
    }

    if (name === '' || password === '') {
      return res.status(400).json({ error: 'Field(s) not filled!' });
    }

    const newUser = await User.create(
      {
        name,
        email,
        password,
      },
      (err, response) => {
        if (err) {
          return res.json({ error: 'Error creating user!' });
        }

        return res.json({
          user: response,
          token: jwt.sign({ id: response._id }, jwtSecret.secret, {
            expiresIn: '7d',
          }),
        });
      }
    );

    return newUser;
  }

  async show(req, res) {
    const { email, password } = req.body;

    const userFound = await User.findOne({ email }).select('+password');

    if (!userFound || userFound === null) {
      return res.status(400).json({ error: 'User not found!' });
    }

    return compare(password, userFound.password, err => {
      if (err) {
        return res.status(400).json({ error: 'Authentication failure!' });
      }

      // Hide data
      userFound.password = undefined;

      return res.json({
        user: userFound,
        token: jwt.sign({ id: userFound._id }, jwtSecret.secret, {
          expiresIn: '7d',
        }),
      });
    });
  }

  async destroy(req, res) {
    const { id } = req.params;

    await User.findOne({ _id: id }, err => {
      if (err) {
        return res.status(400).json({ error: 'User not found!' });
      }
    });

    const deleteUser = await User.findOneAndDelete({ _id: id }, err => {
      if (err) {
        return res.json({ error: 'Error deleting user!' });
      }

      return res.send();
    });

    return deleteUser;
  }
}

export default new UserController();
