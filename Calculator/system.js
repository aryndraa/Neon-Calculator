let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(-1, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

var password = "";

function addToPassword(number) {
  password += number;
  document.getElementById("password").value = password;
}

function checkPassword() {
  if (password === "10101") {
    // Ganti "123456" dengan sandi yang Anda inginkan
    window.location.href = "CalculatorWhite.html";
  }
}
