
document.getElementById("submitbutton").onclick = function(){

    const checkbox = document.getElementById("mycheckbox");
    const visa = document.getElementById("visa");
    const mastercard = document.getElementById("mastercard");
    const paypal = document.getElementById("paypal");

    if(checkbox.checked){
        console.log("subscribed");
    }
    else{
        console.log("not subscribed");
    }

    if(visa.checked){
        console.log("you selcted visa card")
    }
    else if(mastercard.checked){
        console.log("you selected mastercard");
    }
    else{
        console.log("you selected paypal");
    }
}

