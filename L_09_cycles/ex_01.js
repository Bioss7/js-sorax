// for (инициализация; тест или условие; инкремент или декремент) тело цикла
// function scope или scope область видимости
let i;
for(i = 0; i < 10; i++){
    console.log(i);
}

console.log(i);
console.log("Другой цикл");
// цикл работает быстрее 
for(i = 10; i--;){
    console.log(i);
}

// while (выражение) инструкция
console.log("Цикл while");
i = 0;
while(i < 10){
    console.log(i++);
}

// do интсрукции while (выражение)
console.log("Цикл do while");
i = 0;
do console.log(i++); while(i < 10);