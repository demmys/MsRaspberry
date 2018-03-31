const { execAsync } = require('../lib');

module.exports = {
    push: async () => {
        await execAsync('bash ./modules/script/switchbot/push.sh CB:37:9E:40:8D:3A');
    }
};
