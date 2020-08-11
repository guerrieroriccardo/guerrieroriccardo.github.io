function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(RGB);
}

function draw() {
  background(0);
  var standard = windowHeight / 10;
  var dimension = windowHeight / 25;

  var hours = hour();
  var minutes = minute();
  var seconds = second();

  var secondsMap = map(seconds, 0, 60, 0, 360);
  var minutesMap = map(minutes, 0, 60, 0, 360);
  var hoursMap = map(hours, 0, 24, 0, 360);

  stroke(40, 45, 79);
  strokeWeight(dimension);
  noFill();
  arc(
    windowWidth / 2,
    windowHeight / 2,
    windowHeight - standard,
    windowHeight - standard,
    -90,
    secondsMap
  );
  stroke(160, 32, 76);
  arc(
    windowWidth / 2,
    windowHeight / 2,
    windowHeight - standard * 2,
    windowHeight - standard * 2,
    -90,
    minutesMap
  );
  stroke(255, 108, 0);
  arc(
    windowWidth / 2,
    windowHeight / 2,
    windowHeight - standard * 3,
    windowHeight - standard * 3,
    -90,
    hoursMap
  );
}
