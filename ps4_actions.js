const { Device } = require('ps4-waker');
const TITLE_IDS = {
    TORNE: 'CUSA00442',
    NETFLIX: 'CUSA02988'
};

let ps4 = new Device();

module.exports = [
    {
        regexps: [
            new RegExp('で(とるね|トルネ|torne|テレビ|TV)を?(つけて|かけて|(開|ひら)いて|起動|きどう|オン|on|スタート|start)', 'i'),
        ],
        act: () => {
            ps4.startTitle(TITLE_IDS.TORNE);
            console.log('Command accepted. Starting torne...');
        }
    },
    {
        regexps: [
            new RegExp('で(ねっとふりっくす|ネットフリックス|netflix|えいが|映画)を?(つけて|かけて|(開|ひら)いて|起動|きどう|オン|on|スタート|start)', 'i'),
        ],
        act: () => {
            ps4.startTitle(TITLE_IDS.NETFLIX);
            console.log('Command accepted. Starting netflix...');
        }
    },
    {
        regexps: [
            new RegExp('[でに2](.*)([とをでて]|って)([い入]れて|(入力|にゅうりょく)|[か書]いて)'),
        ],
        act: (matches) => {
            let sentence = matches[1];
            ps4.getKeyboard().then(osk => osk.setText(sentence)).then(osk => osk.submit());
            console.log('Command accepted. Inserting the sentence "' + sentence + '"...');
        }
    },
    {
        regexps: [
            new RegExp('の?(電源|でんげん)を?(つけて|[い入]れて)'),
            new RegExp('を?(つけて|[い入]れて|起動|きどう|オン|on|スタート|start)', 'i'),
        ],
        act: () => {
            ps4.turnOn();
            console.log('Command accepted. Recovering PS4 from standby...');
        }
    },
    {
        regexps: [
            new RegExp('の?(電源|でんげん)を?([け消]して|[き切]って)'),
            new RegExp('を?([け消]して|[き切]って|終了|しゅうりょう|オフ|off|スタンバイ|standby)', 'i'),
        ],
        act: () => {
            ps4.turnOff();
            console.log('Command accepted. Changing PS4 to standby...');
        }
    },
    {
        regexps: [
            new RegExp('[をので]?(トップ|top|ホーム|home|フォーム|form)'),
        ],
        act: () => {
            ps4.sendKeys(['ps']);
            console.log('Command accepted. Sending PS key...');
        }
    },
];
