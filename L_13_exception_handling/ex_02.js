let calculate = function(n) {
    if(n > 10) throw new Error("n should be less than 10");
    return n + 10;
}

// calculate(20);

try{
    calculate(20);
} catch (e) {
    console.log("Can't execute calculate " + e.message);
} 
