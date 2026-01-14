const fs = require('fs');
const path = require('path');

// Simple logger to log messages to a file
const logFile = path.join(__dirname, 'app.log');

const log = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp} - ${message}\n`;

  fs.appendFile(logFile, logMessage, (err) => {
    if (err) {
      console.error('Error writing to log file', err);
    }
  });
};

module.exports = log;
