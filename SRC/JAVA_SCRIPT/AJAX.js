function getInfo() {
    let request = new XMLHttpRequest();
    console.log("CALLBACK");
    request.onload = callback;
    
    request.open("GET", "tom.json");
    console.log("DoneOpen!");
    request.send();
    console.log("DoneSend!");
}

function callback() {
    if (this.status != 200) {
       console.log("maurizio gay");
        return;
    } 
    let target = [document.getElementById("Name"), document.getElementById("Job"), document.getElementsByClassName("check")];
    let json = JSON.parse(this.responseText);
    target[0].value=json.Name;
    target[1].value=json.Job;
    for (let i = 0; i < target[2].length; i++) {
        for (let j = 0; j < json.Programs.length; j++) {
            if (target[2][i].value ===json.Programs[j] ) {
                target[2][i].checked = true;
            }
        }
    }
}
