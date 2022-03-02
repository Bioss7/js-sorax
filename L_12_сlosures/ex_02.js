// Замыкание удобно использовать с помощью анонимных самовызывающихся функций 
let counter = (function(){
    let count = 0; // условно приватная (инкапсуляция)
    return function(num){
        count = num !== undefined ? num : count;
        return count++;
    }
}());

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter(0)); // 4
console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7