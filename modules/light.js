const irMagician = require('irmagician');
const { delay } = require('../lib');

const DATA_FILES = {
    TOGGLE: 'data/light/toggle.json',
    LIGHTEN: 'data/light/lighten.json',
    DARKEN: 'data/light/darken.json'
};

module.exports = {
    toggle: async () => {
        irMagician.write(DATA_FILES.TOGGLE);
        await delay(1000);
        irMagician.play();
    },
    lighten: async () => {
        irMagician.write(DATA_FILES.LIGHTEN);
        await delay(1000);
        irMagician.play();
    },
    darken: async () => {
        irMagician.write(DATA_FILES.DARKEN);
        await delay(1000);
        irMagician.play();
    }
};
