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
                tDays.innerHTML += "<td style=\"background-color:#ff6666;\">" + daysArray[i] + "</td>";
            } else {
                tDays.innerHTML += "<td>" + daysArray[i] + "</td>";
            }

        }

        tMonths.innerHTML += "<td colspan=\"" + daysArray.length + "\" style=\"text-align:center;\"> " + key + " </td>";

    }
    
    tYears.innerHTML += "<tr><td colspan=\"" + (daysArray.length * Object.keys(monthsArray).length) + "\" style=\"text-align: center\">2010</td></tr>";
    
}
