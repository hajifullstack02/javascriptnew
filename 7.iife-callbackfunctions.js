//iife functions

(
    function(name, age){             // anonymous function
        console.log("Hello Everyone");
        console.log(name);
        console.log(age);
    }
)("haji",23);


//callback functions
function myClgId(callbackfn){
    var id =  callbackfn;
    id("192124");
}

myClgId(
    function(params){
        console.log("Welcome to clg");
        console.log(params);
    }
    )