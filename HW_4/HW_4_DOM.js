"use strict"

let startTime = Date.now() //count time from loadinig page until leaving it

//Скрипт який виводить в консоль дату і час коли DOM побудований, але css, 
//зображення ще не завантажились.
document.addEventListener('DOMContentLoaded', () => {
	let date = new Date();
	console.log(date.getDate()  + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " +
		date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
});

//Скрипт який виводить в консоль дату і час коли DOM побудований і css, зображення вже завантажились.
window.onload = function() {
	let date = new Date();
	console.log(date.getDate()  + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " +
		date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}

//Скрипт який виводить в консоль дату і час коли юзер натиснув на закрити вкладку або
// перезавантажити сторінку.

window.onbeforeunload = function() {
	let date = new Date();
	console.log(date.getDate()  + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " +
		date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
	return false;
}

//Скрипт який виводить повертає назву браузера та назву операційної системи через дефіс "-" 
//як одну строку.

window.onload = function() { 
    let infoString = "";

    //Detect name of browser
     if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        infoString += "Opera";
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        infoString += "Chrome";
    }
    else if(navigator.userAgent.indexOf("Safari") != -1) {
        infoString += "Safari";
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) {
         infoString += "Firefox";
    }
    else {
       infoString += "Can't be detected";
    }

    //Detect name of operating system
    infoString += "-"
    if (navigator.userAgent.indexOf("Win") != -1) {
    	infoString += "Windows OS";
    } 
    else if (navigator.userAgent.indexOf("Mac") != -1) {
    	infoString += "MacOS";
    }
    else if (navigator.userAgent.indexOf("X11") != -1) {
    	infoString += "UNIX OS";
    }
    else if (navigator.userAgent.indexOf("Linux") != -1) {
    	infoString += "Linux OS";
    }
  	else {
  		infoString += "Can't be detected";
  	}
  	console.log(infoString);
    }


//Скрипт який змушує браузер показувати сповіщення, коли ви намагаєтесь 
//перезавантажити сторінку, видалити вкладку, чи вимкнути браузер.

window.onbeforeunload = function () {
	return false;	
};

//Скрипт який виводить в консоль скільки секунд юзер перебував на сторінці,
// після того як юзер натиснув на закрити вкладку або перезавантажити сторінку.

window.onbeforeunload = function () {
	let endTime = Date.now();
	let resultTime = endTime - startTime;
	console.log(resultTime/1000); 
};




