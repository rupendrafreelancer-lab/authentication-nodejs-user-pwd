const { getUser } = require("../services/AuthService");

async function authenticateUser(req, res, next) {
  const sessionId = req.cookies?.uid;

  if (!sessionId) return res.redirect("/signin");

  const user = getUser(sessionId);
  if (!user) return res.redirect("/signin");

  req.user = user;
  next();
}

async function checkAuthenticationOnly(req, res, next) {
  const sessionId = req.cookies?.uid;

  const user = getUser(sessionId);

  req.user = user;
  next();
}

module.exports = {
  authenticateUser,
  checkAuthenticationOnly,
};
