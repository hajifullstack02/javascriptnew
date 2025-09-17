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
