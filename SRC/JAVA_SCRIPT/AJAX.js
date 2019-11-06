function getInfo() {
    let request = new XMLHttpRequest();
    request.onload = callback;
    request.open("GET", "TOM.json");
    request.send();
}

function callback() {
    let target = [document.getElementById('Name'), document.getElementById('Job')];
    if (this.status != 200) {
        target.value += "[" + this.status + "]\n";
        return;
    }
    let text = this.responseText;
    for (i = 0; i < target.length; i++) {
        target[i]=text[i];
    }
    
}