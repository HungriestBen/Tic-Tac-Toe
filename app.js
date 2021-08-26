var allButtons = document.querySelectorAll(".button");
var turnBanner = document.querySelector(".turnbanner")
var resetButton = document.querySelector(".resetButton")
//How to determine player turn
//Odd and even numbers?

var turnCounter = 0
//If turnCounter is odd display O
//Else if turnCounter is even display X


// for (number = 0; number <= 20; number = number + 1) {
//     if (number % 2 === 0) {
//     console.log(number + " is even")
// }   else (number % 2 !== 0)
//     console.log(number + " is odd")
// }



//Create add listeners for each box
for (i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", handleClick);
}
//Create add listener for reset button
resetButton.addEventListener("click", clickReset);
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


//Function for all buttons
function handleClick (event) {
    if (event.target.textContent !== "") {
        return;
    }
    if (turnCounter % 2 === 0) {
        turnBanner.textContent = "It is O's turn";
        event.target.textContent = "X";
        event.target.className = "xturn button";
        turnCounter = turnCounter + 1;
        checkWinConditions("x");
        
    } else if (turnCounter % 2 !== 0) {
        turnBanner.textContent = "It is X's turn";
        event.target.textContent = "O";
        event.target.className = "oturn button";
        turnCounter = turnCounter - 1;
        checkWinConditions("o");
    }
}
// NOW TO DO WIN CONDITIONS ZZZZ
// If 3 in a row on grid...win
// Should i name the divs number eg. if div 1+2+3 = win
// or 1+ 5+ 3 wins too, like a numpad.

/////////
// winCondition1 = 

//Win condition function....
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
            console.log("POTATO");
    } 
//2
    if (allButtons[3].className === playerButton && 
        allButtons[4].className === playerButton && 
        allButtons[5].className === playerButton) {
            turnBanner.textContent = winText;
            for (i = 0; i < allButtons.length; i++) {
                allButtons[i].removeEventListener("click", handleClick);
            }
            console.log("POTATO");
    }
//3
    if (allButtons[6].className === playerButton && 
        allButtons[7].className === playerButton && 
        allButtons[8].className === playerButton) {
            turnBanner.textContent = winText;
            for (i = 0; i < allButtons.length; i++) {
                allButtons[i].removeEventListener("click", handleClick);
            }
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
            console.log("POTATO");
    }
//5
    if (allButtons[1].className === playerButton && 
        allButtons[4].className === playerButton && 
        allButtons[7].className === playerButton) {
            turnBanner.textContent = winText;
            for (i = 0; i < allButtons.length; i++) {
                allButtons[i].removeEventListener("click", handleClick);
            }
            console.log("POTATO");
        }
//6    
    if (allButtons[2].className === playerButton && 
        allButtons[5].className === playerButton && 
        allButtons[8].className === playerButton) {
            turnBanner.textContent = winText;
            for (i = 0; i < allButtons.length; i++) {
                allButtons[i].removeEventListener("click", handleClick);
            }
            console.log("POTATO");
        }
//7
    if (allButtons[0].className === playerButton && 
        allButtons[4].className === playerButton && 
        allButtons[8].className === playerButton) {
            turnBanner.textContent = winText;
            for (i = 0; i < allButtons.length; i++) {
                allButtons[i].removeEventListener("click", handleClick);
            }
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
            console.log("POTATO");
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


    function checkWinOrDraw () {
        checkWinConditions("x");
        checkWinConditions("o");
    }
        // Then X wins

        // document.querySelector(".turnbanner").textContent = "X WINS"

// are all id #xturn or #oturn

//BOOLEAN IF THE GAME IS STILL RUNNING
//EG. IF WIN CONDITION MET === TRUE - PAUSE ALL DIV EVENT LISTENERS?
//
//I HAVE A FUNCTION LOOP TO CHECK WIN CONDITION