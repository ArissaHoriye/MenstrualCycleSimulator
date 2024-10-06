//FUNCTION TRIGGERED BY BUTTON.ONCLICK
function btnClick(e) {
    e.style.display = "block";
}
//GET THE MODAL
var modal = document.getElementById("myModal");
//GET THE BUTTON (OPENS THE MODAL)
document.getElementById("myBtn").onclick = () => {
    btnClick(modal);
}

//2 de Agosto
var modal2 = document.getElementById("myModal2");
document.getElementById("myBtn2").onclick = () => {
    btnClick(modal2);
}

//3 de Agosto
var modal3 = document.getElementById("myModal3");
document.getElementById("myBtn3").onclick = () => {
    btnClick(modal3);
}

//4 de Agosto
var modal4 = document.getElementById("myModal4");
document.getElementById("myBtn4").onclick = () => {
    btnClick(modal4);
}

//5 de Agosto
var modal5 = document.getElementById("myModal5");
document.getElementById("myBtn5").onclick = () => {
    btnClick(modal5);
}

//6 de Agosto
var modal6 = document.getElementById("myModal6");
document.getElementById("myBtn6").onclick = () => {
    btnClick(modal6);
}

//7 de Agosto
var modal7 = document.getElementById("myModal7");
document.getElementById("myBtn7").onclick = () => {
    btnClick(modal7);
}

//8 de Agosto
var modal8 = document.getElementById("myModal8");
document.getElementById("myBtn8").onclick = () => {
    btnClick(modal8);
}

//9 de Agosto
var modal9 = document.getElementById("myModal9");
document.getElementById("myBtn9").onclick = () => {
    btnClick(modal9);
}

//10 de Agosto
var modal10 = document.getElementById("myModal10");
document.getElementById("myBtn10").onclick = () => {
    btnClick(modal10);
}

//11 de Agosto
var modal11 = document.getElementById("myModal11");
document.getElementById("myBtn11").onclick = () => {
    btnClick(modal11);
}

//12 de Agosto
var modal12 = document.getElementById("myModal12");
document.getElementById("myBtn12").onclick = () => {
    btnClick(modal12);
}

//13 de Agosto
var modal13 = document.getElementById("myModal13");
document.getElementById("myBtn13").onclick = () => {
    btnClick(modal13);
}

//14 de Agosto
var modal14 = document.getElementById("myModal14");
document.getElementById("myBtn14").onclick = () => {
    btnClick(modal14);
}

//15 de Agosto
var modal15 = document.getElementById("myModal15");
document.getElementById("myBtn15").onclick = () => {
    btnClick(modal15);
}

//16 de Agosto
var modal16 = document.getElementById("myModal16");
document.getElementById("myBtn16").onclick = () => {
    btnClick(modal16);
}

//17 de Agosto
var modal17 = document.getElementById("myModal17");
document.getElementById("myBtn17").onclick = () => {
    btnClick(modal17);
}

//18 de Agosto
var modal18 = document.getElementById("myModal18");
document.getElementById("myBtn18").onclick = () => {
    btnClick(modal18);
}

//19 de Agosto
var modal19 = document.getElementById("myModal19");
document.getElementById("myBtn19").onclick = () => {
    btnClick(modal19);
}

//20 de Agosto
var modal20 = document.getElementById("myModal20");
document.getElementById("myBtn20").onclick = () => {
    btnClick(modal20);
}

//21 de Agosto
var modal21 = document.getElementById("myModal21");
document.getElementById("myBtn21").onclick = () => {
    btnClick(modal21);
}
//22 de Agosto
var modal22 = document.getElementById("myModal22");
document.getElementById("myBtn22").onclick = () => {
    btnClick(modal22);
}

//23 de Agosto
var modal23 = document.getElementById("myModal23");
document.getElementById("myBtn23").onclick = () => {
    btnClick(modal23);
}

//24 de Agosto
var modal24 = document.getElementById("myModal24");
document.getElementById("myBtn24").onclick = () => {
    btnClick(modal24);
}

//25 de Agosto
var modal25 = document.getElementById("myModal25");
document.getElementById("myBtn25").onclick = () => {
    btnClick(modal25);
}

//26 de Agosto
var modal26 = document.getElementById("myModal26");
document.getElementById("myBtn26").onclick = () => {
    btnClick(modal26);
}

//27 de Agosto
var modal27 = document.getElementById("myModal27");
document.getElementById("myBtn27").onclick = () => {
    btnClick(modal27);
}

//28 de Agosto
var modal28 = document.getElementById("myModal28");
document.getElementById("myBtn28").onclick = () => {
    btnClick(modal28);
}
//29 de Agosto
var modal29 = document.getElementById("myModal29");
document.getElementById("myBtn29").onclick = () => {
    btnClick(modal29);
}

//30 de Agosto
var modal30 = document.getElementById("myModal30");
document.getElementById("myBtn30").onclick = () => {
    btnClick(modal30);
}

//31 de Agosto
var modal31 = document.getElementById("myModal31");
document.getElementById("myBtn31").onclick = () => {
    btnClick(modal31);
}

//window onclick => none
var modalAll = [modal, modal2, modal3, modal4, modal5, modal6, modal7, modal8, modal9, modal10, 
                modal11, modal12, modal13, modal14, modal15, modal16, modal17, modal18, modal19,
                modal20, modal21, modal22, modal23, modal24, modal25, modal26, modal27, modal28,
                modal29, modal30, modal31];

window.onclick = function(event) {                
    for (var i=0; i<modalAll.length; i+=1) {
        if (event.target == modalAll[i]) {
            modalAll[i].style.display = "none";
        }
    }
}
