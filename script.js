var response = document.querySelector(".btn-1");
var textspace = document.querySelector("#area");
var welcome = document.querySelector(".box");

var userClicked = 1;

response.addEventListener("click", function clickEventHandler() {
  welcome.innerHTML = textspace.value;
});
