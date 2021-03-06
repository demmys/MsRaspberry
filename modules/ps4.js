const { Device } = require('ps4-waker');

const TITLE_IDS = {
    TORNE: 'CUSA00442',
    NETFLIX: 'CUSA02988',
    MONSTER_HUNTER_WORLD: 'CUSA06027'
};

let ps4 = new Device();

module.exports = {
    turnOn: async () => {
        await ps4.turnOn();
    },
    turnOff: async () => {
        await ps4.sendKeys(['ps']);
        await ps4.turnOff();
    },
    goHome: async () => {
        await ps4.sendKeys(['ps']);
    },
    startTorne: async () => {
        await ps4.startTitle(TITLE_IDS.TORNE);
    },
    startNetflix: async () => {
        await ps4.startTitle(TITLE_IDS.NETFLIX);
    },
    startMonsterHunterWorld: async () => {
        await ps4.startTitle(TITLE_IDS.MONSTER_HUNTER_WORLD);
    },
    inputText: async () => {
        let osk = await ps4.getKeyboard();
        await osk.setText(sentence)
        await osk.submit()
    },
    isStandby: async () => {
        let status = await ps4.getDeviceStatus();
        return status.status === 'Standby';
    }
};
