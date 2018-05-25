function Greetings(stored) {
  var greetedNames = stored || {};

  function greet(language, name) {
      if (greetedNames[name] === undefined) {
        greetedNames[name] = 0;
        localStorage.setItem('greetedNames',JSON.stringify(greetedNames));
      }
      if (language === 'English') {
        return 'Hello, ' + name;
      }
      if (language === 'Afrikaans') {
        return 'Hallo, ' + name;
      }
      if (language === "isiXhosa") {
        return 'Molo, ' + name;
      }
  }

  function greetSpottedCounter() {
    var storedNames = JSON.parse(localStorage.getItem("greetedNames"));
     return Object.keys(storedNames).length;
    // // var counter = 0
    // for (var name in greetedNames){
    //     counter++;
    // }
    // return counter;
  }

  function greetCounter() {
    return greetedNames;
  }

  return {
    allGreetings: greet,
    countAllGreets: greetSpottedCounter,
    countAllNames: greetCounter
  }
}
