// call method
function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const sname = {
     name: "Haji" };

greet.call(sname, "Hello", "!"); 
// Output: Hello Haji!


//apply method
function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const user = { name: "Haji" };

greet.apply(user, ["Hi", "!!"]); 
// Output: Hi Haji!!


//bind method

function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const firstName = { name: "Haji" };

const boundGreet = greet.bind(firstName, "Hey"); 
boundGreet("?"); 
// Output: Hey Haji?


