// phil welsby - 15 aug 2021


//create an array of playing cards
const deck = new Array();
deck.src = "./playing-cards-assets/png/";

// variables
const drawCard = document.getElementById("draw-card");
const hold = document.getElementById("hold")
const player1Card1 = document.getElementById("player1-card1");


// Hit Me button
drawCard.addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * 4) +1;
    console.log("randomNum is", randomNum);
    if (randomNum == 1) {
        player1Card1.src = "./playing-cards-assets/png/ace_of_diamonds.png";
    }
    else if (randomNum == 2) {
        player1Card1.src = "./playing-cards-assets/png/ace_of_clubs.png";
    }
    else if (randomNum == 3) {
        player1Card1.src = "./playing-cards-assets/png/ace_of_hearts.png";
    }
    else if (randomNum == 4) {
        player1Card1.src = "./playing-cards-assets/png/ace_of_spades.png";
    }

});


    


// hold button
hold.addEventListener("click", () => {
    console.log("Hold");
});

deck.drawCard