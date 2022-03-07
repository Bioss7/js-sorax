// Не изменяют исходный массив, возвращают новый массив, за исключением тем случаев, когда массив изменяем в callback функциях
let array = ["Some String", "Another String", "Third String", "JavaScript", "Sorax"];

// element - ссылка на элемент массива, index - элемента, array - ссылка на сам массив
array.forEach(function(element, index, array){
    // console.log(element);
    array[index] = element.toUpperCase(); // изменили исходный массив
});

console.log(array);

