var initialPointX = 0.0;
var initialPointY = 0.0;
var lenghtOne;
var lenghtTwo;
var massOne;
var massTwo;
var O1 = 0;
var O2 = 0;

var g = 0.05;

var O1velocity = 0;
var O2velocity = 0;

var O1acceleration;
var O2acceleration;

var x1 = 0.0;
var y1 = 0.0;
var x2 = 0.0;
var y2 = 0.0;

var canvas;

var px2 = 0;
var py2 = 0;

//Slider
var sliderFirstWeight;
var sliderSecondWeight;
var sliderLenghtOne;
var sliderLenghtTwo;

function setup() {
  createCanvas(900, 900);
  O1 = PI / 2;
  O2 = PI / 2;
  canvas = createGraphics(900, 900);
  canvas.background(255);
  canvas.translate(450, 450);

  sliderFirstWeight = createSlider(1, 300, 20, 0.1);
  sliderSecondWeight = createSlider(1, 300, 20, 0.1);
  sliderLenghtOne = createSlider(1, 200, 100, 0.1);
  sliderLenghtTwo = createSlider(1, 200, 100, 0.1);
}

function draw() {
  background(255);
  imageMode(CORNER);
  image(canvas, 0, 0, 900, 900);
  translate(450, 450);

  massOne = sliderFirstWeight.value();
  massTwo = sliderSecondWeight.value();
  lenghtOne = sliderLenghtOne.value();
  lenghtTwo = sliderLenghtTwo.value();

  var num1 =
    -g * (2 * massOne + massTwo) * sin(O1) -
    massTwo * g * sin(O1 - 2 * O2) -
    2 *
      sin(O1 - O2) *
      massTwo *
      (O2velocity * O2velocity * lenghtTwo +
        O1velocity * O1velocity * lenghtOne * cos(O1 - O2));

  var den1 =
    lenghtOne * (2 * massOne + massTwo - massTwo * cos(2 * O1 - 2 * O2));

  O1acceleration = num1 / den1;

  num1 =
    2 *
    sin(O1 - O2) *
    (O1velocity * O1velocity * lenghtOne * (massOne + massTwo) +
      g * (massOne + massTwo) * cos(O1) +
      O2velocity * O2velocity * lenghtTwo * massTwo * cos(O1 - O2));

  den1 = lenghtTwo * (2 * massOne + massTwo - massTwo * cos(2 * O1 - 2 * O2));
  O2acceleration = num1 / den1;

  x1 = lenghtOne * sin(O1);
  y1 = lenghtOne * cos(O1);
  x2 = x1 + lenghtTwo * sin(O2);
  y2 = y1 + lenghtTwo * cos(O2);

  line(0, 0, x1, y1);
  line(x1, y1, x2, y2);
  ellipse(x1, y1, massOne);
  ellipse(x2, y2, massTwo);

  O1velocity += O1acceleration;
  O2velocity += O2acceleration;
  O1 += O1velocity;
  O2 += O2velocity;

  canvas.stroke(1);
  if (frameCount > 1) {
    canvas.line(px2, py2, x2, y2);
  }
  px2 = x2;
  py2 = y2;
}
