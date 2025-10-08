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
  let isAuthenticated = true;

  const user = getUser(sessionId);

  if (!user) isAuthenticated = false;

  res.locals.isAuthenticated = isAuthenticated;
  res.locals.user = user;

  req.user = user;
  next();
}

module.exports = {
  authenticateUser,
  checkAuthenticationOnly,
};
