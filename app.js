// phil welsby - 15 aug 2021

// variables
const drawCard = document.getElementById("draw-card");
const hold = document.getElementById("hold")
const player1Card1 = document.getElementById("player1-card1");

// Hit Me button
drawCard.addEventListener("click", () => {
    console.log("Hit Me")
    let randomNum = Math.floor(Math.random() * 6) +1;
    //console.log("randomNum =", randomNum);
    if (randomNum == 1) {
        player1Card1.src = "./playing-cards-assets/png/ace_of_diamonds.png";
        console.log("randomNum =", randomNum);
    }
});

// hold button
hold.addEventListener("click", () => {
    console.log("Hold");
});

