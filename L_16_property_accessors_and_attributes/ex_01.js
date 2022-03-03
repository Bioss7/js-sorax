// Появилось в ECMAScript 5 
// let person = {
//     name: "Sorax"
// };

// console.log(person.name);
// person.name = "John";
// console.log(person);

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

person.age = 180;
console.log(person.age); // 122
person.age = -80;
console.log(person.age); // 0
person.age = 34;
console.log(person.age); // 34