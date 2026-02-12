function checkAnswer() {
    const input = document.getElementById("answerInput").value.trim().toLowerCase();
    const correctAnswer = "why are my bigs so boobs ?";

    if (input === correctAnswer) {
        startTransition();
    } else {
        document.getElementById("error").innerText = "Wrong answer 😢 Try again!";
    }
}

function startTransition() {
    document.getElementById("gate").style.display = "none";
    const transition = document.getElementById("transition");
    const video = document.getElementById("valVideo");
    const music = document.getElementById("bgMusic");

    transition.style.display = "flex";
    video.play();
    music.play();

    video.onended = function () {
        transition.style.display = "none";
        document.getElementById("mainPage").style.display = "block";
        document.body.style.overflow = "auto";
    };
}
