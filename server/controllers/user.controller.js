/* eslint no-undef:0 */
require('dotenv').config();

import { User } from '../models';
import { signToken } from '../utils/signToken';

export default {
  createUser(request, response) {
    User.create(request.body)
      .then((newUser) => {
        const token = signToken(newUser);
        return response.status(201).send({
          message: 'User created!',
          newUser,
          token,
          success: true,
        });
      })
      .catch(error => response.status(500).send(error));
  },
};
