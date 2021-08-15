const drawCard = document.getElementById("draw-card");
const hold = document.getElementById("hold")

drawCard.addEventListener("click", () => {
    console.log("Hit Me")
    let randomNum = Math.floor(Math.random() * 6) +1;
    console.log("randomNum =", randomNum);
});

hold.addEventListener("click", () => {
    console.log("Hold");
});

