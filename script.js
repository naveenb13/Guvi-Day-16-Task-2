var division1 = create("div", "container-fluid mt-5 ml-5 p-5");

let bg = document.querySelector("body");

var divarray = createElements(
  "div",
  "offset-md-2 offset-sm-1 row text-md-center text-sm-left h4 mb-0",
  6
);

var input = create("input", "col-8 border-3 border-light text-right mt-5 mb-1");
input.setAttribute("type", "text");
input.disabled = true;
input.setAttribute(
  "style",
  `line-height:60px; background-color:#DAE0E2; font-family: 'Comfortaa', cursive;`
);
input.id = "display";

var btnnumbers = createElements(
  "button",
  "btn-fluid btn-dark text-md-center text-sm-left text-xs-left p-md-3 p-sm-4 p-xs-4 col-2",
  10
);
btnnumbers[0].setAttribute("onclick", "appendNumber(0)");
btnnumbers[1].setAttribute("onclick", `appendNumber(1)`);
btnnumbers[2].setAttribute("onclick", `appendNumber(2)`);
btnnumbers[3].setAttribute("onclick", `appendNumber(3)`);
btnnumbers[4].setAttribute("onclick", `appendNumber(4)`);
btnnumbers[5].setAttribute("onclick", `appendNumber(5)`);
btnnumbers[6].setAttribute("onclick", `appendNumber(6)`);
btnnumbers[7].setAttribute("onclick", `appendNumber(7)`);
btnnumbers[8].setAttribute("onclick", `appendNumber(8)`);
btnnumbers[9].setAttribute("onclick", `appendNumber(9)`);

var add = createButton("+", "+", `appendNumber('+')`);
var sub = createButton("-", "-", `appendNumber('-')`);
var mul = createButton("x", "X", `appendNumber('*')`);
var division = createButton("&#247;", "/", `appendNumber('/')`);
var square = createButton("x<sup>2</sup>", "square", "power2()");
var equals = createButton("=", "=", "equate()");
var root = createButton("&radic;", "root", "sqrRoot()");
var dot = createButton(".", ".", `appendNumber('.')`);
var clear = createButton("c", "c", "clearScreen()");
var cube = createButton("x<sup>3</sup>", "cube", "power3()");

document.body.append(division1);
division1.append(divarray[0], divarray[1], divarray[2], divarray[3], divarray[4], divarray[5]);
divarray[0].append(input);
divarray[1].append(square, root, clear, division);
divarray[2].append(btnnumbers[7], btnnumbers[8], btnnumbers[9], mul);
divarray[3].append(btnnumbers[4], btnnumbers[5], btnnumbers[6], sub);
divarray[4].append(btnnumbers[1], btnnumbers[2], btnnumbers[3], add);
divarray[5].append(cube, btnnumbers[0], dot, equals);

function create(ele1, class1) {
  var create1 = document.createElement(ele1);
  create1.setAttribute("class", class1);
  return create1;
}

function createElements(ele2, class2, num) {
  let elem = [];
  for (let i = 0; i < num; i++) {
    var create2 = document.createElement(ele2);
    create2.setAttribute("class", class2);
    create2.setAttribute("style", `font-family: 'Comfortaa', cursive;`);
    if (ele2 === "button") {
      create2.setAttribute("value", i);
      create2.innerHTML = i;
    }
    elem.push(create2);
  }
  return elem;
}

function createButton(txt, val, fn) {
  let a = document.createElement("button");
  a.setAttribute(
    "class",
    "btn-fluid btn-dark text-md-center text-sm-left text-xs-left p-md-3 p-sm-4 p-xs-4 col-2"
  );
  a.setAttribute("value", val);
  a.innerHTML = txt;
  a.setAttribute("onclick", fn);
  return a;
}

function appendNumber(val) {
  input.value += val;
}

function equate() {
  input.value = Number.isInteger(eval(input.value))
    ? eval(input.value)
    : eval(input.value).toFixed(2);
}

function sqrRoot() {
  if (input.value) {
    let val = parseFloat(eval(input.value));
    input.value = Math.sqrt(val).toFixed(2);
  }
}

function power3() {
  if (input.value) {
    let val = parseFloat(eval(input.value));
    input.value = Math.pow(val, 3).toFixed(2);
  }
}

function power2() {
  if (input.value) {
    let val = parseFloat(eval(input.value));
    input.value = Math.pow(val, 2).toFixed(2);
  }
}

function clearScreen() {
  input.value = "";
}
