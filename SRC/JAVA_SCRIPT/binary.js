function binarySum(left, right) {
    let sum = [];

    let n1 = Array.from(left);
    let n2 = Array.from(right);

    for (i = left.length - 1; i >= 0; i--) {
        sum[i + 1] = 0;
        left[i] = (left[i]);
        right[i] = (right[i]);
    }

    for (i = left.length - 1; i >= 0; i--) {
        if ((n1[i] == 1 && n2[i] == 0) || (n1[i] == 0 && n2[i] == 1)) {
            if (sum[i + 1] == 1) {
                sum[i + 1] = 0;
                sum[i] = 1;
            }
            else {
                sum[i + 1] = 1;
            }
        }
        else if ((n1[i] == 0 && n2[i] == 0)) {
            if (sum[i + 1] = 1) {
                sum[i + 1] = 1;

            }
            else {
                sum[i + 1] = 0;
            }
        }
        else {
            sum[i + 1] = 0;
            sum[i] = 1;
        }
    }
    sum = sum.join('');

    return sum;

}

console.log(binarySum("100", "101"))
console.log(binarySum("1001", "1101"));
