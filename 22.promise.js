// promise is a function which accepts the anonomous function as a input paramter

// resolve -- callbackfuntion
// reject -- callbackfuntion
// promise  is an object.by use new keyword promise  .
// New Promise((resolve,reject)=>{ //executor function is resolve,reject.
// })argument as executor fun 
// .then allow chaining.like accept resolve parameter.
// //.catch allow reject parameter.

// Producing code: The code that performs the asynchronous operation and eventually calls
//  either resolve() upon success or reject() upon failure.
// Consuming code: The code that waits for the promise to settle (either fulfill or reject) 
// and handles the outcome using .then(), .catch(), and .finally().

// .then(): Used to handle the successful outcome (fulfillment) of a promise. 
// It takes two optional arguments: a callback for success and a callback for failure.
// .catch(): A specialized version of .then() that only handles promise rejections (errors).
// .finally(): A callback that runs regardless of whether the 
// promise was fulfilled or rejected, useful for cleanup operations.


let myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., fetching data, a timer)
 
    let success = true; // Simulate success or failure
    if (success) {
      resolve("Data fetched successfully!"); // Fulfill the promise
    } else {
      reject("Error fetching data."); // Reject the promise
    }
 ; // Wait for 2 seconds
});

myPromise
  .then((message) => {
    console.log(message); // Executed if the promise is fulfilled
  })
  .catch((error) => {
    console.error(error); // Executed if the promise is rejected
  })
  .finally(() => {
    console.log("Promise settled (either fulfilled or rejected)."); // Always executed
  });


//simple code execution
let mypromise = new Promise((successfn,rejectfn)=>{
    
    let isTrue = false;
    if(isTrue){
    successfn();
    }
    else{
      rejectfn();
    }
});


mypromise.then(function(){
     console.log("success");
}).catch(function(){
     console.log("some error occured")
})

