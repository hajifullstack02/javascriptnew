let x=null;
let sname;
try{
    let uppercase=sname.toUpperCase();
    console.log(uppercase);
}
catch(error){
    console.log(error);
}
finally{
    console.log("value is not assigned to variable 'Error'");
}

try{
    let subjectName="javascript";
    if(subjectName){
        subjectName =subjectName.toUpperCase();
        console.log(subjectName);

    }
    else{
        throw new Error("subject is not defined");
    }
}
catch(error){
    console.log(error);
}

try{
    let num="haji";
    if(num==even){
        console.log("even");

    }
}
catch(error){
    console.log(error.message);
}


// example

let atmPassword=2562;
let userPassword=2265;
try {
    if(userPassword==atmPassword){
        console.log("atm accessed")
    }
    else{
        // making own error messages.
      throw new Error("passsword not correct")
    }
} catch (error) {
    console.log(error)
}
