function calculateRectangleArea() {
  const width = getInputValueById("rectangle-width");
  const length = getInputValueById("rectangle-length");

  const area = width * length;

  setResult(area, "Rectangle");
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
  element.innerText = `${name} Value is : ${value}`;
  elementContainer.appendChild(element);
}
