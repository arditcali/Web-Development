
let rows = window.prompt("enter rows:");
let columns = window.prompt("enter columns:");
let char = '@';

var lbl = document.getElementById("lbl");

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            lbl.innerHTML += char;
        }
        lbl.innerHTML += "<br>";
    }



