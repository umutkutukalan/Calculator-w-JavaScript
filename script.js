const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function evaluationCalculation() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearField() {
  display.value = "";
}
