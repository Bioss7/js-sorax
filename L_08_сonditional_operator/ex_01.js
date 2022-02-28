// выражение1 ? выражение2 : выражение3 тернарный оператор

var x = 10;
var text = x > 10 ? "x больше 10" : x < 10 ? "x меньше десяти" : "x равен десяти";

console.log(text);

if(x > 10) {
    text = "x больше десяти";
} else if (x < 10) {
    text = "x меньше десяти";
} else {
    text = "x равен десяти";
}

console.log(text);

// запятая , бинарный оператор
var test = (15, 20);
console.log((test, "Hello"));