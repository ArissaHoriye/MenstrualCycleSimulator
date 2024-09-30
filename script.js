function idButtonDay() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}

function idPanel(){
    var custDiv = document.getElementById("cust");
    if (custDiv.style.display === "none"){
        custDiv.style.display = "block";
    }
    else {
        custDiv.style.display = "none"
    }
}