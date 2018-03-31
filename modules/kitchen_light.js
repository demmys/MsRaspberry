const { exec } = require('../lib');

module.exports = {
    push: async () => {
        await exec('bash ./script/switchbot/push.sh EA:13:59:C1:14:FF');
    }
};
