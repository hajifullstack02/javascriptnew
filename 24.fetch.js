//fetch() is a built-in fun.it can handle http request like GET,POST.
//it return a promise.then is to get response from http request.
//fetch(url)
//.then(response =>{

//})
//.catch(err =>{

//})


let ConfigureURL = fetch("https://jsonplaceholder.typicode.com/posts/1/comments");

console.log(ConfigureURL);

let outputResult = ConfigureURL.then((result)=>{
    //result.json()
    return result.json();
}).then((result2)=>{
    console.log(result2);
})
console.log(outputResult);



let ConfigureURL1 = fetch("https://jsonplaceholder.typicode.com/posts");   // promise

ConfigureURL1.then((result3)=>{
    //console.log(result3);
    return result3.json()
}).then((result4)=>{
    console.log(result4);
})




let ConfigureURL2 = fetch("https://jsonplaceholder.typicode.com/posts/1");
ConfigureURL2.then((x)=>{
    console.log(x.json());
    return x.json();
}).then((y)=>{
   console.log(y);
});
