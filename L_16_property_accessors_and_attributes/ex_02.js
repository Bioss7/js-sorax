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

// Переопределить атрибуты свойства 
Object.defineProperty(person, "gender", {
    writable: true // Если configurable ture ошибки не будет
});

console.log("person.gender", person.gender);
person.gender = "female"; // ничего не произойдет, свойство не будет записано
console.log("person.gender", person.gender);

// property Указываем идентификатор который будет использоваться для отдельных свойств объекта person
for(property in person){
    console.log("property:", property); // выводим все перечисляемые свойства объекта, в том числе наследованные 
}

// в ECMAScript 5 статический метод, вернет массив названия свойств
console.log(Object.keys(person));

// Проверка атрибута enumerablа не для наследованных свойств
console.log(person.propertyIsEnumerable("gender"));
