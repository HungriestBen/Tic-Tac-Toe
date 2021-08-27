READ ME
-------
TIC TAC TOE Game Below Yo

https://hungriestben.github.io/Tic-Tac-Toe/

===========================================

Created using HTML, CSS, and Javascript
With animations from https://animate.style/ (AKA animate.css)

===========================================

First approach was to learn and figure out the basics of the TIC TAC TOE game.
Wherein a player picks a side; X or O and alternate turns with another player. 
The aim or win condition is to get 3 of your symbols in a row within a 3x3 grid.

SEE WHO'S THE BETTER PLAYER

 the approach taken, installation instructions, unsolved problems, etc.

After understanding the layout of the game i drew a sketch to determine the layout of how i wanted my website to look.
Then went over the rules of what was needed to program and wrote down some conditions that came to mind.

<>
Give interaction to all boxes in the boardgrid to select inputs.
Players take turns
Display whose turn it is

Possible outcomes
WIN/LOSE/DRAW
If a winner is determined, the boxes will no longer be clicked.

The route i went of determining a winner, is mapping out the board game grid as follows:
Each numbered box was given the same class. To create one array of all the buttons.

-------------------
|  0  |  1  |  2  |
-------------------
|  3  |  4  |  5  |
-------------------
|  6  |  7  |  8  |
-------------------

eg. If X lands on 1, 2 and 3 they win.

If X landed on 1, 2, 3 
The class names would be changed to either xturn or oturn and would look like this:
-----
X landed on 0, 1, 2 on the board,
O landed on 3 and 4


0: div.xturn.button
1: div.xturn.button
2: div.xturn.button
3: div.oturn.button
4: div.oturn.button
5: div.button
6: div.button
7: div.button
8: div.button

After each input from a player, it would run through a function of a list of win conditions to check if the player had in fact won.
If there were no players by the end of the game it would run through the same win function but if none of the win functions work, it would move onto an else statement and display DRAW.

-----

Iterations to be worked on as of 26/8/21
AKA UPCOMING CHANGES 
-----
Player names added 
Player win count score tally
Stylize the page better
Have an animation on win


UPDATE 27/8/21
-----
Player names added - DONE
Player win count score tally - DONE
Stylize the page better - STILL NEEDS WORK


Upcoming changes
Have an animation on win - STILL NOT DONE
Animate reset buttons after win outcome
Reset healh bars when scores are reset
Win message updates to player name

Structure and names are a bit off each time i added something
eg Reset Scores is now reset game but still reset score classes