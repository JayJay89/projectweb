var tog = document.getElementById("toggle-display");
var con = document.getElementById("content-display");
var tog2 = document.getElementById("toggle-opacity");
var con2 = document.getElementById("content-opacity");
var tog3 = document.getElementById("toggle-dropdown");
var con3 = document.getElementById("content-dropdown");

tog.addEventListener("click", function() {

  con.classList.toggle("display-none");

});

tog2.addEventListener("click", function() {

  con2.classList.toggle("zero-opacity");

});

tog3.addEventListener("click", function() {

  con3.classList.toggle("collapse-down");

});