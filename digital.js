const hourElem = document.getElementById("hour");
const mintElem = document.getElementById("minute");
const secElem = document.getElementById("sec");
const amPmElem = document.getElementById("amPm");

setInterval(function(){
    const date = new Date();
    let hours = date.getHours();
    let amPm = "AM";
    if(hours > 11) {
        amPm = "PM";
        if(hours > 12) {
            hours -= 12; 
        }
    }

    

    hourElem.innerText = hours;
    mintElem.innerText = date.getMinutes();
    secElem.innerText = date.getSeconds();
    amPmElem.innerText = amPm;

}, 1000);