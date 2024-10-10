function alertMessage() {
  alert("Hello World");
}

const button = document.querySelector("#btn");

button.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

const button2 = document.querySelector("#btn2");

button2.addEventListener("click", alertMessage);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});


