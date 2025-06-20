class Password {
    constructor() {
      this.upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.lower = 'abcdefghijklmnopqrstuvwxyz';
      this.number = '1234567890';
      this.specialchar = '!@#$%^&*()_+{}|:"<>?-=[]\\;\',./';
    }
    passGenerator = (length, useUpper, useLower, useNumber, useSpecialChar) => {
      let passwordChars = '';
  
      if (useUpper) {
        passwordChars += this.upper;
      }
      if (useLower) {
        passwordChars += this.lower;
      }
      if (useNumber) {
        passwordChars += this.number;
      }
      if (useSpecialChar) {
        passwordChars += this.specialchar;
      }
      if (passwordChars === '') {
        alert("Please select at least one criteria");
        return '';
      }
  
      let password = '';
  
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * (passwordChars.length - 1)); // Fixed randomIndex calculation
        password += passwordChars[randomIndex];
      }
  
      return password;
    }
  }
  
  const newPassword = new Password();
  
  
  const length = document.getElementById('length');
  const upperCase = document.getElementById('uppercase');
  const lowerCase = document.getElementById('lowercase');
  const numbers = document.getElementById('numbers');
  const specialChars = document.getElementById('special-char');
  const generateButton = document.getElementById('generate-btn');
  const display = document.getElementById("password-display");
  const copyButton = document.getElementById('copybutton');
  
  generateButton.addEventListener("click", () => {
    let values = []
    let passLength = parseInt(length.value);
    if (passLength < 1) {
      alert('Length can not be less than 3')
    } else if (passLength > 1000) {
      alert("Length can not be greater than 100")
    }
    else if (isNaN(passLength)) {
      alert("Length is required!")
    }
    else {
      values.push(passLength)
      if (upperCase.checked) {
        values.push(true)
      }
      else { values.push(false) };
      if (lowerCase.checked) {
        values.push(true);
      }
      else {
        values.push(false);
      }
      if (numbers.checked) {
        values.push(true);
      }
      else {
        values.push(false);
      };
      if (specialChars.checked) {
        values.push(true);
      }
      else {
        values.push(false);
      };
      const finalPassword = newPassword.passGenerator(...values);
      if (finalPassword != "") {
        display.innerText = finalPassword;
        copyButton.style.display = "block"
      }
    }
  
  
  })
  
  copyButton.addEventListener("click", () => {
    text = display.innerText;
    navigator.clipboard.writeText(text)
      .then(() => {
      })
      .catch(error => {
        console.error("Failed to copy text:", error);
      });
  }
  
  )