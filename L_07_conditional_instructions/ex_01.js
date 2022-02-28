if(true) console.log("Its true");
if(false) console.log("Its true"); 

var n = 5;
if(n > 3) {
    n *= 3;
    console.log(n);
}

if(n < 3) {
    console.log(n);
    console.log("hello");
} else if(n > 4){
    console.log("n is more than 4");
}

var name = "Sorax", homecity;
if(name === "John") {
    homecity = "Boston";
} else if(name === "Sorax") {
    homecity = "Belgorod";
} else if(name === "Bill") {
    homecity = "LA";
}

console.log(homecity);

switch(name){
    case "John": homecity = "Boston"; break;
    case "Sorax": homecity = "Belgorod"; break;
    case "Bil": homecity = "La"; 
    default: homecity = "Moscow";
}

console.log(homecity);


