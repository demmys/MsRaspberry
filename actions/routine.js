const hotwater = require('../modules/hotwater');
const ps4 = require('../modules/ps4');
const light = require('../modules/light');

module.exports = [
    {
        regexps: [
            new RegExp('おはよう'),
        ],
        act: async () => {
            await ps4.startTorne();
            await hotwater.push();
        }
    },
    {
        regexps: [
            new RegExp('[行い]ってきます'),
        ],
        act: async () => {
            if ((new Date()).getHours() >= 17) {
                await light.toggle();
            }
            await hotwater.push();
            if (!(await ps4.isStandby())) {
                await ps4.turnOff();
            }
        }
    },
    {
        regexps: [
            new RegExp('ただいま'),
        ],
        act: async () => {
            if ((new Date()).getHours() >= 16) {
                await light.toggle();
            }
            await hotwater.push();
            await ps4.startNetflix();
        }
    },
    {
        regexps: [
            new RegExp('おやすみ'),
        ],
        act: async () => {
            await light.toggle();
            await hotwater.push();
            if (!(await ps4.isStandby())) {
                await ps4.turnOff();
            }
        }
    }
];
