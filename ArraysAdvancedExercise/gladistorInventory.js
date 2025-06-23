function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');

    for (let command of arr) {
        let tokens = command.split(' ');
        const action = tokens.shift();
        const equipment = tokens.shift();

        if (action === 'Buy') {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }
        } else if (action === 'Trash') {
            const equipmentIdx = inventory.indexOf(equipment);
            if (equipmentIdx !== -1) {
                inventory.splice(equipmentIdx, 1);
            }
        } else if (action === 'Repair') {
            const equipmentIdx = inventory.indexOf(equipment);
            if (equipmentIdx !== -1) {
                inventory.splice(equipmentIdx, 1);
                inventory.push(equipment);
            }
        } else if (action === 'Upgrade') {
            let equipmentTokens = equipment.split('-');
            const oldEquipment = equipmentTokens[0];
            const upgrade = equipmentTokens[1];
            const oldEquipmentIdx = inventory.indexOf(oldEquipment);

            if (oldEquipmentIdx !== -1) {
                inventory.splice(oldEquipmentIdx + 1, 0, `${oldEquipment}:${upgrade}`);
            }
        }
    }

    console.log(inventory.join(' '));
}
gladiatorInventory([
    'SWORD Shield',
    'Spear',
    'Buy Bag',    
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])