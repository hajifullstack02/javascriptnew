//loops concepts

//while loop
//do-while 
//for 
//for...in  --> to iterates over the properties of an object
//for ...of  --> to iterates over the properties of an array


//while ex
let num=3;
while(num>0){
    console.log("Sry!",num);
    num=num-1;
}

//do-while ex

let sname="haji";
do{
    console.log("hi!",sname);
}while(sname.length>4);


//for loop ex
let x;
//for(initialization; condition; finalExpression)
for(x=0;x<5;x++){
    console.log("good work",x);
}

//for..in ex

let student = { 
                name: "haji", 
                course: "fullstack"  ,
                location : "Bangolore"
              };
//repeating the object for the keys 
//
for(let st in student){
    console.log("key  " , st);
    console.log("value" , student[st]);
}


 console.log(student.name);


 //for--of ex
 
let books = ["telugu", "maths", "engilsh"];
for(let book of books){
    console.log(book);
    if(book == "maths"){
         console.log("maths  is " , "'hard subject'");
    }
}
console.log(books[1]);
