// Объектом называется набор свойств, которые представляют собой парой имя(ключ), значение
// Для обращения к объектам используем выражение которое так и называется выражение обращения или выражение доступа Property Access Expression

// Объектный литерал
let person = {
    name: "Tom", // Свойства объекта можно нызывать их полями
    age: "20",
    gender: "male",
    sayHi: function() {  // метод
        return "Hello!!!";
    }
}

person.age = 25;
person.userId = 123;

// синтаксис обращения
// выражение идентификатор
// выражение[выражение]

console.log(person.name);
console.log(person.gender);

// Благодрая тому что, в квадратные скобки мы можем подставлять любое выражение, мы можем формировать это имя свойство динамически 
// Идентификатор же должен быть прописан в коде программы 
console.log(person["age"]);

console.log(person);
console.log(person.sayHi());