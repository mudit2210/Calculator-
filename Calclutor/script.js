const screen = document.getElementById("screen");

document.querySelectorAll(".number").forEach((button) => {
button.addEventListener("click", () => {
if (screen.value == "0") {
screen.value = button.id;
} else {
screen.value += button.id;
}
});
});

document.querySelectorAll(".operator").forEach((button) => {
button.addEventListener("click", () => {
switch(button.id) {
    case "clear":
    screen.value = "0";
    break;
    case "clear":
    screen.value = "00";
    break;
    case "backspace":
    screen.value = screen.value.slice(0, -1);
    if (screen.value == "") {
    screen.value = "0";
    }
    break;
    case "modulus":
    screen.value = eval(screen.value + "/100");
    break;
    case "divide":
    screen.value += "/";
    break;
    case "multiply":
    screen.value += "*";
    break;
    case "subtract":
    screen.value += "-";
    break;
    case "add":
    screen.value += "+";
    break;
    case "equals":
    screen.value = eval(screen.value);
    break;
    }
    });
    });

document.getElementById("decimal").addEventListener("click", () => {
if (!screen.value.includes(".")) {
screen.value += ".";
}
});