console.log(parseInt("45 px")); // игнорирует символы; 2 параметр для системы счисления 
console.log(parseFloat("12.45 em"));

console.log(typeof String(Infinity)); // string
console.log(typeof String(NaN)); // string
console.log(+""); // 0

// false
console.log(!!""); // false
console.log(!!NaN); // false
console.log(!!0); // false
console.log(!!null); // false
console.log(!!undefined); // false

// true
console.log(!!"Hi");
console.log(+"   4");
console.log(parseInt("4 px")); // 4

console.log(+true); // 1
console.log(+false); // 0

var n = 5;
// Создает объект обертку 
console.log(n.value); // undefined
n = "hello";
console.log(n.value); // undefined
n = null;
console.log(n.value); // TypeError