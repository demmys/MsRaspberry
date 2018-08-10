const hotwater = require('../modules/hotwater');

module.exports = [
    {
        regexps: [
            new RegExp('を?([切き]って|[消け]して|オフ|off)', 'i'),
            new RegExp('を?([入い]れて|つけて|オン|on)', 'i'),
        ],
        act: hotwater.push
    }
];
