function legendaryFarming(str) {
    const keyMaterialQuantities = {
        shards: 0,
        fragments: 0,
        motes: 0
    };
    const junkMaterialQuantities = {};
    const legendaries = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' };

    const materialsInfo = str.split(' ');

    let legendaryObtained = false;

    for (let i = 0; i < materialsInfo.length; i += 2) {
        const quantity = Number(materialsInfo[i]);
        const material = materialsInfo[i + 1].toLowerCase();

        if (material in keyMaterialQuantities) {
            keyMaterialQuantities[material] += quantity;

            if (keyMaterialQuantities[material] >= 250 && !legendaryObtained) {
                keyMaterialQuantities[material] -= 250;
                console.log(`${legendaries[material]} obtained!`);
                legendaryObtained = true;
                break;
            }
        } else {
            if (material in junkMaterialQuantities) {
                junkMaterialQuantities[material] += quantity;
            } else {
                junkMaterialQuantities[material] = quantity;
            }
        }
    }

    const keyMaterialEntries = Object.entries(keyMaterialQuantities);
    keyMaterialEntries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (const [material, quantity] of keyMaterialEntries) {
        console.log(`${material}: ${quantity}`);
    }

    const junkMaterialEntries = Object.entries(junkMaterialQuantities);
    junkMaterialEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [material, quantity] of junkMaterialEntries) {
        console.log(`${material}: ${quantity}`);
    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')