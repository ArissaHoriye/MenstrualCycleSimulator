//GET THE MODAL
var modal = document.getElementById("myModal");
//GET THE BUTTON (OPENS THE MODAL)
var btn = document.getElementById("myBtn");
//CLICK THE BUTTON -> OPEN THE MODAL
btn.onclick = function() {
    modal.style.display = "block";
}

//2 de Agosto
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
btn2.onclick = function() {
    modal2.style.display = "block";
}

//3 de Agosto
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
btn3.onclick = function() {
    modal3.style.display = "block";
}

//4 de Agosto
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("myBtn4");
btn4.onclick = function() {
    modal4.style.display = "block";
}

//5 de Agosto
var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("myBtn5");
btn5.onclick = function() {
    modal5.style.display = "block";
}

//6 de Agosto
var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("myBtn6");
btn6.onclick = function() {
    modal6.style.display = "block";
}

//7 de Agosto
var modal7 = document.getElementById("myModal7");
var btn7 = document.getElementById("myBtn7");
btn7.onclick = function() {
    modal7.style.display = "block";
}

//8 de Agosto
var modal8 = document.getElementById("myModal8");
var btn8 = document.getElementById("myBtn8");
btn8.onclick = function() {
    modal8.style.display = "block";
}

//9 de Agosto
var modal9 = document.getElementById("myModal9");
var btn9 = document.getElementById("myBtn9");
btn9.onclick = function() {
    modal9.style.display = "block";
}

//10 de Agosto
var modal10 = document.getElementById("myModal10");
var btn10 = document.getElementById("myBtn10");
btn10.onclick = function() {
    modal10.style.display = "block";
}

//11 de Agosto
var modal11 = document.getElementById("myModal11");
var btn11 = document.getElementById("myBtn11");
btn11.onclick = function() {
    modal11.style.display = "block";
}

//12 de Agosto
var modal12 = document.getElementById("myModal12");
var btn12 = document.getElementById("myBtn12");
btn12.onclick = function() {
    modal12.style.display = "block";
}

//13 de Agosto
var modal13 = document.getElementById("myModal13");
var btn13 = document.getElementById("myBtn13");
btn13.onclick = function() {
    modal13.style.display = "block";
}

//14 de Agosto
var modal14 = document.getElementById("myModal14");
var btn14 = document.getElementById("myBtn14");
btn14.onclick = function() {
    modal14.style.display = "block";
}

//15 de Agosto
var modal15 = document.getElementById("myModal15");
var btn15 = document.getElementById("myBtn15");
btn15.onclick = function() {
    modal15.style.display = "block";
}

//16 de Agosto
var modal16 = document.getElementById("myModal16");
var btn16 = document.getElementById("myBtn16");
btn16.onclick = function() {
    modal16.style.display = "block";
}

//17 de Agosto
var modal17 = document.getElementById("myModal17");
var btn17 = document.getElementById("myBtn17");
btn17.onclick = function() {
    modal17.style.display = "block";
}

//18 de Agosto
var modal18 = document.getElementById("myModal18");
var btn18 = document.getElementById("myBtn18");
btn18.onclick = function() {
    modal18.style.display = "block";
}

//19 de Agosto
var modal19 = document.getElementById("myModal19");
var btn19 = document.getElementById("myBtn19");
btn19.onclick = function() {
    modal19.style.display = "block";
}

//20 de Agosto
var modal20 = document.getElementById("myModal20");
var btn20 = document.getElementById("myBtn20");
btn20.onclick = function() {
    modal20.style.display = "block";
}

//21 de Agosto
var modal21 = document.getElementById("myModal21");
var btn21 = document.getElementById("myBtn21");
btn21.onclick = function() {
    modal21.style.display = "block";
}

//22 de Agosto
var modal22 = document.getElementById("myModal22");
var btn22 = document.getElementById("myBtn22");
btn22.onclick = function() {
    modal22.style.display = "block";
}

//23 de Agosto
var modal23 = document.getElementById("myModal23");
var btn23 = document.getElementById("myBtn23");
btn23.onclick = function() {
    modal23.style.display = "block";
}

//24 de Agosto
var modal24 = document.getElementById("myModal24");
var btn24 = document.getElementById("myBtn24");
btn24.onclick = function() {
    modal24.style.display = "block";
}

//25 de Agosto
var modal25 = document.getElementById("myModal25");
var btn25 = document.getElementById("myBtn25");
btn25.onclick = function() {
    modal25.style.display = "block";
}

//26 de Agosto
var modal26 = document.getElementById("myModal26");
var btn26 = document.getElementById("myBtn26");
btn26.onclick = function() {
    modal26.style.display = "block";
}

//27 de Agosto
var modal27 = document.getElementById("myModal27");
var btn27 = document.getElementById("myBtn27");
btn27.onclick = function() {
    modal27.style.display = "block";
}

//28 de Agosto
var modal28 = document.getElementById("myModal28");
var btn28 = document.getElementById("myBtn28");
btn28.onclick = function() {
    modal28.style.display = "block";
}

//29 de Agosto
var modal29 = document.getElementById("myModal29");
var btn29 = document.getElementById("myBtn29");
btn29.onclick = function() {
    modal29.style.display = "block";
}

//30 de Agosto
var modal30 = document.getElementById("myModal30");
var btn30 = document.getElementById("myBtn30");
btn30.onclick = function() {
    modal30.style.display = "block";
}

//31 de Agosto
var modal31 = document.getElementById("myModal31");
var btn31 = document.getElementById("myBtn31");
btn31.onclick = function() {
    modal31.style.display = "block";
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
