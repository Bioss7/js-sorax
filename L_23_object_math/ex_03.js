// random возвращает от 0 до 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(-10 + Math.random() * 20);

let getRandom = function(min, max) {
    return Math.random() * (max - min) + min;
};

console.log(getRandom(10, 20));
console.log(-100, 100);