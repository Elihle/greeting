function Greetings(stored) {
  var greetingSpotted = 0;
  var greetedNames = {};

  function greet(language, name) {
    if (name != '') {
      greetingSpotted = stored;
      console.log(greetingSpotted);
      if (greetedNames[name] === undefined) {
        greetingSpotted++;
        greetedNames[name] = 0;
        return language + ', ' + name;
      } else {
        return language + ', ' + name;
      }
    }
  }

  function greetSpottedCounter() {
    return greetingSpotted;
  }

  function greetCounter() {
    return greetedNames;
  }

  return {
    allGreetings: greet,
    countAllgreets: greetSpottedCounter,
    countAllNames: greetCounter
  }
}
