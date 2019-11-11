function sort(array) {
    let arr=array;
    arr.sort((left, right) => {
        if (left < right) {
            return 1;
        }
        else if (left > right) {
            return -1;
        }
        else {
            return 0;
        }
    });
    console.log(arr);
    let sliced=array.slice(1,array.length-1);
    console.log(sliced);
    let odds=array.filter(value => !(value%2));
    console.log(odds);
}

sort([4,3,5,1,7,12]);