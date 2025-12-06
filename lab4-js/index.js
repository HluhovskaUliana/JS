// 1.1 Мінімальна довжина з трьох слів
function findMinLengthOfThreeWords(w1, w2, w3) {
    return Math.min(w1.length, w2.length, w3.length);
}
console.log(findMinLengthOfThreeWords('a', 'be', 'see')); // 1

// 1.2 Масив непарних чисел
function filterOddElements(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(filterOddElements([1, 2, 3, 4, 5])); // [1,3,5]

// 1.3 Довжина найкоротшого слова
function getLengthOfShortestElement(arr) {
    if (arr.length === 0) return 0;
    return Math.min(...arr.map(el => el.length));
}
console.log(getLengthOfShortestElement(["one", "two", "three"])); // 3

// 1.4 Об’єднання масивів
function joinArrayOfArrays(arr) {
    return [].concat(...arr);
}
console.log(joinArrayOfArrays([[1, 4], [true, false], ["x", "y"]])); // [1,4,true,false,'x','y']

// 1.5 Найменше число серед різних елементів
function findSmallestNumberAmongMixedElements(arr) {
    const nums = arr.filter(el => typeof el === 'number');
    if (nums.length === 0) return 0;
    return Math.min(...nums);
}
console.log(findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octopus"])); // 4

// 1.6 Сума від 1 до n
function computeSummationToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    return sum;
}
console.log(computeSummationToN(6)); // 21

// 1.7 Конвертація рейтингу у шкалу ECTS
function convertScoreToGrade(score) {
    if (score > 100 || score < 0) return 'INVALID SCORE';
    if (score >= 90) return 'A';
    if (score >= 82) return 'B';
    if (score >= 75) return 'C';
    if (score >= 69) return 'D';
    if (score >= 60) return 'E';
    if (score >= 35) return 'Fx';
    return 'F';
}
console.log(convertScoreToGrade(91)); // "A"

// 1.8 Найдовше слово з трьох
function getLongestOfThreeWords(w1, w2, w3) {
    const arr = [w1, w2, w3];
    let longest = arr[0];
    for (let word of arr) {
        if (word.length > longest.length) longest = word;
    }
    return longest;
}
console.log(getLongestOfThreeWords('these', 'three', 'words')); // 'these'

// 1.9 Добуток без *
function multiply(num1, num2) {
    let result = 0;
    for (let i = 0; i < Math.abs(num2); i++) {
        result += num1;
    }
    return num2 < 0 ? -result : result;
}
console.log(multiply(4, 7)); // 28

// 1.10 Сума чисел між двома
function computeSumBetween(num1, num2) {
    if (num2 <= num1) return 0;
    let sum = 0;
    for (let i = num1; i < num2; i++) {
        sum += i;
    }
    return sum;
}
console.log(computeSumBetween(2, 5)); // 9

