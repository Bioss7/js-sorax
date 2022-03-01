// callback
var func = function(callback){
    let name = "Tom";
    callback(name);
};

func(function(n){
    console.log("Hello " + n);
});