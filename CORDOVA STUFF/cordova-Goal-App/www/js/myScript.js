
// function pullData(){
// var firstName = document.getElementById("First");
// var lastName = document.getElementById("Last");
// var goal = document.getElementById("Goal");
// var finalString = firstName + ","+ lastName + ","+goal;
//
// var fs = require('fs');
//
// fs.writeFile("./teenieDatabase/txtFile.txt",finalString);
//
//
//
// }

//Setting up local storage

// var storage = window.localStorage;
// var value = storage.getItem(key); // Pass a key name to get its value.
// storage.setItem(key, value) // Pass a key name and its value to add or update that key.
// storage.removeItem(key) // Pass a key name to remove that key from storage.




// function doFirst(){
//   var button = getElementById("Register");
//   button.addEventListener("load", saveInfo, false);
// }
//
// // localStorage.setItem("lastname", "Smith");
//
// function saveInfo(){
//   var FirstName = getElementById("First").value;
//   var LastName = getElementById("Last").value;
//   var YourGoal = getElementById("Goal").value;
//   localStorage.setItem("Last", JSON.stringify(LastName));
//   localStorage.setItem("First", JSON.stringify(FirstName));
//   localStorage.setItem("Goal", JSON.stringify(YourGoal));
//   // localStorage.setItem(First, Last, Goal);
// }
//
// function showInfo(){
//   //var button = getElementById("Results");
//   var Results = localStorage.getItem("First") + " " + localStorage.getItem("Last") + " " + localStorage.getItem("goal");
// }
//
// window.addEventListener("load", doFirst, false);




// document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage);
// document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage);
// document.getElementById("removeProjectFromLocalStorage").addEventListener
//    ("click", removeProjectFromLocalStorage);
// document.getElementById("getLocalStorageByKey").addEventListener
//    ("click", getLocalStorageByKey);
// var localStorage = window.localStorage;
//
//
// function setLocalStorage() {
//    localStorage.setItem("Name", "John");
//    localStorage.setItem("Job", "Developer");
//    localStorage.setItem("Project", "Cordova Project");
// }
//
//
// function showLocalStorage() {
//    console.log(localStorage.getItem("Name"));
//    console.log(localStorage.getItem("Job"));
//    console.log(localStorage.getItem("Project"));
// }
//
//
// function removeProjectFromLocalStorage() {
//    localStorage.removeItem("Project");
// }
//
// function getLocalStorageByKey() {
//    console.log(localStorage.key(0));
// }
