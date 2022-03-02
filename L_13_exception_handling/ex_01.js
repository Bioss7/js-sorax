// throw выражение 

// throw "Hello"
// 10 = "string"; 

// Конструктор Error SyntaxError ReferenceError
let myError = new Error("My Erorr Message");
console.log(myError.name); // Error
console.log(myError.message);

// Выбросить ошибку
throw myError;