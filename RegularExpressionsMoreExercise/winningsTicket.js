function winningTicket(input) {
    const tickets = input.split(/\s*,\s*/).filter(Boolean);
    const winningSymbols = ['@', '#', '$', '^'];

    tickets.forEach(ticket => {
        if (ticket.length !== 20) {
            console.log(`invalid ticket`);
            return;
        }

        const firstHalf = ticket.slice(0, 10);
        const secondHalf = ticket.slice(10, 20);

        let winningSymbol = '';
        let winningLength = 0;

        for (const symbol of winningSymbols) {
            const escapedSymbol = symbol.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$&');
            const regex = new RegExp(`${escapedSymbol}{6,10}`);
            const firstMatch = firstHalf.match(regex);
            const secondMatch = secondHalf.match(regex);

            if (firstMatch && secondMatch) {
                const matchLength = Math.min(firstMatch[0].length, secondMatch[0].length);
                if (matchLength > winningLength) {
                    winningLength = matchLength;
                    winningSymbol = symbol;
                }
            }
        }

        if (winningSymbol) {
            if (winningLength === 10) {
                console.log(`ticket "${ticket}" - ${winningLength}${winningSymbol} Jackpot!`);
            } else {
                console.log(`ticket "${ticket}" - ${winningLength}${winningSymbol}`);
            }
        } else {
            console.log(`ticket "${ticket}" - no match`);
        }
    });
}