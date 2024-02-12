function calculateTriangleArea() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleHeightInput = document.getElementById("triangle-height");

  const triangleBaseValue = triangleBaseInput.value;
  const triangleHeightValue = triangleHeightInput.value;

  const base = parseFloat(triangleBaseValue);
  const height = parseFloat(triangleHeightValue);

  const area = 0.5 * base * height;

  console.log(area);
}
