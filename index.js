const button = document.getElementById("random-background-color");
const colorText = document.getElementById("display-color");

let currentColor = "#ffffff";
let currentTextColor = getTextColor(currentColor);
document.body.style.backgroundColor = currentColor;
colorText.style.color = currentTextColor;

function getRandomColor() {
  const hexValues = "0123456789abcdef";
  color = "#";
  for (let i = 0; i < 6; i++) {
    color += randomValue(hexValues);
  }
  return color;
}

function getTextColor(newColor) {
  const darkHexValues = "01234567";

  return darkHexValues.includes(newColor[1]) * 2 +
    darkHexValues.includes(newColor[3]) * 3 +
    darkHexValues.includes(newColor[5]) >
    3
    ? "white"
    : "black";
}

function randomValue(object) {
  return object[Math.floor(Math.random() * object.length)];
}

function updatePage(oldColor, newColor, oldTextColor, newTextColor) {
  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
  colorText.style.color = newTextColor;

  const animationTiming = {
    duration: 300,
    iterations: 1,
  };

  document.body.animate(
    [{ backgroundColor: oldColor }, { backgroundColor: newColor }],
    animationTiming
  );

  colorText.animate(
    [{ color: oldTextColor }, { color: newTextColor }],
    animationTiming
  );
}

button.addEventListener("click", () => {
  const newColor = getRandomColor();
  const newTextColor = getTextColor(newColor);
  updatePage(currentColor, newColor, currentTextColor, newTextColor);
  currentColor = newColor;
  currentTextColor = newTextColor;
});
