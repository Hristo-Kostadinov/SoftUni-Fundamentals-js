function dungeonestDark (arr) {

    const roomsString = arr[0];
    const rooms = roomsString.split(`|`);

    let health = 100;
    let coins = 0;
    let roomCount = 1;

    for (const room of rooms) {
        const roomElements = room.split(` `);
        const text = roomElements[0];
        const value = Number(roomElements[1]);

        if (text === `potion`) {
            let healthAdded = value;

            if (health + healthAdded > 100) {
                healthAdded = 100 - health;
            }

            health += healthAdded;
            console.log(`You healed for ${healthAdded} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (text === `chest`) {
            coins += value;
            console.log(`You found ${value} coins.`) 
        } else {
            const monsterName = text;
            const monsterAttack = value;

            health -= monsterAttack;

            if (health > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${roomCount}`);
                break;
            }
        }
        roomCount++;
    }


    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])