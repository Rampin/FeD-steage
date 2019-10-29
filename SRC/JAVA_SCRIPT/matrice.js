function sommariga(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        result[i] = 0;
        for (let j = 0; j < data[i].length; j++) {

            data[i][j]= data[i][j] || 0;   //nel caso ci sia un valore falsy, lo traduce in 0

            result[i] = result[i] + data[i][j];

        }
    }
    return result;

}

function sommacolonna(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            
            result[j] = 0;

        }
    }
    for (let i = 0; i < data.length; i++) {

        for (let j = 0; j < data[i].length; j++) {

            if (typeof(data[i][j])=== "string") {continue;}
            else{
            data[i][j]= data[i][j] || 0;}   //nel caso ci sia un valore falsy, lo traduce in 0

            result[j] = result[j] + data[i][j];

        }
    }
    return result;
}


console.log(sommacolonna([[1, 2, 3, 4], [3, 2, undefined, 4, 6], [1, 1, 1]]));
console.log(sommacolonna([[1, 2, 3, 4], [3, 2, 4, 6], [1, 1, 1 , 0]]));
console.log(sommacolonna([[ 1, 3, 2, 4], [NaN, null, undefined,'pippo']]));