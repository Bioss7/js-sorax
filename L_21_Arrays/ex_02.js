let array = [1,3,4];
let months = ["Junuary", "February", "March", "April"];

console.log(array[0]);
console.log(months[0]);

console.log(array[5]); // undefined

months[4] = "May";
console.log(months);
console.log(months.length);

months[months.length] = "June";
console.log(months);

months[20] = "Something";
months["someProperty"] = "someValue";
console.log(months);

// Элементы больше 3 будут удалены из массив
// months.length = 3;
// console.log(months);

// Удаление элементов из массива с помощью delete не изменяет его длины и элементы не сдвигаются
delete months[3];
console.log(months);
console.log(months[3]); // undefined

// Проверка массива 
console.log(Array.isArray(months)); // true
console.log(Array.isArray("Hello")); // false

