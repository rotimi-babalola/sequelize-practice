import bcrypt from 'bcrypt';

export default {
  verifyPassword(password, hashedPassword) {
    if (!password || hashedPassword) {
      return false;
    }
    return bcrypt.compareSync(password, hashedPassword);
  },
};
