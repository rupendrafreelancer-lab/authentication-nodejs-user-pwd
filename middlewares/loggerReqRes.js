const fs = require("fs");

function loggerReqRes(fileName) {
  return (req, res, next) => {
    const log = `${Date.now()} - ${req.method} - ${req.socket.remoteAddress} - ${req.url} New Request Received\n`;
    fs.appendFile(fileName, log, (err) => {
      if (err) res.end("Logger error");

      next();
    });
  };
}

module.exports = loggerReqRes;
