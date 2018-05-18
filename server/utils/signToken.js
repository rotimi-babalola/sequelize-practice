/* eslint no-undef:0 */
require('dotenv').config();

import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export const signToken = ({ id }) => {
  return jwt.sign({ userId: id }, secret, { expiresIn: '1h' });
};
