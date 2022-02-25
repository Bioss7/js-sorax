console.log(true);
console.log(false);

console.log(5 === 5);
console.log(5 === 6);

// Конструктор 
console.log(Boolean(5));

// Falsy values
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));

var s = "Text";

if(s) {
    console.log("Its true");
}

// Оператор логического и 
console.log(true && false); // false
console.log(true && true); // true

// Оператор логического или
console.log(true || true); // true
console.log(false || false); // false

// Оператор логического отрицания
console.log(!true); // false
console.log(!false) // true


var a = 0,
    isTrue = true;
isTrue && (a = 5);   // если isTrue = true, то a = 5
console.log("a", a); 

var someString = "Non-empty string"; // если пустая строка, то будет Default string
var newString = someString || "Default string";
console.log("newString:", newString);



 