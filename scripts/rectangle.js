function calculateRectangleArea() {
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleLengthInput = document.getElementById("rectangle-length");

  const rectangleWidthValue = rectangleWidthInput.value;
  const rectangleLengthValue = rectangleLengthInput.value;

  const width = parseFloat(rectangleWidthValue);
  const length = parseFloat(rectangleLengthValue);

  const area = width * length;

  console.log(area);
}
