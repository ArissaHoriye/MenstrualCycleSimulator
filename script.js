//FUNCTION TRIGGERED BY BUTTON.ONCLICK
function btnClick(e) {
    e.style.display = "block";
}

const modalAll = [];

for (let i = 1; i <= 31; i++) {
    let modal = document.getElementById("myModal" + i);
    modalAll.push(modal);
    document.getElementById("myBtn" + i).onclick = () => {
        btnClick(modal);
    }
}

window.onclick = function(event) {                
    for (let i=0; i<modalAll.length; i+=1) {
        if (event.target == modalAll[i]) {
            modalAll[i].style.display = "none";
        }
    }
}
