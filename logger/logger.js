const pine = require('pine');

const logger = pine();

class Logger {

    info(message) {
        logger.info(message);
    }

    info(message, data) {
        logger.info(`${message}   ${undefined != data ? JSON.stringify(data) : ''}`);
    }

    error(message) {
        logger.error(message);
    }
}

module.exports = new Logger();