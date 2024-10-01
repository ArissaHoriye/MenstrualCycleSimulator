/*
function displayText1() {
    var x = document.getElementById("Aug28");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }         
}

function displayText2() {
    var x = document.getElementById("Aug29");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }   
}
*/

/*var switchModal = () => {
    var modal = document.querySelector(".modal")
    var actualStyle = modal.style.display
    if(actualStyle === "block") {
        modal.style.display = "none"
    }
    else {
        modal.style.display = "block"
    }
}

var btn =
document.querySelector(".modalBtn")
btn.addEventListener("click",switchModal)

window.onclick = function(event) {
    var modal =
    document.querySelector(".modal")
    if(event.target == modal) {
        switchModal()
    }
}
*/

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}