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
            let [lux, temperature] = await Promise.all([
                wionode.getDigitalLightLux(),
                wionode.getTempHumProTemperature()
            ]);
            let actions = [];
            if (lux < 100) {
                actions.push(light.toggle());
            }
            if (temperature < 20) {
                actions.push(hotwater.push());
            }
            actions.push(ps4.startTorne());
            await Promise.all(actions);
        }
    },
    {
        regexps: [
            new RegExp('[行い]ってきます'),
        ],
        act: async () => {
            let [lux, temperature, ps4IsStandby] = await Promise.all([
                wionode.getDigitalLightLux(),
                wionode.getTempHumProTemperature(),
                ps4.isStandby()
            ]);
            let actions = [];
            if (lux > 150) {
                actions.push(light.toggle());
            }
            if (temperature < 20) {
                actions.push(hotwater.push());
            }
            if (!ps4IsStandby) {
                actions.push(ps4.turnOff());
            }
            await Promise.all(actions);
        }
    },
    {
        regexps: [
            new RegExp('ただいま'),
        ],
        act: async () => {
            let [lux, temperature] = await Promise.all([
                wionode.getDigitalLightLux(),
                wionode.getTempHumProTemperature()
            ]);
            let actions = [];
            if (lux < 100) {
                actions.push(light.toggle());
            }
            if (temperature < 20) {
                actions.push(hotwater.push());
            }
            actions.push(ps4.startTorne());
            await Promise.all(actions);
        }
    },
    {
        regexps: [
            new RegExp('おやすみ'),
        ],
        act: async () => {
            let [lux, temperature, ps4IsStandby] = await Promise.all([
                wionode.getDigitalLightLux(),
                wionode.getTempHumProTemperature(),
                ps4.isStandby()
            ]);
            let actions = [];
            if (temperature < 20) {
                actions.push(hotwater.push());
            }
            if (lux > 150) {
                actions.push(light.toggle());
            }
            if (!ps4IsStandby) {
                actions.push(ps4.turnOff());
            }
            await Promise.all(actions);
        }
    }
];
