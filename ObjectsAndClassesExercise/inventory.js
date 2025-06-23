function inventory (arr) {

    let heroes = [];

    for (let i = 0; i < arr.length; i++) {
        
        const parts = arr[i].split(' / ');
        
        let name = parts[0];
        let level = parseInt(parts[1]);
        let items = [];

        for (let j = 2; j < parts.length; j++) {
            items.push(parts[j]);
        }
        
        items = items.join(' / ').split(', ');

        heroes.push({ name, level, items });

       
       
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log('Hero:', hero.name);
        console.log('level =>', hero.level);
        console.log('items =>', hero.items.join(', '));
    }

}
inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])