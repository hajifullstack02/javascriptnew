//local storage- is a web storage API that allow web application to store
//data in the browser.it persists even after closes the window or tab.
//it can clear only when manually remove the data.perment storage.
//ex -theme settings,cached application data.


localStorage.setItem("username","haji.fullstack@gmail.com");
localStorage.setItem("password","8142@123");
localStorage.setItem("jobrole","fullstack");

//localStorage.removeItem("username");
//localStorage.removeItem("password");

// localStorage.getItem("username"); 
// localStorage.getItem("password");

//localStorage.clear();
console.log(localStorage);

//session storage-is temporary .it cleared when close the tab or window.

sessionStorage.setItem("empName","sonu");
sessionStorage.setItem("empID","acc123");
sessionStorage.setItem("empSalary","80,000");


sessionStorage.removeItem("empID");
//sessionStorage.clear();
console.log(sessionStorage);