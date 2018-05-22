function Greetings(stored) {
  var greetingSpotted = stored ? Object.keys(stored).length : 0;
  var greetedNames = stored || {};

  function greet(language, name) {
    if (name != '') {
      if (greetedNames[name] === undefined) {
        greetedNames[name] = 0;
      }
      if (language === "English") {
        return "Hello, " + name;
      }
      if (language === "Afrikaans") {
        return "Hallo, " + name;
      }
      if (language === "isiXhosa") {
        return "Molo, " + name;
      }

    }
  }

  function greetSpottedCounter() {
    return Object.keys(greetedNames).length;
    // var counter = 0
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
