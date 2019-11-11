function Armstrong(value) {
    let cont = 0;
    while (value >= 1) {
        value /= 10;
        cont++;
    }
    let value1 = value;
    let sum = 0;
    let cont1 = cont;
    while (cont > 1) {
        value /= 10 ** (cont - 1);
        sum += (Math.floor(value)) ** cont1;
        value =value1 - (Math.floor(value) * (10 ** (cont - 1)));
        cont--;
    }
    if (sum === value1) {
        return true;
    }
    return false;
}


console.log(Armstrong(153));