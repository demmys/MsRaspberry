const firebase = require('firebase');
const config = require('./config.js');
const controller = require('./controller.js');

firebase.initializeApp(config);
const db = firebase.database();

controller.register(db, '/ps4', 'command', require('./ps4_actions.js'));

console.log('Ms.Raspberry is now ready.\n');
