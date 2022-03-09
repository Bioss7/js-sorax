let pattern = /\w+@\w+\.\w+/,
    string = "lorem text tree. Hello@gmail.com lorem";

console.log(pattern.test(string));
// если есть флаг глобал lastIndex обновляется
console.log(pattern.lastIndex);
console.log(pattern.test(string));
console.log(pattern.test(string));