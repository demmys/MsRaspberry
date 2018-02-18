const os = require('os');
const firebase = require('firebase');
const config = require('./config.js');
const controller = require('./controller.js');

firebase.initializeApp(config);
const db = firebase.database();

let ip = getLocalIpv4();
db.ref('/raspberry').set({ ip: ip });

controller.register(db, '/ps4', 'command', require('./ps4_actions.js'));
controller.register(db, '/light', 'command', require('./light_actions.js'));
controller.register(db, '/remoconcent', 'command', require('./remoconcent_actions.js'));

console.log('Ms.Raspberry is now ready on ' + ip + '.');

function getLocalIpv4() {
    let interfaces = os.networkInterfaces();
    for (let name in interfaces) {
        if (name === 'lo') {
            continue;
        }
        let ip = null;
        interfaces[name].some(address => {
            if (address.family === 'IPv4') {
                ip = address.address;
                return true;
            }
        });
        if (ip !== null) {
            return ip;
        }
    }
    return '';
}
