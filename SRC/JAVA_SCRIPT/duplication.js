function duplication(data) {

    let cont = [];
    for (i = 0; i < data.length; i++) {
        for (j = 0; j < data.length; j++) {
            if (j === i) { continue; }
            else {
                if (data[i] === data[j]) {
                    cont[i] = 1;
                }
                else { cont[i] = 0; }
            }
        }
    }
    let result = [];
    for (i = 0; i < data.length; i++) {
        if (cont[i] === 1) {
            result.push(data[i]);
        }

    }
    return result;
}


console.log(duplication([1, 1, 3, 2, 2, 2]))