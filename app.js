var allButtons = document.querySelectorAll(".button");
var button1 = document.querySelector(".input")
var turnBanner = document.querySelector(".turnbanner")
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


function handleClick (event) {
    if (turnCounter % 2 === 0) {
        turnBanner.textContent = "It is O's turn"
        event.target.textContent = "X"
        event.target.id = "xturn"
        turnCounter = turnCounter + 1
        
    } else if (turnCounter % 2 !== 0) {
        turnBanner.textContent = "It is X's turn"
        event.target.textContent = "O"
        event.target.id = "oturn"
        turnCounter = turnCounter - 1
    }
}
// NOW TO DO WIN CONDITIONS ZZZZ
// If 3 in a row on grid...win
// Should i name the divs number eg. if div 1+2+3 = win
// or 1+ 5+ 3 wins too, like a numpad.

/////////
winCondition1 = 
if (document.querySelectorAll(".button")[0]) === "xturn"
&& (document.querySelectorAll(".button")[1]) === "xturn"
&& (document.querySelectorAll(".button")[2]) === "xturn"

        // Then X wins

        document.querySelector(".turnbanner").textContent = "X WINS"





// are all id #xturn or #oturn