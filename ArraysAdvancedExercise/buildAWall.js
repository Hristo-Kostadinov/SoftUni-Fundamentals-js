function buildAWall (sectionHeights) {
    let concreteQtys = [];
    let totalConcrete = 0

    while (sectionHeights.some(sectionHeight => sectionHeight < 30)) {
        let dailyConcrete = 0; 

        for (let index in sectionHeights) {
            if (sectionHeights[index] < 30) {
                sectionHeights[index]++;
                dailyConcrete += 195;
            }
        }

        concreteQtys.push(dailyConcrete);
        totalConcrete += dailyConcrete;
    }

    console.log(concreteQtys.join(`, `));
    console.log(`${totalConcrete * 1900} pesos`);
}
buildAWall([21, 25, 28])