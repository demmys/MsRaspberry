const { exec } = require('../lib');

module.exports = {
    push: async () => {
        await exec('bash ./script/switchbot/push.sh CB:37:9E:40:8D:3A');
    }
};
