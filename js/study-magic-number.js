var tog_fix = document.getElementById("toggle-fixed-height");
var tog_min = document.getElementById("toggle-min-height");
var con = document.getElementById("float-text-container");

tog_fix.addEventListener("click", function() {

  con.classList.toggle("fixed-height");

});
tog_min.addEventListener("click", function() {

  con.classList.toggle("min-height");

});