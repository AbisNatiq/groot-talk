var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var textOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslate(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    alert("something went wrong");
}

function clickHandler(){
    var inputText = textInput.value;
    fetch(getTranslate(inputText))
        .then(response => response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
            textOutput.innerText = translatedText;
        })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click",clickHandler);