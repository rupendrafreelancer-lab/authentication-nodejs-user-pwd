const jwt = require("jsonwebtoken");
const secert = "Rupendra1234567890";

const setUser = (user) => {
  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
  };
  return jwt.sign(payload, secert);
};

const getUser = (token) => {
  if (!token) return null;
  try {
    return jwt.verify(token, secert);
  } catch (err) {
    return null;
  }
};

module.exports = {
  setUser,
  getUser,
};
