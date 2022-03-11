// Объект location
console.log(window.location);

// Все свойства доступны для записи
location.hash = "anything";

// Изменяем hash в url
window.onhashchange = function() {
    console.log(location.hash.slice(1));
}

let btnLocation = document.querySelector('#BtnHref');
btnLocation.addEventListener("click", function() {
    location.href = "http://google.com";
    // location = "http://google.com";
    
}); 

console.log(location.toString());
console.log("Current URL is: " + location);
console.log("location", location);

// Устанавливаем Get параметр
location.search = "mysearch";

let btnReload = document.querySelector('#reload');
btnReload.addEventListener("click", function() {
   location.reload();
}); 

// Переход по адресу 
// location.assign("http://google.com");
// Уберет текущую страницу 
// location.replace("http://google.com");

// encodeURI принимает строку и заменяет в ней все не ASCI символы на escape последовательности 
var encoded = encodeURI("http://google.com/page?name=Какое то имя");
console.log(decodeURI(encoded));