console.log(Math.sqrt(25));
console.log(Math.pow(3,5));
console.log(Math.PI);
console.log(Math.E);

// Не получим ошибки выходы за пределы диапазона (overflow), вместо этого получим infinity
console.log(typeof Infinity);
console.log(5/0); // Infinity
console.log(0/0); // NaN
console.log(Infinity/Infinity); // NaN
console.log(Math.sqrt(-10)); // NaN
console.log(NaN === NaN); // false

// Ошибки округления
console.log(0.2 + 0.1); // 0.30000000000000004