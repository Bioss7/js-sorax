let counter = function(num){
    counter.count = num !== undefined ? num : counter.count;
    return counter.count++;
};

// Добавили свойство объекта
counter.count = 0;

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter(0)); // 4
console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7