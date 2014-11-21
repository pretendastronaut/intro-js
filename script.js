var textBox
var ship
var button


var commandEntered = function(event) {
  event.preventDefault();
  var text = textBox.value;
  commandHandler(text);
  textBox.value = '';
};

var commandHandler = function(cmd) {
  var words = cmd.split(' ');
  var firstWord = words[0];
  words.shift();
  console.log(words);
  if (cmd=== 'launch') {
    launch();
  }
  else if (firstWord === 'go') {
    go(words);
  }
  else if (firstWord === "change") {
    change(words);
  }
  else {
    wrongCommand();
  }
};
var hasExploded = false;
var hasLaunched = false;
var launch = function() {
  if (hasExploded) {
    return wrongCommand();
  }
  hasLaunched = true;
  }
  ship.src = 'resources/spaceship.png';
  
};

var go = function(commandWords) {
  var directions = {
    left: [-80, 0],
    right: [80, 0],
    up: [0, 80],
    down: [0, -80]
  };
  var displacement = directions[
    commentWords[0]];
    if (dispacement === undefined) {
      wrongCommand;
    }
    var leftText= ship.style.left
    var rightText = ship.style.right;
    var shipLeftPosition = leftText.split('px');
    var shipBottomPosition = leftText.split('px').join('');
    ship.style.left = parseInt(
      shipLeftPosition[0], 10); + displacement[0] +'px';
    ship.style.bottom = parseInt(
      shipBottomPosition, 10) + displacement[1] +'px';
    debugger;
};

var change = function(commandWords) {
  if (commandWords[0] === 'image') {
    ship.src = commandWords[1];
  }
  else {
    wrongCommand();
  }
};

var wrongCommand = function() {
  hasExploded = true;
  ship.src= 'resources/explode.png';
};

