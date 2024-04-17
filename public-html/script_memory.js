// Requirements
// Going to need a function to play the game
// Going to need a function to flip the cards
// Function to assign images
// Function to randomize
// Track matches and show game complete
// Reset button

var cardValues = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
var cardsDisplayed = [];
var matchCount = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}

function resetGame() {
    // clear data
    cardsDisplayed = [];
    matchCount = 0;
    // change cards back to default state
    for (let i = 1; i <= cardValues.length; i++) {
        var cardId = "card" + i;
        var backImg = "./images/back.png";
        document.getElementById(cardId).src = backImg;
    }
    // clear match info
    var fullMatch = document.getElementById("fullMatch");
    fullMatch.innerHTML = "";
}

shuffle(cardValues);
console.log(cardValues)

function cardClicked(cardNumber) {
    // console.log("card clicked:", cardNumber);

    if (cardsDisplayed.length < 2) {

        cardsDisplayed.push(cardNumber);

        let cardValue = cardValues[cardNumber-1];
        let newImage = "./images/";

        switch(cardValue) {
            case 1:
                newImage += "card1.png";
                break;
            case 2:
                newImage += "card2.png";
                break;
            case 3:
                newImage += "card3.png";
                break;
            case 4:
                newImage += "card4.png";
                break;
            case 5:
                newImage += "card5.png";
                break;
            case 6:
                newImage += "card6.png";
                break;
            case 7:
                newImage += "card7.png";
                break;
            case 8:
                newImage += "card8.png";
                break;
            case 9:
                newImage += "card9.png";
                break;
            case 10:
                newImage += "card10.png";
                break;
        }

        var cardId = "card" + cardNumber;
        document.getElementById(cardId).src = newImage;

            //look for match
        if (cardsDisplayed.length == 2) {
            var card1Displayed = cardsDisplayed[0];
            var card2Displayed = cardsDisplayed[1];

            var card1Value = cardValues[card1Displayed-1];
            var card2Value = cardValues[card2Displayed-1];

            console.log(card1Value, card2Value);

            if (card1Value == card2Value) {
                //we have a match
                console.log("yep");
                matchCount++;
                console.log("matches:", matchCount);
                cardsDisplayed = [];
            } else {
                //no match
                console.log("nope");

                setTimeout(function(){
                    var c1 = document.getElementById("card" + cardsDisplayed[0]);
                    var c2 = document.getElementById("card" + cardsDisplayed[1]);

                    var backImg = "./images/back.png";

                    c1.src = backImg;
                    c2.src = backImg;

                    cardsDisplayed = [];
                },1000);
            }
        }

        if (matchCount === cardValues.length / 2) {
            var fullMatch = document.getElementById("fullMatch")
            alert("All matches found!");
        }
    }
}


window.addEventListener("load", (event) => {

    let card1 = document.getElementById("card1");
    card1.addEventListener("click", function() {
        cardClicked(1);
    });

    let card2 = document.getElementById("card2");
    card2.addEventListener("click", function() {
        cardClicked(2);
    });

    let card3 = document.getElementById("card3");
    card3.addEventListener("click", function() {
        cardClicked(3);
    });

    let card4 = document.getElementById("card4");
    card4.addEventListener("click", function() {
        cardClicked(4);
    });

    let card5 = document.getElementById("card5");
    card5.addEventListener("click", function() {
        cardClicked(5);
    });

    let card6 = document.getElementById("card6");
    card6.addEventListener("click", function() {
        cardClicked(6);
    });

    let card7 = document.getElementById("card7");
    card7.addEventListener("click", function() {
        cardClicked(7);
    });

    let card8 = document.getElementById("card8");
    card8.addEventListener("click", function() {
        cardClicked(8);
    });

    let card9 = document.getElementById("card9");
    card9.addEventListener("click", function() {
        cardClicked(9);
    });

    let card10 = document.getElementById("card10");
    card10.addEventListener("click", function() {
        cardClicked(10);
    });

    let card11 = document.getElementById("card11");
    card11.addEventListener("click", function() {
        cardClicked(11);
    });

    let card12 = document.getElementById("card12");
    card12.addEventListener("click", function() {
        cardClicked(12);
    });

    let card13 = document.getElementById("card13");
    card13.addEventListener("click", function() {
        cardClicked(13);
    });

    let card14 = document.getElementById("card14");
    card14.addEventListener("click", function() {
        cardClicked(14);
    });

    let card15 = document.getElementById("card15");
    card15.addEventListener("click", function() {
        cardClicked(15);
    });

    let card16 = document.getElementById("card16");
    card16.addEventListener("click", function() {
        cardClicked(16);
    });

    let card17 = document.getElementById("card17");
    card17.addEventListener("click", function() {
        cardClicked(17);
    });

    let card18 = document.getElementById("card18");
    card18.addEventListener("click", function() {
        cardClicked(18);
    });

    let card19 = document.getElementById("card19");
    card19.addEventListener("click", function() {
        cardClicked(19);
    });

    let card20 = document.getElementById("card20");
    card20.addEventListener("click", function() {
        cardClicked(20);
    });

    let reset = document.getElementById("resetGame");
    reset.addEventListener("click", function() {
        resetGame();
    });
});
