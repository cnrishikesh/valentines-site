const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

// Make sure No button starts somewhere
moveNoButton();

// Move "No" button continuously
setInterval(moveNoButton, 800);

function moveNoButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Prevent clicking No button
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
});

// Yes button action
yesBtn.addEventListener("click", () => {
    result.innerHTML = "Yayyy!! 💐 You made my day! 💕";
    createFlowers();
});

// Falling flowers
function createFlowers() {
    for (let i = 0; i < 30; i++) {
        let flower = document.createElement("div");
        flower.innerHTML = "🌸";
        flower.style.position = "fixed";
        flower.style.left = Math.random() * window.innerWidth + "px";
        flower.style.top = "-20px";
        flower.style.fontSize = "30px";
        flower.style.animation = "fall 3s linear infinite";
        document.body.appendChild(flower);
    }
}

// Animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(100vh);
        opacity: 0;
    }
}`;
document.head.appendChild(style);
