describe('greet', function() {
  it('should return the greeting in English', function() {
    var greeted = Greetings();
    assert.equal("Hello, Lihle", greeted.allGreetings("English", "Lihle"));
    assert.equal(1, greeted.countAllGreets());
  });

  it('should not increment counter if person greeted again', function() {
    var greeted = Greetings();
    assert.equal("Hello, Lihle", greeted.allGreetings("English", "Lihle"));
    assert.equal(1, greeted.countAllGreets());

    assert.equal("Hello, Lihle", greeted.allGreetings("English", "Lihle"));
    assert.equal(1, greeted.countAllGreets());
  });

  it('should return 2 to indicate two different people were greeted', function() {
    var greeted = Greetings();
    assert.equal("Hello, Lihle", greeted.allGreetings("English", "Lihle"));
    assert.equal(1, greeted.countAllGreets());

    assert.equal("Hello, Andrew", greeted.allGreetings("English", "Andrew"));
    assert.equal(2, greeted.countAllGreets());
  });

  it('should return the greeting in Afrikaans', function() {
    var greeted = Greetings();
    assert.equal("Hallo, Lihle", greeted.allGreetings("Afrikaans", "Lihle"));
  });

  it('should return the greeting in isiXhosa', function() {
    var greeted = Greetings();
    assert.equal("Molo, Lihle", greeted.allGreetings("isiXhosa", "Lihle"));
  });
});
