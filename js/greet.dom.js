var greetCounterElem = document.querySelector('.greetCounter');
var inputName = document.querySelector('.inputName');
var greetBtnElement = document.querySelector('.greetBtn');
var resetBtnElement = document.querySelector('.resetBtn');
var greetingElement = document.querySelector('.greeting');
var language = document.querySelector('.language');
var storedCounter = JSON.parse(localStorage.getItem('greetedNames'));

var checkStoredNames = function() {
  var storedNames = JSON.parse(localStorage.getItem("greetedNames"));
  if (storedNames) {
    return storedNames;
  } else {
    localStorage.setItem('greetedNames', JSON.stringify({}));
    return storedNames;
  }
}

var greetSpotter = Greetings(checkStoredNames());
greetCounterElem.innerHTML = greetSpotter.countAllGreets();

function clickGreetBtn() {
  var name = inputName.value;
  var checkedRadioBtn = document.querySelector("input[name='language']:checked");

  if (checkedRadioBtn != null && name != "") {
    var languageChoice = checkedRadioBtn.value;
    var displayGreeting = greetSpotter.allGreetings(languageChoice, name);
    var greetNo = greetSpotter.countAllGreets();
    
    document.getElementById("nameInput").value = '';
    greetingElement.innerHTML = displayGreeting;
    greetCounterElem.innerHTML = greetNo;
  } else {
    inputName.value = '';
    greetCounterElem.value = '';
  }
}

function clickResetButton() {
  localStorage.clear();
  location.reload();
};

greetBtnElement.addEventListener('click', clickGreetBtn);
resetBtnElement.addEventListener('click', clickResetButton);
