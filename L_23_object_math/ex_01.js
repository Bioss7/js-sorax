// Возведение в степень
console.log(Math.pow(2, 5)); // 32
// Square Root Квадратный корень
console.log(Math.sqrt(400)); // 20
console.log(Math.sqrt(9)); // 3
// Модуль числа Absolute
console.log(Math.abs(300));
console.log(Math.abs(-300));

// Округление до целого числа
// Если цифра, после точки больше или равна 5, то число округляется в большую сторону, иначе в меньшую сторону
console.log(Math.round(9.6)); // 10
console.log(Math.round(9.2)); // 9

// Для принудительного округления в большую или меньшую сторону есть метод floor и ceil
console.log(Math.floor(9.6)); // 9 в меньшую сторону 
console.log(Math.ceil(9.2)); // 10 в большую сторону

console.log(Math.min(6, 9, 2, 5)); // 2
console.log(Math.max(6, 9, 2, 5)); // 9

// Метод exp возводит число в указанную степень
console.log(Math.exp(1)); // 2.718281828459045

// Метод log который возвращает натуральный логарифм числа
console.log(Math.log(5)); // 1.6094379124341003