document.addEventListener('DOMContentLoaded', function() {
  var greetCounterElem = document.querySelector('.greetCounter');
  var inputName = document.querySelector('.inputName');
  var greetBtnElement = document.querySelector('.greetBtn');
  var clearBtnElement = document.querySelector('.clearBtn');
  var greetingElement = document.querySelector('.greeting');
  var language = document.querySelector('.language');

  var greetSpotter = Greetings();

  function clickGreetBtn() {
    var name = inputName.value;
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    if (checkedRadioBtn) {

      var languageChoice = checkedRadioBtn.value;
      var displayGreeting = greetSpotter.allGreetings(languageChoice, name);

      var greetsNo = greetSpotter.countAllgreets();
      var greetName = greetSpotter.countAllNames();

      greetingElement.innerHTML = displayGreeting;
      localStorage.setItem('namesGreeted', JSON.stringify(greetName));
      greetCounterElem.innerHTML = greetSpotter.countAllgreets();
      localStorage.setItem('namesGreeted', JSON.stringify(greetName));
      inputName.value = '';
    }
  }

  function clickTheClearButton() {
    greetingElement.innerHTML = '';
    greetCounterElem.innerHTML = 0;

    var greetsNo = greetSpotter.countAllgreets();
    var greetName = greetSpotter.countAllNames();
    localStorage.setItem('namesGreeted', JSON.stringify(greetName));

    inputName.innerHTML = "";
    greetCounterElem.innerHTML = greetsNo;

  };

  greetBtnElement.addEventListener('click', clickGreetBtn);
  clearBtnElement.addEventListener('click', clickTheClearButton);
});
