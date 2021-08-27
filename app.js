var allButtons = document.querySelectorAll(".button");
var turnBanner = document.querySelector(".turnbanner");
var resetButton = document.querySelector(".resetButton");
var resetScores = document.querySelector(".resetscores")
var playerOneName = document.querySelector(".playerone")
var playerTwoName = document.querySelector(".playertwo")

turnBanner.textContent = playerOneName.textContent + "'s turn";

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
        turnBanner.textContent = playerOneName.textContent + "'s turn";
        event.target.textContent = "X";
        event.target.style.backgroundImage = cat // IMAGE BACKGROUND DOESN'T WORK
        event.target.className = "xturn button";
        turnCounter = turnCounter + 1;
        checkWinConditions("x");
        
    } else if (turnCounter % 2 !== 0) {
        turnBanner.textContent = playerTwoName.textContent + "'s turn";
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
    xScore.textContent = 0;
    oScore.textContent = 0;
    document.querySelector("#ryuhealth").value = 100
    document.querySelector("#kenhealth").value = 100
    
    // To reset player turn display
    turnBanner.textContent = playerOneName.textContent + "'s turn"

    // Restore reset button to default
    resetButton.addEventListener("click", clickReset);
    resetButton.style.opacity = 1

    //Reset player positions
    kenStance.src = "https://media4.giphy.com/media/1EUYUXmNtqXvMflSUa/giphy.gif?cid=790b7611ccc03c9ca72821f1229202e6be5d02c6729893e4&rid=giphy.gif&ct=s"
    ryuStance.src = "https://www.fightersgeneration.com/characters3/ryu-ts-stance.gif"

    // Reset New Game button to stop blinking
    resetScores.className = "resetscores"
}

function gameWon () {
    resetScores.className = "resetscores animate__heartBeat"
    resetScores.style.webkitAnimationIterationCount = "infinite"
}

// Player one name
function clickPlayerOneName () {
    var namePrompt = prompt("Insert Player I Name");
    playerOneName.textContent = namePrompt;
    if (playerOneName.textContent === "") {
        playerOneName.textContent = "Fine then be boring"
    }
    turnBanner.textContent = namePrompt + "'s turn"

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

    if (player === "x") {
        winText = playerOneName.textContent.toUpperCase() + " WINS!";
    } else {
        winText = playerTwoName.textContent.toUpperCase() + " WINS!";
}



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
            tatsuSound.play();
            kenHealth.value -= 20;
            

            if (kenHealth.value === 0) {
                loseSound.play();
                animateKenLose ();
                resetButton.removeEventListener("click", clickReset);
                resetButton.style.opacity = 0.1
                setTimeout(animateRyuVictory, 3500)
                setTimeout(youWinSound, 3000)
                gameWon ()
                
            }
            return
            } else if (player === "o")
            
            oScore.textContent = Number(oScore.textContent) + 1
            animateRyuBlock()
            animateKenTatsu()
            tatsuSound.play();
            ryuHealth.value -= 20;

            
            if (ryuHealth.value === 0) {
                loseSound.play();
                animateRyuLose ();
                resetButton.removeEventListener("click", clickReset);
                resetButton.style.opacity = 0.1
                setTimeout(animateKenVictory, 3000)
                setTimeout(youWinSound, 3000)
                gameWon ()

            }
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
                hitSound.play();
                kenHealth.value -= 20;

                if (kenHealth.value === 0) {
                    animateKenLose ();
                    loseSound.play();
                    resetButton.removeEventListener("click", clickReset);
                    resetButton.style.opacity = 0.1
                    setTimeout(animateRyuVictory, 3500)
                    setTimeout(youWinSound, 3000)
                    gameWon ()
                }
                return

                } else if (player === "o")
                oScore.textContent = Number(oScore.textContent) + 1
                animateKenHadou()
                hadoukenSound.play();
                animateRyuBlock()
                ryuHealth.value -= 20;
                
                if (ryuHealth.value === 0) {
                    loseSound.play();
                    animateRyuLose ();
                    resetButton.removeEventListener("click", clickReset);
                    resetButton.style.opacity = 0.1
                    setTimeout(animateKenVictory, 3000)
                    setTimeout(youWinSound, 3000)
                    gameWon ();
                }
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
                animateRyuPunch();
                hitSound.play();
                animateKenBlock();
                kenHealth.value -= 20;

                if (kenHealth.value === 0) {
                    animateKenLose ();
                    loseSound.play();
                    resetButton.removeEventListener("click", clickReset);
                    resetButton.style.opacity = 0.1
                    setTimeout(animateRyuVictory, 3500)
                    setTimeout(youWinSound, 3000)
                    gameWon ()
                }

                return
                } else if (player === "o")
                oScore.textContent = Number(oScore.textContent) + 1
                animateKenKick();
                hitSound.play();
                hitSound.play();
                animateRyuBlock();
                ryuHealth.value -= 20;

                if (ryuHealth.value === 0) {
                    loseSound.play();
                    animateRyuLose ();
                    resetButton.removeEventListener("click", clickReset);
                    resetButton.style.opacity = 0.1
                    setTimeout(animateKenVictory, 3000)
                    setTimeout(youWinSound, 3000)
                    gameWon ()
                }
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
                kenHealth.value -= 20;
                tatsuSound.play();

                if (kenHealth.value === 0) {
                    animateKenLose ();
                    loseSound.play();
                    resetButton.removeEventListener("click", clickReset);
                    resetButton.style.opacity = 0.1
                    setTimeout(animateRyuVictory, 3500)
                    setTimeout(youWinSound, 3000)
                    gameWon ()
                }

                return

                } else if (player === "o")
                oScore.textContent = Number(oScore.textContent) + 1
                animateRyuBlock()
                animateKenTatsu()
                tatsuSound.play();
                ryuHealth.value -= 20;


                if (ryuHealth.value === 0) {
                    loseSound.play();
                    animateRyuLose ();
                    resetButton.removeEventListener("click", clickReset);
                    resetButton.style.opacity = 0.1
                    setTimeout(animateKenVictory, 3000)
                    setTimeout(youWinSound, 3000)
                    gameWon ()
                }
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
                hitSound.play();
                animateKenBlock()
                kenHealth.value -= 20;

                if (kenHealth.value === 0) {
                    animateKenLose ();
                    loseSound.play();
                    resetButton.removeEventListener("click", clickReset);
                    resetButton.style.opacity = 0.1
                    setTimeout(animateRyuVictory, 3500)
                    setTimeout(youWinSound, 3000)
                    gameWon ()
                }

                return

                } else if (player === "o")
                oScore.textContent = Number(oScore.textContent) + 1
                animateKenHadou()
                hadoukenSound.play();
                animateRyuBlock()
                ryuHealth.value -= 20;

                if (ryuHealth.value === 0) {
                    loseSound.play();
                    animateRyuLose ();
                    resetButton.removeEventListener("click", clickReset);
                    resetButton.style.opacity = 0.1
                    setTimeout(animateKenVictory, 3000)
                    setTimeout(youWinSound, 3000)
                    gameWon ()
                }
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
                animateRyuPunch();
                hitSound.play();
                animateKenBlock();
                kenHealth.value -= 20;

                if (kenHealth.value === 0) {
                    animateKenLose ();
                    loseSound.play();
                    resetButton.removeEventListener("click", clickReset);
                    resetButton.style.opacity = 0.1
                    setTimeout(animateRyuVictory, 3500)
                    setTimeout(youWinSound, 3000)
                    gameWon ()
                }

                return

                } else if (player === "o")
                oScore.textContent = Number(oScore.textContent) + 1
                animateKenKick();
                hitSound.play();
                hitSound.play();
                animateRyuBlock();
                ryuHealth.value -= 20;

                if (ryuHealth.value === 0) {
                    loseSound.play();
                    animateRyuLose ();
                    resetButton.removeEventListener("click", clickReset);
                    resetButton.style.opacity = 0.1
                    setTimeout(animateKenVictory, 3000)
                    setTimeout(youWinSound, 3000)
                    gameWon ()
                }
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
                tatsuSound.play();
                kenHealth.value -= 20;

                if (kenHealth.value === 0) {
                    animateKenLose ();
                    loseSound.play();
                    resetButton.removeEventListener("click", clickReset);
                    resetButton.style.opacity = 0.1
                    setTimeout(animateRyuVictory, 3500)
                    setTimeout(youWinSound, 3000)
                    gameWon ()
                }

                return

                } else if (player === "o")
                oScore.textContent = Number(oScore.textContent) + 1
                animateRyuBlock()
                animateKenTatsu()
                tatsuSound.play();
                ryuHealth.value -= 20;

                if (ryuHealth.value === 0) {
                    loseSound.play();
                    animateRyuLose ();
                    resetButton.removeEventListener("click", clickReset);
                    resetButton.style.opacity = 0.1
                    setTimeout(animateKenVictory, 3000)
                    setTimeout(youWinSound, 3000)
                    gameWon ()
                }
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
                hitSound.play();
                animateKenBlock()
                kenHealth.value -= 20;

                if (kenHealth.value === 0) {
                    loseSound.play();
                    animateKenLose ();
                    resetButton.removeEventListener("click", clickReset);
                    resetButton.style.opacity = 0.1
                    setTimeout(animateRyuVictory, 3500)
                    setTimeout(youWinSound, 3000)
                    gameWon ()
                }

                return

                } else if (player === "o")
                oScore.textContent = Number(oScore.textContent) + 1
                animateKenHadou()
                hadoukenSound.play();
                animateRyuBlock()
                ryuHealth.value -= 20;

                if (ryuHealth.value === 0) {
                    loseSound.play();
                    animateRyuLose ();
                    resetButton.removeEventListener("click", clickReset);
                    resetButton.style.opacity = 0.1
                    setTimeout(animateKenVictory, 3000)
                    setTimeout(youWinSound, 3000)
                    gameWon () 
                }
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
var kenShoryuken = "https://media3.giphy.com/media/sajIWfnJjLIM3IwMZB/giphy.gif?cid=790b761190dc2a14f751b95862926242f9dd34d880e68dae&rid=giphy.gif&ct=s"
var kenKnockdown = "https://media0.giphy.com/media/8pezita2MmJjORhUSb/giphy.gif?cid=790b76112164463c2bc5f26d5bcf185a9c1d2f42fb0c912a&rid=giphy.gif&ct=s"
var kenKick = "https://media3.giphy.com/media/sajIWfnJjLIM3IwMZB/giphy.gif?cid=790b761190dc2a14f751b95862926242f9dd34d880e68dae&rid=giphy.gif&ct=s"
var kenTatsu = "https://media2.giphy.com/media/3ka2vcihsvnEXbTJUa/giphy.gif?cid=790b7611dbb4b258d48832a6b8124f2b7b549cde7cc4c9fd&rid=giphy.gif&ct=s"
var kenHadou = "https://media0.giphy.com/media/c9rZZJCE3tNUNwB51k/giphy.gif?cid=790b7611570d4b5dc34c593635a6f171bddbd41c549f8c11&rid=giphy.gif&ct=s"
var kenBlock = "https://media4.giphy.com/media/h35INmeBG4B0jDYi0u/giphy.gif?cid=790b761154c35e9fd4e77a535bbca72608b1c2c61334c473&rid=giphy.gif&ct=s"
var kenVictory = "kenvictory.gif"
var kenWinPose = "kenwinpose.gif"
kenStance.src = "https://media4.giphy.com/media/1EUYUXmNtqXvMflSUa/giphy.gif?cid=790b7611ccc03c9ca72821f1229202e6be5d02c6729893e4&rid=giphy.gif&ct=s"



function animateKenVictory () {
    kenStance.src = kenVictory
    // setTimeout(kenWins, 1500);
}

function kenWins () {
    kenStance.src = kenWinPose
}

function animateKenLose () {
    kenStance.src = kenKnockdown
    setTimeout(kenLoseKO, 1000);
}

function kenLoseKO () {

    kenStance.src = "kenlose.gif"
}

function animateKenShoryuken () {
    kenStance.src = kenShoryuKen
    setTimeout(KenReturnToStance, 950);
}

function animateKenKick () {
    kenStance.src = kenKick
    setTimeout(KenReturnToStance, 600);
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

var ryuVictory = "ryuvictory.gif"
var ryuKnockdown = "https://www.fightersgeneration.com/characters3/ryu-slam.gif"
var ryuTatsu = "https://www.fightersgeneration.com/characters3/ryu-hurricane-ts.gif"
var ryuStancePose = "https://www.fightersgeneration.com/characters3/ryu-ts-stance.gif"
var ryuKick = "https://www.fightersgeneration.com/characters3/ryu-hk.gif"
var ryuBlock = "https://www.fightersgeneration.com/characters3/ryu-stand-hit.gif"
var ryuPunch = "https://www.fightersgeneration.com/characters3/ryu-fmp.gif"


function animateRyuVictory () {
    ryuStance.src = ryuVictory;
}

function ryuWins () {
    ryuStance.src = ryuVictory;
}

function animateRyuLose () {
    ryuStance.src = ryuKnockdown
    setTimeout(ryuLoseKO, 1000);
}

function ryuLoseKO () {

    ryuStance.src = "ryulose.gif"
}

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

function animateRyuPunch () {
    ryuStance.src = ryuPunch;
    setTimeout(RyuReturnToStance, 600);
}

//
//
//
//RYU HEALTH
let ryuHealth = document.getElementById("ryuhealth")
// ryuHealth.value -= 20; //Or whatever you want to do with it.

//KEN HEALTH
let kenHealth = document.getElementById("kenhealth")
// kenHealth.value -= 20; //Or whatever you want to do with it.

//// AUDIO SNIPPER
var loseSound = new Audio("lose.mp3")
loseSound.volume = 0.1;
//loseSound.play();

var hadoukenSound = new Audio("hadouken.wav")
hadoukenSound.volume = 0.1;
// hadoukenSound.play();

var hitSound = new Audio("hit.mp3")
hitSound.volume = 0.1;
// hitSound.play();

var tatsuSound = new Audio("tatsu.wav")
tatsuSound.volume = 0.1;
// tatsuSound.play();

var musicSound = new Audio("win.mp3")
musicSound.volume = 0.1;
// musicSound.play();

var youWin = new Audio("youwin.wav")
youWin.volume = 0.1;
// youWin.play();

function youWinSound () {
    youWin.play();
}

// Add event listener for music
var musicButton = document.querySelector(".musicbutton")
musicButton.addEventListener("click", playMusic)

function playMusic () {
    if (musicSound.paused === true) {
        musicSound.play();
        musicButton.textContent = "music: on"
    }else if (musicSound.paused === false) {
        musicSound.pause();
        musicButton.textContent = "music: off"
    }
}

