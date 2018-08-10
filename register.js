const { logInfo, logError } = require('./lib');
const googlehome = require('./modules/googlehome');

async function action(command, actions) {
    let target = null;
    actions.some(action => {
        action.regexps.some(regexp => {
            let matches = command.match(regexp);
            if (matches !== null) {
                target = action;
                target.matches = matches;
                return true;
            }
        });
        return target !== null;
    });
    if (target !== null) {
        await target.act();
        return target.name;
    } else {
        await googlehome.notify(`あれすいません、「${command}」って何するんでしたっけ?`);
        logError('Undefined command: ', command);
    }
}

module.exports = (db, path, key, actions) => {
    db.ref(path).on('value', changed => {
        let command = changed.child(key).val().replace(/[  ]/g, '');
        if (command === '') {
            return;
        }
        action(command, actions).then((title) => {
            if (typeof(title) !== 'undefined') {
                logInfo('Action fired: ' + title);
            }
            db.ref(path).set({ [key]: '' });
        }).catch((err) => {
            logError('Unexpected error.', err);
            googlehome.notify('む、ごめんなさいなんかエラーみたいです');
        });
    });
};
