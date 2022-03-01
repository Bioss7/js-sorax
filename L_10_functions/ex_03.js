let func = function() {
    return function() {
        console.log("Hi");
    }
}

func()();