const sessionUidMap = new Map();

const setUser = (id, user) => {
  sessionUidMap.set(id, user);
};

const getUser = (id) => {
  return sessionUidMap.get(id);
};

module.exports = {
  setUser,
  getUser,
};
