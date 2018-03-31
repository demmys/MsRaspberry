const light = require('../modules/light');

module.exports = [
    {
        regexps: [
            new RegExp('を?([消け]して|オフ|off)', 'i'),
        ],
        act: light.toggle
    },
    {
        regexps: [
            new RegExp('の(あか|明)るさを?(くらく|暗く|保安灯|ほあんとう|本当)'),
            new RegExp('を?(くらく|暗く|保安灯|ほあんとう|本当)'),
        ],
        act: light.darken
    },
    {
        regexps: [
            new RegExp('の(あか|明)るさを?(あかるく|明るく|お気に入り|普通|通常|2畳|2乗)'),
            new RegExp('を?(つけて|オン|on|あかるく|明るく|お気に入り|普通|通常|2畳|2乗)'),
        ],
        act: light.lighten
    },
];
