// calculate Triangle Area
function calculateTriangleArea() {
  const base = getInputValueById("triangle-base");
  const height = getInputValueById("triangle-height");

  const area = 0.5 * base * height;

  setResult(area, "Triangle");
}

// calculate Rectangle Area
function calculateRectangleArea() {
  const width = getInputValueById("rectangle-width");
  const length = getInputValueById("rectangle-length");

  const area = width * length;

  setResult(area, "Rectangle");
}

// calculate Parallelogram Area
function calculateParallelogramArea() {
  const base = getInputValueById("parallelogram-base");
  const height = getInputValueById("parallelogram-height");

  const area = base * height;

  setResult(area, "Parallelogram");
}

// calculate Rhombus Area
function calculateRhombusArea() {
  const base1 = getInputValueById("rhombus-base-1");
  const base2 = getInputValueById("rhombus-base-2");

  const area = 0.5 * base1 * base2;

  setResult(area, "Rhombus");
}

// calculate Pentagon Area
function calculatePentagonArea() {
  const penta = getInputValueById("pentagon-penta");
  const base = getInputValueById("pentagon-base");

  const area = 0.5 * penta * base;

  setResult(area, "Pentagon");
}

// calculate Ellipse Area
function calculateEllipseArea() {
  const ellipseArea = getInputValueById("ellipse-area");
  const base = getInputValueById("ellipse-base");

  const area = 3.14 * ellipseArea * base;

  setResult(area, "Ellipse");
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValue = inputField.value;
  const value = parseFloat(inputValue);

  return value;
}

function setResult(value, name) {
  const elementContainer = document.getElementById("result-area");
  const element = document.createElement("li");

  element.innerText = `${name} Value is : ${value}cm`;
  elementContainer.appendChild(element);
}
