// Метод reduce возвращает какое-то одно значение, которое получается в результате выполнения функции для 
// каждого элемента массива, с возможность сохранения промежуточного результата

let numbers = [1, 2, 3, 4, 5, 3, 6];
// 1 аргумент промежуточное значение, 2 элемент значение текущего элемента массива
let reduced = numbers.reduce(function(a, b, index, array){
    // return a + b;
    return a * (b % 3 === 0 ? b : 1);
});

console.log(reduced);

// Метод reduceRight, проходит массив не слева направо, а справа налево (порядок выполнения важен)
let reducedRight = numbers.reduceRight(function(a, b, index, array){
    // return a - b;
    return Math.pow(a,b);
});

console.log(reducedRight);

// Методы которые не принмают callback, для поиска элемента в массиве
console.log(numbers.indexOf(3)); // index 2 
console.log(numbers.lastIndexOf(3)); // index 5
// Если будем искать элемент которого нет в массиве, то эти методы как аналогичные методы для работы со строками будут возвращать -1 
console.log(numbers.indexOf(10)); // -1