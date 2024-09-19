import bcrypt from "bcrypt";
const hashingPassword = (password: string) => {
  return bcrypt.hash(password, 10);
};

export { hashingPassword };
