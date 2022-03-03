// Помимо ключа и значение, каждое свойство имеет так же атрибуты: 
// writable enumerable configurable можно изменять объектом дескриптором свойства 

let person = {
    name: "Sorax",
    _age: 20,
    get age(){
        return this._age;
    },
    set age(value){
        this._age = value < 0 ? 0 : value > 122 ? 122 : value;
    }
};

// Принимает 2 параметра: объект, свойство
console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));

// Для определения или переопределения атрибутов свойств, можем использовать статический метод:
// Принимает 3 параметра: объект, свойство, дескриптор
Object.defineProperty(person, "gender", { // все 3 атрибута имееют по умолчанию true
    value: "male",
    writable: false,
    enumerable: true, // если true свойство будет выводиться в цикле 
    configurable: true // елси false не сможем удалить свойство
});

// Расширяемость объектов, возможность добавления новых свойств
var obj = {};
// Object.preventExtensions(obj) // false
// console.log(Object.isExtensible(obj)); // true

obj.x = 2323;
console.log(obj.x); // undefined

// Тоже самое preventExtensions, помимо это ставит значение configurable всех свойств false
Object.seal(obj)
// проверить был ли применен метод seal
console.log(Object.isSealed(obj)); // true

// делает свойства доступными только для чтения
Object.freeze(obj)
// проверить был ли применен метод isFrozen
console.log(Object.isFrozen(obj));