// Еще один способ создания, который появился в ECMascript 5
// Статический метод create класса Object. Принимает первый параметр объект, который будет являться прототипом первого объекта
// Если не хотим чтобы объект наследовал свойства, передаем null
let object = Object.create({x: 10, y: 20});
// Свойства унаследованные от прототипа  
console.log(object);

object.x = 20;
console.log(object);
console.log("родное свойство:", object.x);
// Проверить свойство у объекта
console.log(object.hasOwnProperty("x"));

// удаление объекта, унарный оператор (Можно удалить только родные свойства)
delete object.x;
console.log(object);

// Проверка свойства у объекта 
console.log("x" in object); // true
console.log("o" in object); // false
console.log(object.x); // 10
console.log(object.o); // undefined

console.log(object.z);
console.log("Есть свойство:", ("z" in object));

object.z = undefined;

console.log(object.z);
console.log("Есть свойство:", ("z" in object));