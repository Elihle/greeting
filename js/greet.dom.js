var greetCounterElem = document.querySelector('.greetCounter');
var inputName = document.querySelector('.inputName');
var greetBtnElement = document.querySelector('.greetBtn');
var clearBtnElement = document.querySelector('.clearBtn');
var greetingElement = document.querySelector('.greeting');
var language = document.querySelector('.language');

//var storedCounter = JSON.parse(localStorage.getItem('counted'));
//console.log(storedCounter);

// count = 0;
//
// // if (storedCounter) {
// //   count = Number(storedCounter);
// // }


var checkStoredNames = function (){
  var storedNames = JSON.parse(localStorage.getItem("greetedNames"));
  if (storedNames){
    return storedNames;
  }else{
   localStorage.setItem('greetedNames',JSON.stringify({}));
   return storedNames;
  }
}
var greetSpotter = Greetings(checkStoredNames());

greetCounterElem.innerHTML = greetSpotter.countAllGreets();

function clickGreetBtn() {
  var name = inputName.value;
  var checkedRadioBtn = document.querySelector("input[name='language']:checked");

  if (checkedRadioBtn) {
    var languageChoice = checkedRadioBtn.value;
    var displayGreeting = greetSpotter.allGreetings(languageChoice, name);
    console.log(displayGreeting);

    var greetNo = greetSpotter.countAllGreets();
  }

  greetingElement.innerHTML = displayGreeting;
  greetCounterElem.innerHTML =   greetSpotter.countAllGreets();

  //localStorage.setItem('counted', JSON.stringify(greetNo));

  //greetCounterElem.innerHTML = greetNo;
  //localStorage.setItem('counted', JSON.stringify(greetNo));
}

function clickTheClearButton() {
  greetingElement.innerHTML = '';
  localStorage.setItem('greetedNames',JSON.stringify({}));

  greetSpotter.countAllGreets();

  greetCounterElem.innerHTML =   greetSpotter.countAllGreets();
  //localStorage.clear();
};

greetBtnElement.addEventListener('click', clickGreetBtn);
clearBtnElement.addEventListener('click', clickTheClearButton);
