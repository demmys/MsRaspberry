function action(command, actions) {
    actions.some(action => {
        if (action.regexps.some(r => r.test(command))) {
            action.act();
            return true;
        }
    });
}

function logCommand(path, value) {
    console.log('Command fired:', 'path = ' + path, ', command = ' + value);
}

module.exports = {
    register: (db, path, key, actions) => {
        db.ref(path).on('value', changed => {
            let command = changed.child(key).val().replace(/[  ]/g, '');
            logCommand(path, command);
            action(command, actions);
            db.ref(path).set({ [key]: '' });
        });
    }
};
