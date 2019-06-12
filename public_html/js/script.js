/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    createDate();
});

function createDate() {
    var daysArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    var monthsArray = {June: 30,July: 30, August: 31};
 
    var tDays = document.getElementById("days");
    var tMonths = document.getElementById("months");
    var tYears = document.getElementById("years");
  
  
    for (var key in monthsArray) {
        
        for (var i = 0; i < daysArray.length; i++) {
            if (((i + 1) % 7 === 6 || (i + 1) % 7 === 0)) {
                tDays.innerHTML += "<td style=\"background-color:#ff6666;min-width:35px;\"><input type='checkbox' style='display:none;'/>" + daysArray[i] + "</td>";
            } else {
                tDays.innerHTML += "<td style=\"min-width:35px;\"><input type='checkbox' style='display:none;'/>" + daysArray[i] + "</td>";
            }

        }

        tMonths.innerHTML += "<td colspan=\"" + daysArray.length + "\" style=\"text-align:center;\"> " + key + " </td>";

    }
    
    tYears.innerHTML += "<tr><td colspan=\"" + (daysArray.length * Object.keys(monthsArray).length) + "\" style=\"text-align: center\">2010</td></tr>";
    
}

$( "#sub-container" ).draggable({ containment: ".main-table", scroll: false, grid: [ 35, 35 ]});

//// Make the DIV element draggable:
//dragElement(document.getElementById("sub-container"));
//
//function dragElement(elmnt) {
//  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//  if (document.getElementById("sub-container")) {
//    // if present, the header is where you move the DIV from:
//    document.getElementById("sub-container").onmousedown = dragMouseDown;
//  } else {
//    // otherwise, move the DIV from anywhere inside the DIV: 
//    elmnt.onmousedown = dragMouseDown;
//  }
//
//  function dragMouseDown(e) {
///// Make the DIV element draggable:/    e = e || window.event;
//    e.preventDefault();
//    // get the mouse cursor position at startup:
//    pos3 = e.clientX;
//    pos4 = e.clientY;
//    document.onmouseup = closeDragElement;
//    // call a function whenever the cursor moves:
//    document.onmousemove = elementDrag;
//  }
//
//  function elementDrag(e) {
//    e = e || window.event;
//    e.preventDefault();
//    // calculate the new cursor position:
//    pos1 = pos3 - e.clientX;
////    pos2 = pos4 - e.clientY;
//    pos3 = e.clientX;
//    pos4 = e.clientY;
//  // set the element's new position:
//    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//  }
//
//  function closeDragElement() {
//    // stop moving when mouse button is released:
//    document.onmouseup = null;
//   document.onmousemove = null;
//  }
//}


   
