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

// Callback hell in action
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


// simple example 


function stepOne(callbackfn){
     console.log("step-1")
     callbackfn();
}

function stepTwo(callbackfn){
    console.log("step-2")
    callbackfn();
}

function stepThree(){
    console.log("step-3")
}

stepOne(()=>{
   stepTwo(()=>{
      stepThree();
   });
})



function FileDownload(callbackfn){
    console.log("file down load completed");
    callbackfn();
}

function WatchInstaReels(callbackfn){
     console.log("Watching insta reels");
     callbackfn();
}

function ChatWithFreind(){
     console.log("Chatting with my freinds")
}


FileDownload(()=>{
  //console.log("Hello world");
    WatchInstaReels(()=>{
        //console.log("hellow wof");
        ChatWithFreind();
    })
})