let string = "";
let buttons = document.querySelectorAll('.button');
let input = document.getElementsByClassName('input')[0];

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', () => {
    let button_value = button.textContent;
    if (button_value == '÷') {
      button_value = "/"
    } else if (button_value == "X") {
      button_value = "*"
    }

    if (button_value == "AC") {
      string = '';
      input.innerHTML = string;
    }
    else if (button_value == "Del") {
      if (string == "Error") {
        string = "";
      }
      string = string.substring(0, string.length - 1);;
      input.innerHTML = string;
    }
    else if (button_value == "=") {
      try {
        string = eval(string)
        if (isNaN(string)) {
          string = "Error"
        }
        input.innerHTML = string;
      } catch (error) {
        string = "Error"
        input.innerHTML = string;
      }
    } else {
      if (string == "Error") {
        string = "";
      }
      string += button_value;
      input.innerHTML = string;

    }
  });
});