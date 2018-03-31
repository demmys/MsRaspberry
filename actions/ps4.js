const ps4 = require('../modules/ps4');
const chromecast = require('../modules/cromecast');

module.exports = [
    {
        regexps: [
            new RegExp('で(とるね|トルネ|torne|テレビ|TV)を?(つけて|かけて|(開|ひら)いて|起動|きどう|オン|on|スタート|start)', 'i'),
        ],
        act: ps4.startTorne
    },
    {
        regexps: [
            new RegExp('で(ねっとふりっくす|ネットフリックス|netflix|えいが|映画)を?(つけて|かけて|(開|ひら)いて|起動|きどう|オン|on|スタート|start)', 'i'),
        ],
        act: ps4.startNetflix
    },
    {
        regexps: [
            new RegExp('で(モンハン|もんはん|モンスターハンター|モンスターハンター|monster hunter)(ワールド|わーるど|world|)を?(つけて|かけて|(開|ひら)いて|起動|きどう|オン|on|スタート|start)', 'i'),
        ],
        act: ps4.startMonsterHunterWorld,
    },
    {
        regexps: [
            new RegExp('[でに2](.*)([とをでて]|って)([い入]れて|(入力|にゅうりょく)|[か書]いて)'),
        ],
        act: (matches) => ps4.insertText(matches[1])
    },
    {
        regexps: [
            new RegExp('の?(電源|でんげん)を?(つけて|[い入]れて)'),
            new RegExp('を?(つけて|[い入]れて|起動|きどう|オン|on|スタート|start)', 'i'),
        ],
        act: ps4.turnOn
    },
    {
        regexps: [
            new RegExp('の?(電源|でんげん)を?([け消]して|[き切]って)'),
            new RegExp('を?([け消]して|[き切]って|終了|しゅうりょう|オフ|off|スタンバイ|standby)', 'i'),
        ],
        act: ps4.turnOff
    },
    {
        regexps: [
            new RegExp('[をので]?(トップ|top|ホーム|home|フォーム|form)'),
        ],
        act: ps4.goHome
    },
    {
        regexps: [
            new RegExp('に([切き]り[替か]えて|[変替か]えて|して)'),
        ],
        act: async () => {
            await chromecast.turnOff();
            await ps4.turnOn();
        }
    }
];
