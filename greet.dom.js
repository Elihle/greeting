  var greetCounterElem = document.querySelector('.greetCounter');
  var inputName = document.querySelector('.inputName');
  var greetBtnElement = document.querySelector('.greetBtn');
  var clearBtnElement = document.querySelector('.clearBtn');
  var greetingElement = document.querySelector('.greeting');
  var language = document.querySelector('.language');

  var count = 0;
  var storedCounter = localStorage.getItem('counted');

  if (storedCounter) {
    count = Number(storedCounter);
  }

  var greetSpotter = Greetings(storedCounter);
  greetCounterElem.innerHTML = storedCounter;

  function clickGreetBtn() {
    var name = inputName.value;
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    if (checkedRadioBtn) {
      var languageChoice = checkedRadioBtn.value;
      var displayGreeting = greetSpotter.allGreetings(languageChoice, name);
      count += 1;
      localStorage.setItem('counted', count);
      greetingElement.innerHTML = displayGreeting;
      greetCounterElem.innerHTML = count;
      //inputName.value = '';
    }
  }

  function clickTheClearButton() {
    greetingElement.innerHTML = '';
    greetCounterElem.innerHTML = 0;
    localStorage.setItem('counted', 0);

    // inputName.innerHTML = "";
    // greetCounterElem.innerHTML = greetsNo;

  };

  greetBtnElement.addEventListener('click', clickGreetBtn);
  clearBtnElement.addEventListener('click', clickTheClearButton);
