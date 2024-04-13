# Dogs-vs.-Cats
A game of tic-tac-toe with a coin toss to decide who starts the game off.

UPDATE:
Currently, the 2 player version when player 1 loses the coin toss, is not working & the 4x4 board for 2 player is not working. Will come back to later. 

# 


#### Technologies used: 👩‍💻
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![Flickr Badge](https://img.shields.io/badge/Flickr-0063DC?logo=flickr&logoColor=fff&style=for-the-badge)
![Adobe Fonts Badge](https://img.shields.io/badge/Adobe%20Fonts-000B1D?logo=adobefonts&logoColor=fff&style=for-the-badge)
![Instagram Badge](https://img.shields.io/badge/Instagram-E4405F?logo=instagram&logoColor=fff&style=for-the-badge)

#

<div align="center">
<a href="https://dogsvscats.netlify.app"><img src="/other/Screenshot 2024-03-09 at 10.04.14 AM.png" height="400"></a>
</div>

<div align="center">
Click the image above to be directed to Dogs vs. Cats!. :point_up_2:
</div>

#

  
<details> 
<summary>Instructions:</summary>

### Game Setup

1. Choose the number of players:
   - One player
   - Two players

2. Choose the board size:
   - Regular 3x3 board
   - Large 4x4 board

3. Enter your username:

### Coin Toss

4. A coin toss will determine who goes first:
   - Player one chooses heads or tails.

   If heads, player one moves first with the dog character.
   If tails, player one plays second with the cat character.

### Game Board

5. Click on an empty box to place your character.

6. The first player to get 3 (on 3x3 board) or 4 (on 4x4 board) in a row wins!

### Have Fun!

Enjoy the game and may the best player win! 
</details>

#


### Deployed Link 🔗
<a href="https://dogsvscats.netlify.app"> Dogs Vs. Cats</a> 

#

<details> 
 <summary> Challenges & Unsolved Problems: </summary>
    <li>In one player mode, depending on who wins the coin toss, sometimes the computer does not automatically play.</li>
   <li>Problems with 4x4 game functionality.</li>
   <li>I faced numerous challenges with my game and tried making a whole new version. In the second version, the 4x4 functionality works, but I ran out of time trying to fix a problem with updating the scoreboard, so I went back to my original game.</li>
 </details>

#


<details> 
 <summary> ❓ Future Features </summary>
  Next steps planned: 
   <li>Make 4x4 game functionality work.</li>
   <li>Fix problems/challenges faced in one player mode</li>
   <li> Building the puzzle as part of keeping score and to win the tournament </li>
   <li>Giving the game an easy, medium, and hard choice for when playing against the computer.</li>
   <li>Use an API and/or try Firebase.</li>
   <li>Implement responsive design.</li>
</details>

#

<details>
 <summary> 🎨 Wire Frames </summary>
   <details> 
    <summary> ✏️ Dogs Vs. Cats </summary>
        <img src="/other/Dogs_vs_Cats_Wireframe.jpg">
   </details>
</details>

#

<details>
<summary>Page View: Coin Toss</summary>
<img src="/other/Screenshot 2024-03-09 at 9.57.16 AM.png" alt="Coin toss preview image">
</details>

#

<details> 
<summary> User Stories:</summary>
 <ul> 
  <li> As a friend, I want to view Jena's ideas for this game come to life, so that I can know she is learning and achieving goals.</li>
  <li> As a player, I want to see my score on the scoreboard, so that I can know how many games I have won.</li>
  <li>As a player, I want to win the coin toss, so that I can play the dog character.</li>
 </ul>
</details>

#
<details> 
<summary> Approach </summary>
 <ul> 
  <li>I started with the HTML structure, adding modals, buttons, and the game board.</li>
  <li>I then applied CSS styling. I created the game board grid structure.</li>
  <li>The game logic is implemented in JavaScript.</li>
  <li>I used event listeners for buttons, input, and making moves on the board. I collected player names and choices for one or two players, as well as the board size. I used HTML elements to create and update the game board dynamically. I created functionality to reset the coin toss, restart the game, and reset the entire page</li>
  <li>I implemented a coin toss, allowing players to choose heads or tails. The result is determined randomly, and the game state is updated accordingly.</li>
  <li>I defined winning combinations and implemented a function to check for a winner or a tie after each move.</li>
  <li>Scores for each player are tracked, and I implemented a function to update the scoreboard based on the game state. </li>
  <li>For one-player games, I created a function to simulate the computer making a move after the player's move. </li>
  <li>The user interface is updated dynamically based on the game state, with messages displayed for coin toss results, game outcomes, and tie situations.</li>
 </ul>
</details>

#

I made this game to practice my JavaScript skills and chose this game because I felt like it was something id be able to understand and added some of my own flair by using images of my dog and of a cat.


