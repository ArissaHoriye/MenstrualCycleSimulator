function idPanel(){
    var custDiv = document.getElementById("cust");
    if (custDiv.style.display === "none"){
        custDiv.style.display = "block";
    }
    else {
        custDiv.style.display = "none"
    }
    
}

function idPanel2(){
    var custDiv = document.getElementById("cust2");
    if (custDiv.style.display === "none"){
        custDiv.style.display = "block";
    }
    else {
        custDiv.style.display = "none"
    }
}

document.querySelector(".ex1").style.backgroundColor = "red";
document.querySelector(".ex2").style.backgroundColor = "red";