const firebase = require('firebase');
const config = require('./config');
const register = require('./register');
const { getLocalIpv4, logInfo } = require('./lib');

firebase.initializeApp(config.firebase);
const db = firebase.database();

let ip = getLocalIpv4();
db.ref('/raspberry').set({ ip });

register(db, '/ps4', 'command', require('./actions/ps4.js'));
register(db, '/light', 'command', require('./actions/light.js'));
register(db, '/chromecast', 'command', require('./actions/chromecast.js'));
register(db, '/kitchen_light', 'command', require('./actions/kitchen_light.js'));
register(db, '/hotwater', 'command', require('./actions/hotwater.js'));
register(db, '/routine', 'command', require('./actions/routine.js'));

logInfo('Ms.Raspberry is now ready on ' + ip + '.');
