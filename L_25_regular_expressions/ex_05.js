let pattern = /\w+/g,
    string = "How we survive is what makes us who we are",
    match;

let pattern1 = /(\w+)@(\w+\.\w+)/g,
string1 = "How we sorax@domain.com is what makes us who we are",
match1;

// Метод exec похож на метод match класса string
// если не стоит флаг global, то результат будет аналогичен методу match
console.log(pattern.exec(string));
console.log(pattern.lastIndex);
// получаем новые match
console.log(pattern.exec(string));
console.log(pattern.exec(string));
console.log(pattern.exec(string));
console.log(pattern.exec(string));

console.log("While");
while(match = pattern.exec(string)) {
    console.log(match);
    console.log(match[0] + " (Index: " + match.index + ")");
}

console.log("While");
while(match1 = pattern1.exec(string1)) {
    console.log("Name: " + match1[1] + ", Domain: " + match1[2]);
}

