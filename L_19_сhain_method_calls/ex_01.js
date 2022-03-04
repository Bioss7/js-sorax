let string, newString;

string = "Sometimes the same is different";

newString = string
    .replace("is", "is not")
    .concat(" actually")
    .toUpperCase()
    .replace(/ /g, "\n")
    .slice(10);

console.log(newString);