// async promise
let myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., fetching data, a timer)
  setTimeout(() => {
    let success = true; // Simulate success or failure
    if (success) {
      resolve("Data fetched successfully!"); // Fulfill the promise
    } else {
      reject("Error fetching data."); // Reject the promise
    }
  }, 2000); // Wait for 2 seconds
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

//Live example
 function placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(" Order placed successfully");
            resolve("OrderID:12345");
        }, 2000);
    });
}

function makePayment(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(` Payment done for ${orderId}`);
            //let success = false; // to simulate failure, uncomment
            let success = true;
            if (success) {
                resolve("PaymentID:98765");
            } else {
                reject("Payment failed!");
            }
        }, 3000);
    });
}

function deliverProduct(paymentId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(` Product delivered. Payment reference: ${paymentId}`);
            resolve("Delivery success");
        }, 1500);
    });
}

// ---- call the functions ----
placeOrder()
    .then(orderId => makePayment(orderId))
    .then(paymentId => deliverProduct(paymentId))
    .then(result => console.log(result))
    .catch(err => console.error(err));
