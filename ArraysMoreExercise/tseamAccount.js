function tseamAccount(arr) {
    let games = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        if (command === 'Play!') {
            break;
        }

        let [action, game] = command.split(' ');

        switch (action) {
            case 'Install':
                if (!games.includes(game)) {
                    games.push(game);
                }
                break;
            case 'Uninstall':
                let uninstallIndex = games.indexOf(game);
                if (uninstallIndex !== -1) {
                    games.splice(uninstallIndex, 1);
                }
                break;
            case 'Update':
                let updateIndex = games.indexOf(game);
                if (updateIndex !== -1) {
                    games.splice(updateIndex, 1);
                    games.push(game);
                }
                break;
            case 'Expansion':
                let [baseGame, expansion] = game.split('-');
                let baseGameIndex = games.indexOf(baseGame);
                if (baseGameIndex !== -1) {
                    games.splice(baseGameIndex + 1, 0, `${baseGame}:${expansion}`);
                }
                break;
        }
    }

    console.log(games.join(' '));
}
tseamAccount
([
    'CS WoW Diablo',

    'Install LoL',
    
    'Uninstall WoW',
    
    'Update Diablo',
    
    'Expansion CS-Go',
    
    'Play!'
])