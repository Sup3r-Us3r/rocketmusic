import jwt from 'jsonwebtoken';

import jwtSecret from '../../config/auth';

export default async (req, res, next) => {
  const getToken = req.headers.authorization;
  const tokenParts = getToken.split(' ');
  const [schema, token] = tokenParts;

  if (!getToken) {
    return res.status(401).json({ error: 'Not authorized!' });
  }

  if (tokenParts.length !== 2) {
    return res.status(401).json({ error: 'Incomplete token!' });
  }

  if (!schema.includes('Bearer')) {
    return res.status(401).json({ error: 'Token malformatted!' });
  }

  if (!token) {
    return res.status(401).json({ error: 'Token not found!' });
  }

  await jwt.verify(token, jwtSecret.secret, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ error: 'Error when validating the token!' });
    }

    req.userId = decoded.id;

    return req.userId;
  });

  return next();
};
