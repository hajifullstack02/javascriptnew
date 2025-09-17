// callback function

function sum(a,b) {
    console.log(a+b);  
}



// function sum(a,b) {
//      setTimeout(()=>{ console.log(a+b);
//     },3000)  
// }


console.log("start");

console.log("end");


function calculate(a,b,sumCallbackfun) {
      sumCallbackfun(a,b);
}

// calculate(5,7,sum);

setTimeout(()=>calculate(5,7,sum),5000);


//setTimeout fun use ex1
// console.log("Start");

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");


//setTimeout fun use ex2
// function greet() {
//   console.log("Hello after 3 seconds!");
// }

// console.log("Start");
// setTimeout(greet, 3000); // pass the function name, not greet()
// console.log("End");
