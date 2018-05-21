import bcrypt from 'bcrypt';


export const verifyPassword = (password, hashedPassword) => {
  if (!password || !hashedPassword) {
    return false;
  }
  return bcrypt.compareSync(password, hashedPassword);
};
