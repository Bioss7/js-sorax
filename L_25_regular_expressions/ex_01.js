// Класса RegExp принимает в конструктор 2 параметра, 1 параметр строка регулярное выражение, 2 строка которая содержит флаги 
// let pattern = new RegExp("\w", "gim");
// литерал регулярных выражений
let pattern = /\w+/g, 
    string = "How we survive is what makes us who we are"; 

// Метод match принимает один аргумент регулярное выражение и возвращает массив
// если флаг глобал, получаем массив всех match
// если уберем получим только первый match
console.log(string.match(pattern));    

// Метод search игнорирует флаг глобал и всегда возращет первый index match
// если будут одни пробелы будет -1
console.log(string.search(pattern));


// Метод split 
let pattern1 = /\w+/g, 
    string1 = "How we survive,     is what makes us who we are"; 
// Разбить строку на массив где есть пробелы и запятая
console.log(string1.split(/[\s,]+/)); 