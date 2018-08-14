const hotwater = require('../modules/hotwater');
const ps4 = require('../modules/ps4');
const light = require('../modules/light');
const wionode = require('../modules/wionode');

module.exports = [
    {
        regexps: [
            new RegExp('おはよう'),
        ],
        act: async () => {
            let lux = await wionode.getDigitalLightLux();
            let temperature = await wionode.getTempHumProTemperature();
            if (temperature < 20) {
                await hotwater.push();
            }
            if (lux < 100) {
                await light.toggle();
            }
            await ps4.startTorne();
        }
    },
    {
        regexps: [
            new RegExp('[行い]ってきます'),
        ],
        act: async () => {
            let lux = await wionode.getDigitalLightLux();
            let temperature = await wionode.getTempHumProTemperature();
            if (temperature < 20) {
                await hotwater.push();
            }
            if (lux > 200) {
                await light.toggle();
            }
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
            let lux = await wionode.getDigitalLightLux();
            let temperature = await wionode.getTempHumProTemperature();
            if (temperature < 20) {
                await hotwater.push();
            }
            if (lux < 100) {
                await light.toggle();
            }
            await ps4.startTorne();
        }
    },
    {
        regexps: [
            new RegExp('おやすみ'),
        ],
        act: async () => {
            let lux = await wionode.getDigitalLightLux();
            let temperature = await wionode.getTempHumProTemperature();
            if (temperature < 20) {
                await hotwater.push();
            }
            if (lux > 200) {
                await light.toggle();
            }
            if (!(await ps4.isStandby())) {
                await ps4.turnOff();
            }
        }
    }
];
