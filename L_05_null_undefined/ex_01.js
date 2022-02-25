console.log(typeof null); // object
console.log(typeof undefined); // undefined

var temp;
var obj = {};
var a = [1,2,3,4];

function greet(name) { // Если функция пустая, то возвращает undefined
    return "Hello " + name;
}

console.log("temp", temp); // undefined
console.log("obj.property", obj.property); // undefined
console.log("a[4]", a[4]); // undefined

console.log(greet("Sorax"));
console.log(greet()); // undefined

console.log("null == undefined", null == undefined); // true
console.log("null === undefined", null === undefined); // false разные типы