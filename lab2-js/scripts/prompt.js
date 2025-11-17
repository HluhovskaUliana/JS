// ----- Об'єкту myTxt присвоїти значення селекторів 'h1.n2'
var myTxt = document.querySelector('h1.n2');

// ----- Об'єкту myTxt присвоїти значення селекторів '.myclass'
var myFont = document.querySelectorAll('.myclass');

for (var i = 0; i < myFont.length; i++) {
    myFont[i].style.fontSize = '35px';
}

myTxt.innerHTML = 'Привіт, студенте!';

var person = prompt('Як Вас звати');
if (person != null) {
    myTxt.innerHTML = "Я вітаю Вас " + person + "!" + "<br>" + " ";
}

myTxt.style.color = 'red';