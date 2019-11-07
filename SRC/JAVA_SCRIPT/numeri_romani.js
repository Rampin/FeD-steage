function romanize(num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}



function getdata() {
    let num = document.getElementById("numero").value;
    if (num > 3999) {
        document.getElementById("image").src = "../img/giuliocesare.gif";
        document.getElementById("error").textContent = 'SELECT A NUMBER BETWEEN 1 AND 3999!';
    }
    else {
        let res = romanize(num);
        document.getElementById("result").value = res;

    }
    if (num == 69) {
        document.getElementById("image").src = "../img/nice.gif";

    }
    console.log('Done!');
}


$(function() {$('input').keypress(getdata2)});

    function getdata2(event){
    console.log('Tasto pigiato!');
    if(event.key == 'Enter') {
    console.log('Enter riconosciuto');
    let num = document.getElementById("numero").value;
    if (num > 3999) {
        document.getElementById("image").src = "../img/giuliocesare.gif";
        document.getElementById("error").textContent = 'SELECT A NUMBER BETWEEN 1 AND 3999!';
    }
    else {
        let res = romanize(num);
        document.getElementById("result").value = res;

    }
    if (num == 69) {
        document.getElementById("image").src = "../img/nice.gif";

    }
    console.log('Done!');
}
}

function remove() {
    let image = document.getElementById("image");
    image.src = "";
    document.getElementById("error").textContent = '';
    document.getElementById("result").value = '';

}

