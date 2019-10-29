function merge(left, right) {
    let merged = []

    for (i = 0, j = 0; i < left.length, j < right.length;) {
        left[i] = Number(left[i]);
        right[j] = Number(right[j]);
        if (left[i] < right[j]) {
            merged[i + j] = left[i];
            i++;
        }
        else {
            merged[i + j] = right[j];
            j++;
        }


    }

    return merged;
}


console.log(merge([1, 2, 3], [3, 4, 6]) );