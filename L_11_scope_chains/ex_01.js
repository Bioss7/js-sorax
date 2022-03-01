// Область видимости переменной scope
// Цепочки областей видимости scope chain
// Глобальные и локальные переменные

// Глобальная 
let i = 5; // можно убрать let
// Локальная 
let func = function() {
    let i = 10;
    console.log("func:", i); // 10
    let innerFunc = function(){ // первая область вызова цепочки
        let i = 15;
        console.log("innerFunc:", i);
    };
    innerFunc();
    console.log("func:", i);
};

func();

// Только функции создают локальные переменные function scope
// Объявление переменной, hoisting