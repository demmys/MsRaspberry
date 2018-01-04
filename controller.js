function action(command, actions) {
    actions.some(action => {
        let matches = null;
        action.regexps.some(regexp => {
            matches = command.match(regexp);
            if (matches !== null) {
                return true;
            }
        });
        if (matches !== null) {
            try {
                action.act(matches);
            } catch (err) {
                console.error(JSON.stringify({
                    level: 'error',
                    time: now.toISOString(),
                    detail: err
                }));
            }
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
            if (command === '') {
                return;
            }
            logCommand(path, command);
            action(command, actions);
            db.ref(path).set({ [key]: '' });
        });
    }
};
