var text = document.querySelector(".text");
var increase = document.querySelector(".increase");
var decrease = document.querySelector(".decrease");

var textSize = 20; //soal darbare inke hatman fontsize byd barabar ba 20 bashe?

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
