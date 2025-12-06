
// 1.1
function computeAreaOfARectangle(length, width) {
    return length * width;
}
console.log("1.1:", computeAreaOfARectangle(4, 8));

// 1.2
function computeAreaOfACircle(radius) {
    return Math.PI * radius * radius;
}
console.log("1.2:", computeAreaOfACircle(4));

// 1.3
function computePower(base, exponent) {
    return Math.pow(base, exponent);
}
console.log("1.3:", computePower(2, 3));

// 1.4
function computeSquareRoot(num) {
    return Math.sqrt(num);
}
console.log("1.4:", computeSquareRoot(9));

// 1.5
function getLengthOfThreeWords(word1, word2, word3) {
    return word1.length + word2.length + word3.length;
}
console.log("1.5:", getLengthOfThreeWords('some', 'other', 'words'));

// 1.6
function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log("1.6:", joinArrays([1, 2], [3, 4]));

// 1.7
function getProductOfAllElementsAtProperty(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key].length === 0) {
        return 0;
    }
    return obj[key].reduce((product, el) => product * el, 1);
}
var obj = { key: [1, 2, 3, 4] };
console.log("1.7:", getProductOfAllElementsAtProperty(obj, 'key'));

// 1.8
function sumDigits(num) {
    var str = num.toString();
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '-') {
            sum -= Number(str[i+1]);
            i++;
        } else {
            sum += Number(str[i]);
        }
    }
    return sum;
}
console.log("1.8:", sumDigits(1148));
console.log("1.8:", sumDigits(-316));

// 1.9
function findShortestWordAmongMixedElements(arr) {
    var words = arr.filter(el => typeof el === 'string');
    if (words.length === 0) return '';
    return words.reduce((shortest, word) => word.length < shortest.length ? word : shortest);
}
console.log("1.9:", findShortestWordAmongMixedElements([4, 'two', 2, 'three']));

// 1.10
function findSmallestNumberAmongMixedElements(arr) {
    var nums = arr.filter(el => typeof el === 'number');
    if (nums.length === 0) return '';
    return Math.min(...nums);
}
console.log("1.10:", findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']));

// 1.11
function modulo(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) return NaN;
    if (num2 === 0) return NaN;
    if (num1 === 0) return 0;
    return num1 - Math.floor(num1 / num2) * num2;
}
console.log("1.11:", modulo(25, 4));

// 1.12
function flipEveryNChars(str, n) {
    var result = '';
    for (var i = 0; i < str.length; i += n) {
        result += str.substr(i, n).split('').reverse().join('');
    }
    return result;
}
console.log("1.12:", flipEveryNChars('a short example', 5));

// 1.13
function detectOutlierValue(str) {
    var arr = str.split(' ').map(Number);
    var evens = arr.filter(x => x % 2 === 0);
    var odds = arr.filter(x => x % 2 !== 0);
    return evens.length === 1 ? arr.indexOf(evens[0]) + 1 : arr.indexOf(odds[0]) + 1;
}
console.log("1.13:", detectOutlierValue("2 4 7 8 10"));
console.log("1.13:", detectOutlierValue("1 10 1 1"));

// 1.14
function findPairForSum(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return [];
}
console.log("1.14:", findPairForSum([3, 34, 4, 12, 5, 2], 9));

// 1.15
function areMirrorStrings(str1, str2) {
    return (str1 + str2).split('').reverse().join('') === (str2 + str1);
}
console.log("1.15:", areMirrorStrings('hello world', 'orldhello w'));

// 1.16
function search(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
var arr = [1, 3, 16, 22, 31, 33, 34];
console.log("1.16:", search(arr, 31));

// 1.17
function isIsogram(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
    }
    return true;
}
console.log("1.17:", isIsogram("machine"));
console.log("1.17:", isIsogram("letter"));

// 1.18
function hasPalindromeWords(sentence) {
    var words = sentence.toLowerCase().split(' ');
    return words.some(word => word === word.split('').reverse().join(''));
}
console.log("1.18:", hasPalindromeWords("Anna went to kayak"));
console.log("1.18:", hasPalindromeWords("hello world"));