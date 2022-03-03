// Prototypal inheritance Наследование основанное на прототипах

let objectProto = {
    name: "Sorax"
};

let object = Object.create(objectProto);
console.log(object.name);