function score(x, y) {
    if (Math.sqrt(x ** 2 + y ** 2) <= 1) {
        return 10;
    }
    else if (Math.sqrt(x ** 2 + y ** 2) <= 5) {
        return 5;
    }
    else if (Math.sqrt(x ** 2 + y ** 2) <= 10) {
        return 1;
    }
    else {
        return 0;
    }
}

console.log(score(1,2));
console.log(score(-1,-2));
console.log(score(-1,2));
console.log(score(10,-20));
console.log(score(0,5));
