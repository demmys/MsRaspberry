const { logInfo, logError } = require('./lib');

function action(command, actions) {
    let act = null;
    actions.some(action => {
        action.regexps.some(regexp => {
            let matches = command.match(regexp);
            if (matches !== null) {
                act = action.act.bind(null, matches);
                return true;
            }
        });
        return act !== null;
    });
    return act();
}

module.exports = (db, path, key, actions) => {
    db.ref(path).on('value', changed => {
        let command = changed.child(key).val().replace(/[  ]/g, '');
        if (command === '') {
            return;
        }
        action(command, actions).then(() => {
            db.ref(path).set({ [key]: '' });
        }).catch((err) => {
            logError('Unexpected error.', err);
        });
    });
};
