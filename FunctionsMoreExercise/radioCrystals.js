function radioCrystals(input) {
    let targetThickness = input[0];

    for (let i = 1; i < input.length; i++) {
        let crystalThickness = input[i];

        console.log(`Processing chunk ${crystalThickness} microns`);

        let cutCount = 0;
        while (crystalThickness / 4 >= targetThickness) {
            crystalThickness /= 4;
            cutCount++;
        }
        if (cutCount > 0) {
            console.log(`Cut x${cutCount}`);
            console.log('Transporting and washing');
            crystalThickness = Math.floor(crystalThickness);
        }

        let lapCount = 0;
        while (crystalThickness * 0.8 >= targetThickness) {
            crystalThickness *= 0.8;
            lapCount++;
        }
        if (lapCount > 0) {
            console.log(`Lap x${lapCount}`);
            console.log('Transporting and washing');
            crystalThickness = Math.floor(crystalThickness);
        }

        let grindCount = 0;
        while (crystalThickness - 20 >= targetThickness) {
            crystalThickness -= 20;
            grindCount++;
        }
        if (grindCount > 0) {
            console.log(`Grind x${grindCount}`);
            console.log('Transporting and washing');
            crystalThickness = Math.floor(crystalThickness);
        }

        let etchCount = 0;
        while (crystalThickness - 2 >= targetThickness - 1) {
            crystalThickness -= 2;
            etchCount++;
        }
        if (etchCount > 0) {
            console.log(`Etch x${etchCount}`);
            console.log('Transporting and washing');
            crystalThickness = Math.floor(crystalThickness);
        }

        if (crystalThickness === targetThickness - 1) {
            crystalThickness += 1;
            console.log('X-ray x1');
        }

        console.log(`Finished crystal ${crystalThickness} microns`);
    }
}
radioCrystals([1375, 50000])