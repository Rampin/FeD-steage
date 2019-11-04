function nonUniqueElements(data) {

    let counter = [];

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j <= data.length; j++) {
            if (i === j) {
                continue;
            }
            if (data[i] === data[j]) {
                break;
            }

            if (j === data.length) {
                counter[i] = 1;
            }
        }
    }


    for (let i = 0; i < data.length; i++) {
        if (counter[i] != undefined) {
            data.splice(i, 1);
            i--;

        }
    }
    return data;
}

/*
function nonUniqueElement(data) {
    data.splice(2,1);
return data;} */


// console.log(nonUniqueElements([1, 2, 3, 4, 5]));

function median(data) {

    let a = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i] < data[j]) {
                a = data[i];
                data[i] = data[j];
                data[j] = a;
            }
        }
    }


    return data;
}


//console.log(median([1,2,4,6,7,5,15,100,3,8,8]));


function countNeighbours(data, row, col) {
    let counter = 0;
    for (let i = row - 1; i <= row + 1; i++) {
        if (i === -1) { continue; }
        for (let j = col - 1; j <= col + 1; j++) {
            if (j === i || j === -1) { continue; }
            if (data[i][j] === 1) {
                counter = counter + 1;
            }
        }
    }
    return counter;
}

/*console.log(countNeighbours([[1, 0, 0, 1, 0],
[0, 1, 0, 0, 0],
[0, 0, 1, 0, 1],
[1, 0, 0, 0, 0],
[0, 0, 1, 0, 0]], 1, 2))*/

function check() {
    if (document.getElementById('x').value.length < 2) {
        window.alert('Insert Username!');
        return false;
    }
    else {
        return true;
    }
}

function color() {
    let colore=document.getElementById("y").value;
    if(colore===''){
        document.bgColor='lightblue';
    }
    else {document.bgColor=colore;}

}