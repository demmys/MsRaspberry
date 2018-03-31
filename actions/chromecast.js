const chromecast = require('../modules/cromecast');
const ps4 = require('../modules/ps4');

module.exports = [
    {
        regexps: [
            new RegExp('を?([消け]して|オフ|off)', 'i'),
        ],
        act: chromecast.turnOff
    },
    {
        regexps: [
            new RegExp('を?(つけて|オン|on)', 'i'),
        ],
        act: chromecast.turnOn
    },
    {
        regexps: [
            new RegExp('に([切き]り[替か]えて|[変替か]えて|して)'),
        ],
        act: async () => {
            await ps4.turnOff();
            await chromecast.turnOn();
        }
    }
];
