const os = require('os');
const { exec } = require('child_process');
const { promisify } = require('util');

function getLocalIpv4() {
    let interfaces = os.networkInterfaces();
    for (let name in interfaces) {
        if (name === 'lo') {
            continue;
        }
        let ip = null;
        interfaces[name].some(address => {
            if (address.family === 'IPv4') {
                ip = address.address;
                return true;
            }
        });
        if (ip !== null) {
            return ip;
        }
    }
    return '';
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function exec(command) {
    return promisify(exec);
}

function toLogString(level, message) {
    return `<${level}>[${(new Date()).toISOString()}] ${message}`;
}

function logInfo(message) {
    console.log(toLogString('INFO', message));
}

function logError(message, detail = '') {
    console.error(toLogString('ERROR', message) + '\n', detail);
}

module.exports = {
    getLocalIpv4,
    delay,
    exec,
    logInfo,
    logError
};
