var allButtons = document.querySelectorAll(".button");
var turnBanner = document.querySelector(".turnbanner");
var resetButton = document.querySelector(".resetButton");
var resetScores = document.querySelector(".resetscores")
var playerOneName = document.querySelector(".playerone")
var playerTwoName = document.querySelector(".playertwo")

//How to determine player turn
//Odd and even numbers?

var turnCounter = 0;
//If turnCounter is odd display O
//Else if turnCounter is even display X


// var xScore = document.querySelector(".xscore")
var xScore = document.querySelector(".xscore");

var oScore = document.querySelector(".oscore");

// for (number = 0; number <= 20; number = number + 1) {
//     if (number % 2 === 0) {
//     console.log(number + " is even")
// }   else (number % 2 !== 0)
//     console.log(number + " is odd")
// }


// Background flair
var cat = "https://pbs.twimg.com/profile_images/1080545769034108928/CEzHCTpI.jpg"
var dog = "https://wallpaperaccess.com/full/4160221.jpg"


//Create add listeners for each box
for (i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", handleClick);
}


//Function for all buttons
function handleClick (event) {
    if (event.target.textContent !== "") {
        return;
    }
    if (turnCounter % 2 === 0) {
        turnBanner.textContent = "It is O's turn";
        event.target.textContent = "X";
        event.target.style.backgroundImage = cat // IMAGE BACKGROUND DOESN'T WORK
        event.target.className = "xturn button";
        turnCounter = turnCounter + 1;
        checkWinConditions("x");
        
    } else if (turnCounter % 2 !== 0) {
        turnBanner.textContent = "It is X's turn";
        event.target.textContent = "O";
        event.target.style.backgroundImage = dog // IMAGE BACKGROUND DOESN'T WORK
        event.target.className = "oturn button";
        turnCounter = turnCounter - 1;
        checkWinConditions("o");
    }
}

//Create add listener for reset button
resetButton.addEventListener("click", clickReset);
//Create add listener for resetScores button
resetScores.addEventListener('click', clickResetScores)
//Create add listener for playerone name
playerOneName.addEventListener("click", clickPlayerOneName)
console.log("Clicking playeonename")
//Create add listener for playertwo name
playerTwoName.addEventListener("click", clickPlayerTwoName)








//Function for reset

function clickReset () {
    for (i = 0; i < allButtons.length; i++) {
        allButtons[i].className = "button"
    }
    for (i = 0; i < allButtons.length; i++) {
        allButtons[i].textContent = ""
    }
    turnCounter = 0
    console.log("Click reset clicked")
    for (i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener("click", handleClick);
    }
}
// Reset Score Function
function clickResetScores () {
    xScore.textContent = 0;
    oScore.textContent = 0;
}

// Player one name
function clickPlayerOneName () {
    var namePrompt = prompt("Insert Player I Name");
    playerOneName.textContent = namePrompt;
    if (playerOneName.textContent === "") {
        playerOneName.textContent = "Fine then be boring"
    }
}

//PLayer two name input
function clickPlayerTwoName () {
    var namePrompt = prompt("Insert Player II Name");
    playerTwoName.textContent = namePrompt;
    if (playerTwoName.textContent === "") {
        playerTwoName.textContent = "Fine then be boring"
    }
}


// NOW TO DO WIN CONDITIONS ZZZZ
// If 3 in a row on grid...win
// Should i name the divs number eg. if div 1+2+3 = win
// or 1+ 5+ 3 wins too, like a numpad.

//

//Win condition function....
// TOTAL OF 8 WIN CONDITIONS
//

function checkWinConditions(player) {
    var playerButton = player + "turn button";
    console.log(playerButton);
    var winText = player.toUpperCase() + " WINS!";

//1 // If buttons 1,2,3 = function(x || o) win display appears at the bottom
    // Now figure out how to end the game
    if (allButtons[0].className === playerButton &&  
        allButtons[1].className === playerButton && 
        allButtons[2].className === playerButton) {
            turnBanner.textContent = winText;
                        
            for (i = 0; i < allButtons.length; i++) {
                allButtons[i].removeEventListener("click", handleClick);
            }
            
            if (player === "x") {

            xScore.textContent = Number(xScore.textContent) + 1
            animateRyuTatsu()
            animateKenBlock()
            return
            } else if (player === "o")
            
            oScore.textContent = Number(oScore.textContent) + 1
            animateRyuBlock()
            animateKenTatsu()
            return

            
    } 
//2
    if (allButtons[3].className === playerButton && 
        allButtons[4].className === playerButton && 
        allButtons[5].className === playerButton) {
            turnBanner.textContent = winText;
            for (i = 0; i < allButtons.length; i++) {
                allButtons[i].removeEventListener("click", handleClick);
            }

            if (player === "x") {
                xScore.textContent = Number(xScore.textContent) + 1
                animateRyuKick()
                animateKenBlock()
                return

                } else if (player === "o")
                oScore.textContent = Number(oScore.textContent) + 1
                animateKenHadou()
                animateRyuBlock()
                return
    }
//3
    if (allButtons[6].className === playerButton && 
        allButtons[7].className === playerButton && 
        allButtons[8].className === playerButton) {
            turnBanner.textContent = winText;
            for (i = 0; i < allButtons.length; i++) {
                allButtons[i].removeEventListener("click", handleClick);
            }

            if (player === "x") {
                xScore.textContent = Number(xScore.textContent) + 1
                animateRyuKick();
                animateKenBlock();
                return
                } else if (player === "o")
                oScore.textContent = Number(oScore.textContent) + 1
                animateKenShoryuken();
                animateRyuBlock();
                return
            console.log("POTATO");
    }
//4 
    if (allButtons[0].className === playerButton && 
        allButtons[3].className === playerButton && 
        allButtons[6].className === playerButton) {
            turnBanner.textContent = winText;
            for (i = 0; i < allButtons.length; i++) {
                allButtons[i].removeEventListener("click", handleClick);
            }

            if (player === "x") {
                xScore.textContent = Number(xScore.textContent) + 1
                animateRyuTatsu()
                animateKenBlock()
                return

                } else if (player === "o")
                oScore.textContent = Number(oScore.textContent) + 1
                animateRyuBlock()
                animateKenTatsu()
                return

    }
//5
    if (allButtons[1].className === playerButton && 
        allButtons[4].className === playerButton && 
        allButtons[7].className === playerButton) {
            turnBanner.textContent = winText;
            for (i = 0; i < allButtons.length; i++) {
                allButtons[i].removeEventListener("click", handleClick);
            }

            if (player === "x") {
                xScore.textContent = Number(xScore.textContent) + 1
                animateRyuKick()
                animateKenBlock()
                return

                } else if (player === "o")
                oScore.textContent = Number(oScore.textContent) + 1
                animateKenHadou()
                animateRyuBlock()
                return

        }
//6    
    if (allButtons[2].className === playerButton && 
        allButtons[5].className === playerButton && 
        allButtons[8].className === playerButton) {
            turnBanner.textContent = winText;
            for (i = 0; i < allButtons.length; i++) {
                allButtons[i].removeEventListener("click", handleClick);
            }

            if (player === "x") {
                xScore.textContent = Number(xScore.textContent) + 1
                animateRyuKick();
                animateKenBlock();
                return

                } else if (player === "o")
                oScore.textContent = Number(oScore.textContent) + 1
                animateKenShoryuken();
                animateRyuBlock();
                return

        }
//7
    if (allButtons[0].className === playerButton && 
        allButtons[4].className === playerButton && 
        allButtons[8].className === playerButton) {
            turnBanner.textContent = winText;
            for (i = 0; i < allButtons.length; i++) {
                allButtons[i].removeEventListener("click", handleClick);
            }

            if (player === "x") {
                xScore.textContent = Number(xScore.textContent) + 1
                animateRyuTatsu()
                animateKenBlock()
                return

                } else if (player === "o")
                oScore.textContent = Number(oScore.textContent) + 1
                animateRyuBlock()
                animateKenTatsu()
                return

            console.log("POTATO");
        }
//8
    if (allButtons[2].className === playerButton && 
        allButtons[4].className === playerButton && 
        allButtons[6].className === playerButton) {
            turnBanner.textContent = winText;
            for (i = 0; i < allButtons.length; i++) {
                allButtons[i].removeEventListener("click", handleClick);
            }

            if (player === "x") {
                xScore.textContent = Number(xScore.textContent) + 1
                animateRyuKick()
                animateKenBlock()
                return

                } else if (player === "o")
                oScore.textContent = Number(oScore.textContent) + 1
                animateKenHadou()
                animateRyuBlock()
                return
        }

        // allButtons.forEach(function(element) {
        //     (element).className !== "button"
        //   });
     
    else if (allButtons[0].className !== "button" &&
        allButtons[1].className !== "button" &&
        allButtons[2].className !== "button" &&
        allButtons[3].className !== "button" &&
        allButtons[4].className !== "button" &&
        allButtons[5].className !== "button" &&
        allButtons[6].className !== "button" &&
        allButtons[7].className !== "button" &&
        allButtons[8].className !== "button") {
            // CREATE AN IF STATEMENT FOR EACH WIN CONDITION AND RETURN.
            // COULD SEPERATE DRAW FUNCTION TO RETURN.
            // removeEventListeners on win
            turnBanner.textContent = "DRAW"
        }   //If win condition is not CheckWinOrDraw then it's a draw
}

        // Then X wins

        // document.querySelector(".turnbanner").textContent = "X WINS"

// are all id #xturn or #oturn

//BOOLEAN IF THE GAME IS STILL RUNNING
//EG. IF WIN CONDITION MET === TRUE - PAUSE ALL DIV EVENT LISTENERS?
//
//I HAVE A FUNCTION LOOP TO CHECK WIN CONDITION



// Animate characters

// KEN

var kenStance = document.querySelector(".stance")
var kenShoryuken = "blob:https://giphy.com/5f4066a2-23e6-417a-a17e-9c96e3f9dc48"
var kenTatsu = "https://media2.giphy.com/media/3ka2vcihsvnEXbTJUa/giphy.gif?cid=790b7611dbb4b258d48832a6b8124f2b7b549cde7cc4c9fd&rid=giphy.gif&ct=s"
var kenHadou = "https://media0.giphy.com/media/c9rZZJCE3tNUNwB51k/giphy.gif?cid=790b7611570d4b5dc34c593635a6f171bddbd41c549f8c11&rid=giphy.gif&ct=s"
var kenBlock = "https://media0.giphy.com/media/Toykt4iRJpuFBSothA/giphy.gif?cid=790b76111b2928a0f5b2c730e5f4f857aced2042fb204a1c&rid=giphy.gif&ct=s"
kenStance.src = "https://media4.giphy.com/media/1EUYUXmNtqXvMflSUa/giphy.gif?cid=790b7611ccc03c9ca72821f1229202e6be5d02c6729893e4&rid=giphy.gif&ct=s"

function animateKenShoryuken () {
    kenStance.src = kenShoryuKen
    setTimeout(KenReturnToStance, 1000);
}
function animateKenTatsu () {
    kenStance.src = kenTatsu
    setTimeout(KenReturnToStance, 1000);
}

function animateKenHadou () {
    // kenStance = document.querySelector("stance")
    // kenTatsu = document.querySelector("tatsu")
    kenStance.src = kenHadou
    setTimeout(KenReturnToStance, 1000);
}
function animateKenBlock () {
    kenStance.src = kenBlock
    setTimeout(KenReturnToStance, 1000);
}

function KenReturnToStance () {
    kenStance.src = "https://media4.giphy.com/media/1EUYUXmNtqXvMflSUa/giphy.gif?cid=790b7611ccc03c9ca72821f1229202e6be5d02c6729893e4&rid=giphy.gif&ct=s"
}


/// Now lets animate RYU

var ryuStance = document.querySelector(".ryustance")

var ryuTatsu = "https://www.fightersgeneration.com/characters3/ryu-hurricane-ts.gif"
var ryuStancePose = "https://www.fightersgeneration.com/characters3/ryu-ts-stance.gif"
var ryuKick = "https://www.fightersgeneration.com/characters3/ryu-hk.gif"
var ryuBlock = "https://www.fightersgeneration.com/characters3/ryu-stand-hit.gif"

function RyuReturnToStance () {
    ryuStance.src = ryuStancePose
}

function animateRyuBlock () {
    ryuStance.src = ryuBlock
    setTimeout(RyuReturnToStance, 1000);
}

function animateRyuTatsu () {
    ryuStance.src = ryuTatsu
    setTimeout(RyuReturnToStance, 1000);
}

function animateRyuKick () {
    ryuStance.src = ryuKick;
    setTimeout(RyuReturnToStance, 1000);
}