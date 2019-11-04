function merge(left, right) {
    let merged;

    left = left.join('');

    right = right.join('');

    merged = (left + right);

    merged = Array.from(merged);

    for (i = 0; i < merged.length; i++) {

        for (j = 0; j < merged.length; j++) {
            merged[j] = Number(merged[j]);
            if (merged[i] < merged[j]) {
                let tempo = merged[i];
                merged[i] = merged[j];
                merged[j] = tempo;
            }
        }
    }

    return merged;
}


//console.log(merge([1, 2, 3], [3, 4, 6]));

function mostWanted(data) {
    data=Array.from(data);
    
    return data;
}
console.log(mostWanted('ciao come stai?'));