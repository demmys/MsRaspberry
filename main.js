const firebase = require('firebase');
const config = require('./config');
const register = require('./register');
const { getLocalIpv4, logInfo } = require('./lib');

firebase.initializeApp(config);
const db = firebase.database();

let ip = getLocalIpv4();
db.ref('/raspberry').set({ ip });

controller.register(db, '/ps4', 'command', require('./actions/ps4.js'));
controller.register(db, '/light', 'command', require('./actions/light.js'));
controller.register(db, '/chromecast', 'command', require('./actions/chromecast.js'));
controller.register(db, '/kitchen_light', 'command', require('./actions/kitchen_light.js'));
controller.register(db, '/hotwater', 'command', require('./actions/hotwater.js'));
controller.register(db, '/routine', 'command', require('./actions/routine.js'));

logInfo('Ms.Raspberry is now ready on ' + ip + '.');
