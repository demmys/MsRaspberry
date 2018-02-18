const irMagician = require('irmagician');

const DATA_FILES = {
    ON: 'data/remoconcent/on.json',
    OFF: 'data/remoconcent/off.json'
};

module.exports = [
    {
        regexps: [
            new RegExp('を?([消け]して|オフ|off)', 'i'),
        ],
        act: () => {
            irMagician.write(DATA_FILES.OFF);
            setTimeout(() => {
                irMagician.play();
            }, 1000);
            console.log('Command accepted. Turning off the Remoconcent...');
        }
    },
    {
        regexps: [
            new RegExp('を?(つけて|オン|on)', 'i'),
        ],
        act: () => {
            irMagician.write(DATA_FILES.ON);
            setTimeout(() => {
                irMagician.play();
            }, 1000);
            console.log('Command accepted. Turning on the Remoconcent...');
        }
    },
];
