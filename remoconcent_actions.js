const { Device } = require('ps4-waker');
const irMagician = require('irmagician');

const DATA_FILES = {
    ON: 'data/remoconcent/on.json',
    OFF: 'data/remoconcent/off.json'
};

let ps4 = new Device();

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
    {
        regexps: [
            new RegExp('に([切き]り[替か]えて|[変替か]えて|して)'),
        ],
        act: () => {
            ps4.sendKeys(['ps']).then(() => ps4.turnOff());
            irMagician.write(DATA_FILES.ON);
            setTimeout(() => {
                irMagician.play();
            }, 1000);
            console.log('Command accepted. Changing PS4 to standby and turning on the Remoconcent...');
        }
    }
];
