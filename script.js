document.addEventListener("click", function () {
    const music = document.getElementById("bgMusic");

    if (music && music.paused) {
        music.play().catch(err => console.log(err));
    }
}, { once: true });