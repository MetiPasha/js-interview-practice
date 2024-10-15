let text = document.querySelector(".text");
let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");

let textSize = 20; //soal darbare inke hatman fontsize byd barabar ba 20 bashe?

// for increase
increase.addEventListener("click", () => {
  textSize = textSize + 5;
  text.style.fontSize = textSize + "px";
});

// for decrease
decrease.addEventListener("click", () => {
  textSize = textSize - 5;
  text.style.fontSize = textSize + "px";
});
