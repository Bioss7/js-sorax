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


let o = {};
// Принимает 2 параметра, не нужно указывать свойство
Object.defineProperties(o, {
    // дескриптор
    x: {
        value: 10,
        writable: false
    },
    y: {
        value: 20,
        writable: false
    },
    r: {
        get: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y); // длина вектора
        }
    }
});

o.x = 16;
console.log(o.r);