const googlehome = require('google-home-notifier');

googlehome.device('Google-Home-Mini-e99d829f9af5910bf1b9fd4b2df0ef31', 'ja');

module.exports = {
    notify: (message) => {
        return new Promise(resolve => {
            googlehome.notify(message, resolve);
        });
    }
};
