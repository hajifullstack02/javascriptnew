
// Async/Await = Async = makes a function return a promise
//                            Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject set up as parameters
// Everything after Await is placed in an event queue

function Cooking(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const foodCooked = true;

            if(foodCooked){
                resolve("Cooking is completed get ready for eat ");
            }
            else{
                reject("Cooking not compleated");
            }
        }, 1500);
    });
}


function Eating(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const Eat = true;

            if(Eat){
                resolve("food a Eaten");
            }
            else{
                reject("Food is not eaten");
            }

        }, 500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve(" clean the kitchen is done");
            }
            else{
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}


async function dailyWork(){

    try{
        const CookingProcess = await Cooking();
        console.log(CookingProcess);
    
        const eatingFood = await Eating();
        console.log(eatingFood);
        
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
         
        console.log("You finsihed all the work!");
    }
    catch(error){
        console.error(error);
    }
}

dailyWork();