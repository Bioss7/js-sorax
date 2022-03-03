// ссылка на объект
let object = {x: 10};

let a = 10, b = 20;
a = b;
b = 15;
console.log(a);

// переменная хрнит ссылку на один объект
let c = {x: 10}, d = {x: 20};
c = d;
d.x = 15;
console.log(c.x);
c.x = 45;
console.log(d.x);