//GET THE MODAL
var modal = document.getElementById("myModal");

//GET THE BUTTON (OPENS THE MODAL)
var btn = document.getElementById("myBtn");

//GET THE SPAN (CLOSES THE MODAL)
var span = document.getElementsByClassName("close")[0];

//CLICK THE BUTTON -> OPEN THE MODAL
btn.onclick = function() {
    modal.style.display = "block";
}
//CLICK THE SPAN 'x' -> CLOSE MODAL
span.onclick = function() {
    modal.style.display = "none";
}
//CLICK OUTSIDE MODAL -> CLOSE MODAL não tá funfando :<
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}