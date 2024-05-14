
document.getElementById("sButton").onclick = function(){
    let temp;

    if(document.getElementById("celc").checked){
        temp = document.getElementById("temp").Value;
        temp = Number(temp);
        temp = celcius(temp);
        document.getElementById("convertedTemp").innerHTML = temp + " C";
    }
    else if(document.getElementById("faren").checked){
        temp = document.getElementById("temp").Value;
        temp = Number(temp);
        temp = farenheit(temp);
        document.getElementById("convertedTemp").innerHTML = temp + " F";
    }
    else{
        document.getElementById("convertedTemp").innerHTML = "Select a unit!";
    }
}
function celcius(temp){
    return (temp - 32) * (5 / 9);
}

function farenheit(temp){
    return temp * 9 / 5 + 32;
}
