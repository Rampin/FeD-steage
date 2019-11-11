class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    fullInfo() {
        return this.first + ' ' + this.last;
    }
    static merge(p1, p2) {
        return new Person(p1.first + p2.first, p1.last + p2.last);
    }
    get fullName() {
        return this.first + ' ' + this.last;
    }
}
let tom = new Person('Tom', 'Jones');
let bob = new Person('Bob', 'Hope');
let p = new Person('Tom', 'Jones');
let persons = [new Person('a', 'b'), new Person('c', 'd')];
console.log(p.fullInfo());
persons.forEach((a) => console.log(a.fullInfo()));
console.log(Person.merge(tom, bob).fullName);
//# sourceMappingURL=person.js.map