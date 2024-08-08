document.addEventListener("DOMContentLoaded", () => {
    const calselement = document.getElementById("cals");
  
    // Input Box
    const inputbox = document.createElement("input");
    inputbox.setAttribute("id", "inputbox");
    inputbox.setAttribute("type", "text");
    inputbox.setAttribute("readonly", "true");
    calselement.appendChild(inputbox);
  
    // Button Container
    const rowcol = document.createElement("div");
    rowcol.setAttribute("id", "buttons");
    calselement.appendChild(rowcol);
  
    // Buttons
    const buttonLabels = [
      "7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "00",
      "+", "-", "*", "/", ".", "CE", "="
    ];
  
    buttonLabels.forEach(label => {
      const button = document.createElement("button");
      button.innerText = label;
      button.classList.add("button");
      rowcol.appendChild(button);
    });
  
    // Button Click Event Handling
    const buttonElements = document.querySelectorAll("#buttons .button");
    const inputVal = document.getElementById("inputbox");
  
    buttonElements.forEach(button => {
      button.addEventListener("click", () => {
        const text = button.innerText;
        if (text === "CE") {
          inputVal.value = "";
        } else if (text === "=") {
          try {
            // Use eval to evaluate the expression
            inputVal.value = eval(inputVal.value);
          } catch (e) {
            inputVal.value = "Error";
          }
        } else {
          inputVal.value += text;
        }
      });
    });
  });
  




