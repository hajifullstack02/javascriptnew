function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: "Haji", email: "haji@example.com" });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    callback([{ id: 101, item: "Laptop" }]);
  }, 1000);
}

function checkPayment(order, callback) {
  setTimeout(() => {
    callback({ orderId: order.id, status: "Paid" });
  }, 1000);
}

function sendEmail(email, callback) {
  setTimeout(() => {
    callback("Email sent to " + email);
  }, 1000);
}

// Callback hell in async
getUser(1, function(user) {
  console.log("User:", user);

  getOrders(user.id, function(orders) {
    console.log("Orders:", orders);

    checkPayment(orders[0], function(payment) {
      console.log("Payment:", payment);

      sendEmail(user.email, function(result) {
        console.log(result);
      });
    });
  });
});



// one more ex
function step1() {
    setTimeout(() => {
        console.log("Step1");
    }, 8000);
}
function step2() {
    setTimeout(() => {
        console.log("Step2");
    }, 3000);
}
function step3() {
    setTimeout(() => {
        console.log("Step3");
    }, 6000);
}

// step1(); 
// step2();
// step3();

//step 2

// step 3

// step 1




function FileDownload(callbackfn){
    var workName = "video"
    console.log("Video is loading");

    //callback function approach
    setTimeout(() => {
         console.log(`${workName} complted in 8 seconds `);
         callbackfn();
    }, 8000);
}


function WatchInstaReelsDownload(callbackfn){
    var workName = "Insta reels"
    console.log("I am wathing insta reels ");

     //callback function approach
    setTimeout(() => {
         console.log(`${workName} complted in 3 seconds `);
         callbackfn();
    }, 3000);
}


function ChatWithFreinds(){
    var workName = "Chat with freinds"
    console.log("I am chatting wtih freinds ");

     //callback function approach
    setTimeout(() => {
         console.log(`${workName} complted in 6 seconds `);
    }, 6000);
}

// FileDownload();
// WatchInstaReelsDownload();
// ChatWithFreinds();


//callback hell
FileDownload(()=>{
    WatchInstaReelsDownload(()=>{
        ChatWithFreinds();
    })
})






// function WatchInstaReels(callbackfn){
//      console.log("Watching insta reels");
//      callbackfn();
// }

// function ChatWithFreind(){
//      console.log("Chatting with my freinds")
// }


// FileDownload(()=>{
//   //console.log("Hello world");
//     WatchInstaReels(()=>{
//         //console.log("hellow wof");
//         ChatWithFreind();
//     })
// })