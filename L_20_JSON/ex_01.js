// Cериализация объектов это преобразование объектов в строки 
// Данные можно хранить локально localstorage
// JavaScript Object Notation

let user = {
    name: "Frank",
    id: 42345,
    lastVisit: Date.now(),
    friends: [2452, 62523, 8969],
    toJSON: function() {
        return {
            name: this.name,
            lastVisit: this.lastVisit
        }
    }
};

// Для преобразования объекта в строку в JSON формате есть статический метод
let userData = JSON.stringify(user);
console.log(userData);
console.log(typeof userData);

// Для получения из строки Объект
console.log(JSON.parse(userData));

