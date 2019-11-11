function Armstrong(value) {
    let cont = 0;
    while (value > 1) {
        value /= 10;
        cont++;
    }
    let value1 = value;
    let div = 10 ** cont;
    let sum = 0;
    let cont1 = cont;
    while (cont > 1) {
        value1 /= 10 ** (cont - 1);
        value1 -= Math.floor(value) * (10 ** (cont - 1));
        sum += (Math.floor(value)) ** cont1;
        cont--;
    }
    if (sum === value) {
        return true;
    }
    return false;
}


console.log(Armstrong(153));