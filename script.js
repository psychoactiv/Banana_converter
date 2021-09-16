var response = document.querySelector(".btn-1");
var textspace = document.querySelector("#area");
var welcome = document.querySelector(".box");
var img = document.querySelector(".img-btn");

var userClicked = 1;

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

var tap = 1;

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}

function clickEventHandler() {
  var inputText = textspace.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      welcome.innerText = translatedText;
    })
    .catch(errorHandler);
  if (tap % 2 == 0) {
    img.src = "img/minion_2.jpg";
  } else {
    img.src = "img/458566.jpg";
  }
  tap++;
}

response.addEventListener("click", clickEventHandler);
