const { execAsync } = require('../lib');

module.exports = {
    push: async () => {
        await execAsync('bash ./modules/script/switchbot/push.sh EA:13:59:C1:14:FF');
    }
};
