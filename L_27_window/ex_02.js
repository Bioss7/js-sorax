// На window есть несколько объектов document location navigator screen history
// setTimeout 1 аргумент это callback, 2 аргумент количество миллисекунд
// Пример асинхронного кода
// Возвращают значение 
setTimeout(function(){
    console.log("2 seconds passed");
}, 2000);

let timer = setInterval(function(){
    console.log("2 seconds passed");
}, 2000);

window.onclick = function() {
    clearInterval(timer);
    // clearTimeout
}

