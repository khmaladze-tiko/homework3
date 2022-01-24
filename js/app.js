const button = document.getElementById("btn");
const color = document.querySelector(".color");

const colors = [
    "yellow",
    "brown",
    "pink",
    "red",
    "green",
    "blue",
    "grey",
    "beige",
    "orange",
    "aqua",
];

button.addEventListener("click", () => {
    const randomColor = colors[getRandomNumber()];
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});

function getRandomNumber() {
   return Math.floor(Math.random() * colors.length);
}

