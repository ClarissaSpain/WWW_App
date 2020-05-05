

function pullData(){
var firstName = document.getElementById("First");
var lastName = document.getElementById("Last");
var goal = document.getElementById("Goal");
var finalString = firstName + ","+ lastName + ","+goal;

var fs = require('fs');

fs.writeFile("./teenieDatabase/txtFile.txt",finalString);



}
