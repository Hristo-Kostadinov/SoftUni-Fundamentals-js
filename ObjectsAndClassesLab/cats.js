function cats (catAsStings) {

    class Cat {


        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (const catStr of catAsStings) {
        const tokens = catStr.split(` `);
        const name = tokens[0];
        const age = tokens[1];

        const cat = new Cat(name, age);
        cat.meow();
    }
}
cats([`Candy 1`, `Kitty 5`, `Tom 7`])