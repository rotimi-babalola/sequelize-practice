import jwt from 'jsonwebtoken';

/* eslint no-undef:0 */
require('dotenv').config();
const secret = process.env.JWT_SECRET;

export const decodeToken = (request, response, next) => {
  const token = request.body.token || request.headers.authorization || request.headers['x-access-token'];
  if (!token) {
    return response.status(401)
      .send({
        success: false,
        message: 'Please supply a token for this route',
      });
  }
  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      return res.status(400)
        .send({
          success: false,
          message: 'Failed to authenticate token',
        });
    }
    // Save decoded to request object for use in other routes
    request.decoded = decoded;
    next();
  });
};
