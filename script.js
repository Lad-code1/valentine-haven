const puzzle = document.getElementById("puzzle-container");
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const hearts = document.querySelectorAll(".heart");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const title = document.getElementById("letter-title");
const cat = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

let clicked = 0;

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    if (!heart.classList.contains("clicked")) {
      heart.classList.add("clicked");
      clicked++;
    }
    if (clicked === 3) {
      puzzle.style.display = "none";
      envelope.style.display = "block";
    }
  });
});

envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";
  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee!";
  cat.src = "cat_dance.gif";
  buttons.style.display = "none";
  finalText.style.display = "block";

  setTimeout(() => {
    letter.style.display = "none";
    document.getElementById("memories-container").style.display = "flex";
  }, 1500);
});

document.getElementById("to-letter-btn").addEventListener("click", () => {
  document.getElementById("memories-container").style.display = "none";
  document.getElementById("final-letter").style.display = "flex";
});
