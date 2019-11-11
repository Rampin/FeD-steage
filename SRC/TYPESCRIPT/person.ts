class Person {
    first: string;
    last: string;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    fullInfo(): string {
        return this.first + ' ' + this.last;
    }


    static merge(p1: Person, p2: Person) {
        return new Person(p1.first + p2.first, p1.last + p2.last)
    }
    get fullName() {
        return this.first + ' ' + this.last;
    }
}
let tom = new Person('Tom', 'Jones');
let bob = new Person('Bob', 'Hope');

let p: Person = new Person('Tom', 'Jones');
let persons = [new Person('a', 'b'), new Person('c', 'd')];

console.log(p.fullInfo());
persons.forEach((a) => console.log(a.fullInfo()));

console.log(Person.merge(tom, bob).fullName)