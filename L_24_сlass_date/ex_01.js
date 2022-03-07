// Первые 3 аргумента: год, месяц, день
// месяцы начинаются с 0 январь
// Следующие параметры это часы, минуты, секунды, миллисекунды
let date = new Date(1990, 0, 1, 10, 24, 22, 345);
console.log(date); // строка дата
console.log(date.toString());

// Поскольу миллисекунды не выводятся
console.log(date.getMilliseconds());
// Часов
console.log(date.getHours());
// Минут
console.log(date.getMinutes());
// Секунд
console.log(date.getSeconds());
// День недели
console.log(date.getDay());
// Дня месяца
console.log(date.getDate());
// Месяца
console.log(date.getMonth());
// Года
console.log(date.getYear()); // последние 2 цифры
console.log(date.getFullYear());

// Для всех кроме дня недели
date.setDate(15);
console.log(date);

// Время с 1970
console.log(date.getTime());
console.log(new Date(1945, 0, 1).getTime()); // отрицательное значение 

// Если 1 аргумент, он будет timestamp
console.log(new Date(0));

// Для работы с UTC
console.log(date.getUTCHours());

// Методы только для времени или даты
console.log(date.toTimeString());
console.log(date.toDateString());

// В другом формате с учетом локализации 
console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString());

// Статический метод
console.log(Date.now());