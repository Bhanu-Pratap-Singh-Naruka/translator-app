const btnTranslate = document.getElementById("btn");

const txtinput = document.querySelector("#inputArea");
const outputDiv = document.querySelector("#outputDiv");

let serverUrl = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslationURL(text) {
  return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
  alert("Something wrong with server! Please try again later");
}

function clickHandler() {
  var inputText = txtinput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
