const kitchenLight = require('../modules/kitchen_light');

module.exports = [
    {
        regexps: [
            new RegExp('を?([消け]して|オフ|off)', 'i'),
            new RegExp('を?(つけて|オン|on)', 'i'),
        ],
        act: kitchenLight.push
    }
];
