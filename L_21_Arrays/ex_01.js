// Литерал массива
// индексация с нуля 0-based indexing
// Массив в js динамические
let array = [1,3,4];
let months = ["Junuary", "February", "March", "April"];

console.log(array[0]);
console.log(months[0]);

// Если обратимся к несуществующему элементу массива, получим undefined
console.log(array[5]); // undefined

// Создание элемента по индексу
months[4] = "May";
console.log(months);
console.log(months.length);

// Добавили элемент в конец массива
months[months.length] = "June";
console.log(months);

// Элементы в js массивах не обязательно должны идти под последовательными индексами
months[20] = "Something";
// Получаем Sparse array разреженный массив
console.log(months);
// Длина массива это не количество элементов в нем, а на самом деле это индекс последнего элемента + 1
console.log(months.length); // 21

console.log(typeof months); // массив это object

// У массива есть функция конструктор
let myArray = new Array(34, 777, 333); // Если один аргумент, он станет длинной массива
// console.log(myArray); // []
console.log(myArray); // [34, 777, 333]

// Пропускаем элементы в литералах массива 
let thirdArray = [,,];
console.log(thirdArray);
console.log(thirdArray.length);

