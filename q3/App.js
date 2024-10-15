const display1 = document.getElementById("input1");
const display2 = document.getElementById("input2");
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", (e) => {
    display1.value += e.target.textContent.trim();
  });
});
let fn = null;
let sn = null;
let op;
document.querySelectorAll(".button-color").forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(fn);

    if (fn) {
      sn = display1.value;
      display1.value = null;
      let result = calculate(+fn, op, +sn);
      fn = result;
      display2.value = `${fn}${op}`;
    } else {
      fn = display1.value;
      op = e.target.textContent;
      display1.value = null;
      display2.value = `${fn}${op}`;
    }
  });
});

document.querySelectorAll(".equal-button").forEach((button) => {
  button.addEventListener("click", () => {
    sn = display1.value;
    display1.value = calculate(+fn, op, +sn);
    display2.value = `${fn}${op}${sn}`;
  });
});
document.querySelectorAll(".clear").forEach((button) => {
  button.addEventListener("click", () => {
    display1.value = null;
  });
});

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  //not holding "" ?
  " C": (display1.value = null),
  "%": (a, b) => (b / 100) * a,
};

// Function to perform the calculation
function calculate(a, operator, b) {
  // Check if the operator is valid
  if (operations[operator]) {
    return operations[operator](a, b);
  } else {
    throw new Error("Invalid operator");
  }
}
