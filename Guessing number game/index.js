
const nrs = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("button").onclick = function(){
    let answer = document.getElementById("numberInput").value;
    guesses++;

    if(nrs == answer){
        alert("right answer");
    }
    else if(answer < nrs){
        alert("to small");
    }
    else{
        alert("to large");
    }
}
