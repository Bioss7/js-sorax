let array = ["Some String", "Another String", "Third String", "JavaScript", "Sorax"];
// Метод map, возвращает новый массив, каждый элемент которого формируется из значений, которые возвращаются из функций,
// которую мы передаем в качестве первого аргумента, таким образом нам не нужны аргументы с индексом и самим массивом, 
// достаточно только самого элемента
console.log(array.map(function(e){return e.toUpperCase()}));