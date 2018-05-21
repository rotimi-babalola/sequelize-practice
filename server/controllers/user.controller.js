/* eslint no-undef:0 */
require('dotenv').config();

import { User } from '../models';
import { signToken } from '../utils/signToken';
import { verifyPassword } from '../utils/verifyPassword';

export default {
  createUser(request, response) {
    User.create(request.body)
      .then((newUser) => {
        const token = signToken(newUser);
        return response.status(201).send({
          message: 'User created!',
          createdUser: {
            id: newUser.id,
            userName: newUser.userName,
          },
          token,
          success: true,
        });
      })
      .catch(error => response.status(500).send(error));
  },
  signin(request, response) {
    User.findOne({
      where: {
        userName: request.body.userName,
      },
    }).then((oldUser) => {
      if (!oldUser) {
        return response.status(404).send({
          message: 'Signin failed! User not found!',
          success: false,
        });
      } else if (!verifyPassword(request.body.password, oldUser.password)) {
        return response.status(401).send({
          message: 'Authentication failed! Incorrect password!',
          success: false,
        });
      }
      const token = signToken(oldUser);
      return response.status(200)
        .send({
          message: 'Signin successful',
          token,
          userName: oldUser.userName,
          success: true,
        });
    })
      .catch(error => response.status(500).send(error));
  },
};
