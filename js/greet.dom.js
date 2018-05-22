  var greetCounterElem = document.querySelector('.greetCounter');
  var inputName = document.querySelector('.inputName');
  var greetBtnElement = document.querySelector('.greetBtn');
  var clearBtnElement = document.querySelector('.clearBtn');
  var greetingElement = document.querySelector('.greeting');
  var language = document.querySelector('.language');

  // var count = 0;
  // var storedCounter = localStorage.getItem('counted');
  //
  // if (storedCounter) {
  //   count = Number(storedCounter);
  // }


  function getPeopleGreetedFromStorage(){
      var greetedNames = {};
    if (localStorage['greetedNames']){

      var retrieved = localStorage.getItem('greetedNames');
       greetedNames =JSON.parse(retrieved);
    }

    return greetedNames;
  }

  var greetMe  = Greetings(getPeopleGreetedFromStorage());
  var greetsNo = greetMe.countAllGreets();
  greetCounterElem.innerHTML = greetsNo;

  function clickGreetBtn(){

    var name = inputName.value
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    if(checkedRadioBtn != null && name != ""){

      var selectedLanguage = checkedRadioBtn.value;
      var greetMessage = greetMe.greetNeighbour(selectedLanguage, name);

      var greetsNo = greetMe.checkGreets();
      var greetedNamesObj = greetMe.getGreetedNames();

      greetingElement.innerHTML = greetMessage;
      localStorage.setItem('namesGreeted', JSON.stringify(greetedNamesObj));
      greetCounterElem.innerHTML = greetsNo;
      greetCounterElem.value = "";
      localStorage.setItem('namesGreeted', JSON.stringify(greetedNamesObj));

    }else{
      inputName.value = "";
      greetCounterElem.value= "";
    }
  }


function clickTheClearButton(){
  greetMe = Greetings();

  var greetsNo = greetMe.countAllGreets();
  var greetedNamesObj = greetMe.countAllNames();
  localStorage.setItem('namesGreeted', JSON.stringify(greetedNamesObj));

  inputName.innerHTML = "";
  greetCounterElem.innerHTML= greetsNo;

}





  // var greetSpotter = Greetings(storedCounter);
  // greetCounterElem.innerHTML = storedCounter;
  //
  // function clickGreetBtn() {
  //   var name = inputName.value;
  //   var checkedRadioBtn = document.querySelector("input[name='language']:checked");
  //   if (checkedRadioBtn) {
  //     var languageChoice = checkedRadioBtn.value;
  //     var displayGreeting = greetSpotter.allGreetings(languageChoice, name);
  //     localStorage.setItem('counted', greetSpotter.countAllgreets());
  //     greetingElement.innerHTML = displayGreeting;
  //     greetCounterElem.innerHTML = greetSpotter.countAllgreets();
  //   }
  // }
  //
  // function clickTheClearButton() {
  //   localStorage.clear();
  //   location.reload();
  //   greetCounterElem.innerHTML = count;
  //   // inputName.innerHTML = "";
  //   // greetCounterElem.innerHTML = greetsNo;
  //
  // };

  greetBtnElement.addEventListener('click', clickGreetBtn);
  clearBtnElement.addEventListener('click', clickTheClearButton);
