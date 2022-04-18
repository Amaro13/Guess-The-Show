"use strict";

const show = ["family guy", "american dad", "the simpsons"];
let secret = show[Math.trunc(Math.random() * 3)];

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = String(document.querySelector(".guess").value).toLowerCase();
  console.log(guess, typeof guess);
  console.log(secret, typeof secret);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage("⛔️ Nothing written!");

    // When player wins
  } else if (guess === secret) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage("🎉 Correct Show!");
    if (secret === "the simpsons") {
      document.body.style.backgroundImage = `url('the simpsons.jpg')`;
    } else if (secret === "american dad") {
      document.body.style.backgroundImage = `url('american dad.jpg')`;
    } else {
      document.body.style.backgroundImage = `url('family guy.jpg')`;
    }
    document.querySelector(".check").style.visibility = "hidden";
    document.querySelector("body").style.backgroundColor = "#60b347";

    // When guess is wrong
  } else if (guess !== secret) {
    displayMessage("💥 You lost the game!");
    document.body.style.backgroundImage = `url('youlose.jpg')`;
    document.querySelector(".check").style.visibility = "hidden";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secret = show[Math.trunc(Math.random() * 3)];

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.body.style.backgroundImage = `url('tvshow.png')`;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".check").style.visibility = "visible";
});
