const hotwater = require('../modules/hotwater');

module.exports = [
    {
        regexps: [
            new RegExp('を?([消け]して|オフ|off)', 'i'),
            new RegExp('を?(つけて|オン|on)', 'i'),
        ],
        act: hotwater.push
    }
];
