function Pangramma(string) {
    let a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'z', 'y', 'z'];
    let cont = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (string[i] === a[j]) {
                cont[j] = 1;
            }
        }
    }
    for (let i = 0; i < a.length; i++) {
        if (cont[i] !== 1) { return false; }
    }
    return true;
}

console.log(Pangramma('the five boxing wizards jump quickly'));
console.log(Pangramma('the five boxing wizards jumped'));