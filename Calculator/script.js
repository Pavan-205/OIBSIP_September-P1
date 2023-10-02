const displayInput = document.querySelector("#display-input");
const displayOutput = document.querySelector("#display-output");
const buttons = document.querySelectorAll("button");
let input = "";
let isResultDisplayed = false;
let previousResult = null; // Store the result of the previous operation

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      displayInput.innerText = "";
      displayOutput.innerText = "";
      input = "";
      isResultDisplayed = false;
      previousResult = null; // Clear the previous result
    } else if (item.id == "backspace") {
      let string = displayInput.innerText.toString();
      displayInput.innerText = string.substr(0, string.length - 1);
      input = input.substr(0, input.length - 1);
      isResultDisplayed = false;
    } else if (item.id == "equal") {
      if (!isResultDisplayed) {
        try {
          // Evaluate the expression using mathjs library
          const result = math.evaluate(displayInput.innerText);

          displayOutput.innerText = result;
          input = result.toString();
          isResultDisplayed = true;
          previousResult = result; // Store the result for future calculations
        } catch (error) {
          displayOutput.innerText = "Error";
          setTimeout(() => {
            displayInput.innerText = "";
            displayOutput.innerText = "";
            input = "";
            isResultDisplayed = false;
          }, 2000);
        }
      }
    } else {
      if (isResultDisplayed) {
        // If the result is displayed, start a new operation
        input = ""; // Clear the input for the new operation
        isResultDisplayed = false;
      }
      displayInput.innerText += item.id;
      input += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-icon");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".bx bx-mmon");
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};
