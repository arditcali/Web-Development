
let x = 0;
document.getElementById("reset").onclick = function(){
    document.getElementById("result").innerHTML = x;
}

document.getElementById("incr").onclick = function(){
    x += 1;
    document.getElementById("result").innerHTML = x;
}

document.getElementById("decr").onclick = function(){
    x -= 1;
    document.getElementById("result").innerHTML = x;
}