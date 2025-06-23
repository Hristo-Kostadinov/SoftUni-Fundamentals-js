function cardGame(arr) {
    const players = new Map();

    for (const line of arr) {
        const [name, cardsString] = line.split(': ');
        const cards = cardsString.split(', ');

        if (!players.has(name)) {
            players.set(name, new Set());
        }

        const playerCards = players.get(name);
        for (const card of cards) {
            playerCards.add(card);
        }
    }

    const cardPower = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
        '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
    };

    const cardType = {
        'C': 1, 'D': 2, 'H': 3, 'S': 4
    };

    for (const [player, cards] of players) {
        let totalPoints = 0;

        for (const card of cards) {
            const type = card[card.length - 1];
            let power = card[0];

            if (card[0] === '1' && card[1] === '0') {
                power = '10';
            }

            const cardPoints = cardPower[power] * cardType[type];
            totalPoints += cardPoints;
        }

        console.log(`${player}: ${totalPoints}`);
    }
}
cardGame
([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD, JD, JD'
])