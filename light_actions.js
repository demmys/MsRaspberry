const irMagician = require('irmagician');

const DATA_FILES = {
    TOGGLE: 'data/light/toggle.json',
    LIGHTEN: 'data/light/lighten.json',
    DARKEN: 'data/light/darken.json'
};

module.exports = [
    {
        regexps: [
            new RegExp('を?([消け]して|オフ|off)', 'i'),
        ],
        act: () => {
            irMagician.write(DATA_FILES.TOGGLE);
            setTimeout(() => {
                irMagician.play();
            }, 1000);
            console.log('Command accepted. Turning off the light...');
        }
    },
    {
        regexps: [
            new RegExp('の(あか|明)るさを?(くらく|暗く|保安灯|ほあんとう|本当)'),
            new RegExp('を?(くらく|暗く|保安灯|ほあんとう|本当)'),
        ],
        act: () => {
            irMagician.write(DATA_FILES.DARKEN);
            setTimeout(() => {
                irMagician.play();
            }, 1000);
            console.log('Command accepted. Darkening the light...');
        }
    },
    {
        regexps: [
            new RegExp('の(あか|明)るさを?(あかるく|明るく|お気に入り|普通|通常|2畳|2乗)'),
            new RegExp('を?(つけて|オン|on|あかるく|明るく|お気に入り|普通|通常|2畳|2乗)'),
        ],
        act: () => {
            irMagician.write(DATA_FILES.LIGHTEN);
            setTimeout(() => {
                irMagician.play();
            }, 1000);
            console.log('Command accepted. Lightening the light...');
        }
    },
];
