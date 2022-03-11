// DOM Document Object Model
console.log(Node.prototype);

// Создаем элемент
var el = document.createElement('p');
console.log(el);
// Проверить какие методы доступны 
console.log(el.constructor.prototype);

// Добавить атрибут
el.setAttribute('data-custom', 20);
console.log(el);

console.log(document.constructor.prototype);