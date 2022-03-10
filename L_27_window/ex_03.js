// Прерывает работу скрипта 
alert("Hello!");
// Возвращает bool значение 
// var answer = confirm("Ur pretty sure, aren't you?");
// console.log(answer);

var start = function() {
    console.log("Started!");
};

// логический оператор && будет вычислять значение правого операнда только, в том случае если левый операнд true
// confirm("Start?") && start();

// Возвращает значение 
// console.log(prompt("Your age?"));

console.log(
    prompt("Your age?") >= 18
    ? "Acces granted"
    : "Acces denied"
);

// Открываем окна 
let w = window.open("http://google.com");

setTimeout(function(){
    w.close();
}, 2000);


