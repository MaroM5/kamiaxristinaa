$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});


document.getElementById("cardContainer").addEventListener("mouseenter", function () {
  generateConfetti();
});

function generateConfetti() {
  const confettiContainer = document.getElementById("confettiContainer");

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confettiContainer.appendChild(confetti);

    confetti.addEventListener("animationend", function () {
      confetti.remove();
    });
  }
}
