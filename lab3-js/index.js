"use strict";

// innerHTML
document.getElementById("btn-inner").addEventListener("click", () => {
    const sum = 0.1 + 0.2;
    const resultEl = document.getElementsByClassName("m1")[0];
    resultEl.innerHTML = "В JavaScript<br>0.1 + 0.2 = " + sum;
    resultEl.style.color = "#2d264a";
});

// document.write
document.getElementById("btn-write").addEventListener("click", () => {
    document.write("<h2>Сторінку перезаписано</h2><p>5 + 9 = " + (5 + 9) + "</p>");
});

// window.alert
document.getElementById("btn-alert").addEventListener("click", () => {
    window.alert("Сума чисел 5+9 дорівнює " + (5 + 9));
});

// console.log
document.getElementById("btn-console").addEventListener("click", () => {
    console.log(20 + 17);
});

function str_del() {
    const selection = window.getSelection().toString();
    const elem = document.getElementById("elem");
    const str = elem.innerHTML;

    const start = str.indexOf(selection);
    if (start === -1 || selection.length === 0) return;

    const end = start + selection.length;
    const result = str.slice(0, start) + str.slice(end);

    elem.innerHTML = result;
}
// 5.2.1 getProperty
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty({ key: 'value' }, 'key'));

// 5.2.2 addProperty
function addProperty(obj, key) {
    obj[key] = true;
    return obj[key];
}
const myObj = {};
addProperty(myObj, "myProperty");
console.log(myObj.myProperty);

// 5.2.3 removeProperty
function removeProperty(obj, key) {
    delete obj[key];
}
const obj3 = { name: 'Sam', age: 20 };
removeProperty(obj3, 'name');
console.log(obj3.name); // undefined

// 5.2.4 getFullName
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getFullName('Joe', 'Smith'));

// 5.2.5 getLengthOfWord
function getLengthOfWord(word) {
    return word.length;
}
console.log(getLengthOfWord('some'));

// 5.2.6 getLengthOfTwoWords
function getLengthOfTwoWords(w1, w2) {
    return w1.length + w2.length;
}
console.log(getLengthOfTwoWords('some', 'words'));

// 5.2.7 isGreaterThan
function isGreaterThan(num1, num2) {
    return num2 > num1;
}
console.log(isGreaterThan(11, 10));

// 5.2.8 isEven
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(11));

// 5.2.9 isSameLength
function isSameLength(w1, w2) {
    return w1.length === w2.length;
}
console.log(isSameLength('words', 'super'));

// 5.2.10 isEvenAndGreaterThanTen
function isEvenAndGreaterThanTen(n) {
    return n % 2 === 0 && n > 10;
}
console.log(isEvenAndGreaterThanTen(13));

// 5.2.11 computeAreaOfATriangle
function computeAreaOfATriangle(base, height) {
    return 0.5 * base * height;
}
console.log(computeAreaOfATriangle(4, 6));
