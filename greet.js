 document.addEventListener('DOMContentLoaded', function() {
   var greetCounterElem = document.querySelector('.greetCounter');
   var firstNameElement = document.querySelector('.firstName');
   var greetBtnElement = document.querySelector('.greetBtn');
   var clearBtnElement = document.querySelector('.clearBtn');
   var greetingElement = document.querySelector('.greeting');
   var language = document.querySelector('.language');

   function clickGreetBtn() {
     var firstName = firstNameElement.value;
     var greetingString = "Hi, " + firstName;
     greetingElement.innerHTML = greetingString;
     firstNameElement.value = '';
   }

   function greet(firstName, language) {
     var english = "";
     var afrikaans = "";
     var xhosa = "";

     var checkedRadioBtn = document.querySelector("input[name='language']:checked");
     if (checkedRadioBtn) {
       var language = checkedRadioBtn.value;
     }

     if (language === 'English') {
       return 'Hello ' + firstName;
     }
     if (language === 'Afrikaans') {
       return 'Goeiemore ' + firstName;
     }
     if (language === 'isiXhosa') {
       return 'Molo ' + firstName;
     }
   }

   function greetingSpotted() {
     var greetSpottedCounter = 0;

     function doStuff() {

     }

     function greetSpotted() {
       doStuff();
       greetSpottedCounter++;
     }

     function greetCount() {
       return greetSpottedCounter;
     }

     return {
       greetSpotted,
       greetCount
     }
   }
   var greetingSpotted = greetingSpotted();

   greetBtnElement.addEventListener('click', function() {
     greetingSpotted.greetSpotted();
     greetCounterElem.innerHTML = greetingSpotted.greetCount();
   });

   greetBtnElement.addEventListener('click', clickGreetBtn);

   function clickTheClearButton() {
     greetingElement.innerHTML = '';
   };

   clearBtnElement.addEventListener('click', clickGreetBtn);
 });
