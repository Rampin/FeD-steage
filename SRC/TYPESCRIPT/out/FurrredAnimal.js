class FurredAnimal {
    constructor(first) {
        this.first = first;
    }
    fullInfo() {
        return this.first + ' is ';
    }
}
class Dog extends FurredAnimal {
    constructor(first, breed) {
        super(first);
        this.breed = breed;
    }
    fullInfo() {
        return super.fullInfo() + this.breed;
    }
}
class Cat extends FurredAnimal {
    constructor(first, breed) {
        super(first);
        this.breed = breed;
    }
    fullInfo() {
        return super.fullInfo() + this.breed;
    }
}
class Toy {
    constructor(first) {
        this.first = first;
    }
    fullInfo() {
        return this.first + ' ';
    }
}
class Teddy extends Toy {
    constructor(first) {
        super(first);
    }
    fullInfo() {
        return super.fullInfo() + 'is Teddy';
    }
}
let Brushable = [new Dog('spike', 'dog'), new Cat('garfield', 'cat'), new Cat('romeo', 'cat'), new Dog('cane', 'dog'), new Teddy('Teddi'), new Teddy('Teddy1')];
Brushable.forEach((fa) => { console.log(fa.fullInfo()); });
//# sourceMappingURL=FurrredAnimal.js.map