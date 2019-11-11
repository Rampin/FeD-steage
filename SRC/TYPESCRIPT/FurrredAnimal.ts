interface Brushable {
    fullInfo(): string;
}
}

class FurredAnimal {
    first: string;
    constructor(first: string) {
        this.first = first;
    }
    fullInfo(): string {
        return this.first + ' is ';
    }
}


class Dog extends FurredAnimal implements Brushable {
    breed: string;
    constructor(first: string, breed: string) {
        super(first);
        this.breed = breed;
    }
    fullInfo(): string {
        return super.fullInfo() + this.breed;
    }

}

class Cat extends FurredAnimal implements Brushable {
    breed: string;
    constructor(first: string, breed: string) {
        super(first);
        this.breed = breed;
    }
    fullInfo(): string {
        return super.fullInfo() + this.breed;
    }

}

class Toy {
    first: string;
    constructor(first: string) {
        this.first = first;
    }
    fullInfo(): string {
        return this.first + ' ';
    }
}

class Teddy extends Toy implements Brushable {
    constructor(first: string) {
        super(first);
    }
    fullInfo(): string {
        return super.fullInfo() + 'is Teddy';
    }

}

let arr:Brushable[] = [new Dog('spike', 'dog'), new Cat('garfield', 'cat'), new Cat('romeo', 'cat'), new Dog('cane', 'dog'), new Teddy('Teddi'), new Teddy('Teddy1')]
arr.forEach((fa) => { console.log(fa.fullInfo()) });