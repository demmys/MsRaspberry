const irMagician = require('irmagician');
const { delay } = require('../lib');

const DATA_FILES = {
    ON: 'modules/data/remoconcent/on.json',
    OFF: 'modules/data/remoconcent/off.json'
};

module.exports = {
    turnOn: async () => {
        irMagician.write(DATA_FILES.ON);
        await delay(1000);
        irMagician.play();
    },
    turnOff: async () => {
        irMagician.write(DATA_FILES.OFF);
        await delay(1000);
        irMagician.play();
    }
};
