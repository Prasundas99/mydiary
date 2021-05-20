import jwt from "jsonwebtoken";

export const generateToken = (id) => {
  console.log(id);
  return jwt.sign({ _id: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1000d",
  });
};
