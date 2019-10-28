function findPosition(data, value) {
    if (isNaN(value) === true) {
        for (let i = 0; i <= (data.length - 1); i++) {
            if (isNaN(data[i]) === true) { return i; }
        }
    } else {
        for (i = 0; i <= (data.length - 1); i++) {
            if (data[i] === value) { return i; }

        }
    }




    return (-1);

}



console.log(findPosition([NaN, 1], 1) === 1)
console.log(findPosition([1, 2, 3], 3) === 2)
console.log(findPosition([1, 1, 1], 1) === 0)
console.log(findPosition(['1'], 1) === -1)
console.log(findPosition([], 57) === -1)
console.log(findPosition([1, NaN], NaN) === 1)