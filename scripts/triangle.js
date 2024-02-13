function calculateTriangleArea() {
  const base = getInputValueById("triangle-base");
  const height = getInputValueById("triangle-height");

  const area = 0.5 * base * height;

  setResult(area, "Triangle");
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValue = inputField.value;
  const value = parseFloat(inputValue);

  setResult("", value);

  return value;
}

function setResult(value, name) {
  const elementContainer = document.getElementById("result-area");
  const element = document.createElement("li");
  element.innerText = `${name} Value is : ${value}`;
  elementContainer.appendChild(element);
}
