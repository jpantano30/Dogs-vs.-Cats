        // Variables // 

// // used to display instructions and collect user names
// const modal1 = document.getElementById('modal')
// const modal2 = document.getElementById('modal2')
// const modal3 = document.getElementById('modal3')
// const modal4 = document.getElementById('modal4')

// opening and closing the instruction modals
const instructionsBtn2 = document.querySelectorAll('.instructionsBtns')
const closeInstructions2 = document.querySelectorAll('.close-instr')


// one or two player game buttons 
// const onePlayerBtn = document.getElementById('onePlayer')
// const twoPlayerBtn = document.getElementById('twoPlayer')

// // 3x3 or 4x4 size board btns 
// const threeBtn = document.getElementById('three')
// const fourBtn = document.getElementById('four')

// username modals - input elements for entering player names 
let player1Name2 = document.getElementById('insrtname1')
let player2Name2 = document.getElementById('insrtname2')

// // Get player names and display on scoreboard
const playerOneScoreBoard2 = document.getElementById('plone')
const playerTwoScoreBoard2 = document.getElementById('pltwo')

// const usernameDiv = document.getElementById('username')

// // initalize variable to track which side the user picked (heads or tails)
// let chosenSide = ''

// // coin toss 
// let randomResult
// let coinTossResult
 
// const coin = document.getElementById('coin')
// const result = document.getElementById('result')
// const headsBtn = document.getElementById('headsBtn')
// const tailsBtn = document.getElementById('tailsBtn')

// variable to track if its a one player game 
let onePlayerGame2 = false

// game results scoreboard variables 
const pOneWins2 = document.querySelector('#p1wins h1')
const pTwoWins2 = document.querySelector('#p2wins h1')
const ties2 = document.querySelector('#ties h1')

// game results below the board & restart
const resMsg2 = document.querySelector('#gameovermsg')
const restart2 = document.getElementById('restart')

// // object to store players image for their characters 
const LOOKUP2 = {
  '1': '/other/PaisleyFace1.png', 
  '-1':'/other/cat2.png'
}

// array of winning combinations on the 3x3 board 
const winningCombos4x4 = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [0, 5, 10, 15],
  [3, 6, 9, 12],
]

// variables initialized for game state 
let board2 
let turn2
let winner2
let playerOneScore2 = 0
let playerTwoScore2 = 0
let tie2 = 0
let boardSize = 4

// game board 
const gameBoard = document.getElementById('game-board2')

                     // EVENT LISTENERS // 


// headsBtn.addEventListener('click', () => chooseSide('heads'))
// tailsBtn.addEventListener('click', () => chooseSide('tails'))

// document.getElementById('btnFlip').addEventListener('click', flipCoin)
// document.getElementById('playGameBtn').addEventListener('click', () => {
//   chooseBoardSize()
// }) 

// // changes the modal 3 to only allow input for 1 player and changes oneplayer game to true when pressed 
// onePlayerBtn.addEventListener('click', () => {
//   const label2 = document.querySelector('label[for="insrtname2"]')
//   const input2 = document.getElementById('insrtname2')
//   label2.style.display = 'none'
//   input2.style.display = 'none'
//   onePlayerGame2 = true
// })
// fourBtn.addEventListener('click', () => {
//   boardSize = 4
// })
// threeBtn.addEventListener('click', () => {
//   boardSize = 3
// })

// // continue buttons modals 
// document.getElementById('cont-1').addEventListener('click', () => {
//   modal1.style.display = 'none'
//   modal2.style.display = 'block'
// })

// document.getElementById('cont-2').addEventListener('click', () => {
//   modal2.style.display = 'none'
//   modal3.style.display = 'block'
// })

// document.getElementById('cont-3').addEventListener('click', () => { 
//   modal3.style.display = 'none'
//   modal4.style.display = 'block'
//   let player1 = document.getElementById('insrtname1').value
//   document.getElementById('inputname').innerText = player1
// })

// open and close intructions buttons 
instructionsBtn2.forEach(btn => {
  btn.addEventListener('click', () => {
    // modal1.style.display = 'flex'
    // modal2.style.display = 'none' 
    // modal3.style.display = 'none' 
    // modal4.style.display = 'none'
    // resetCoinBox()
    // resetUsernameDiv()
    document.getElementById('inputname').innerText = 'name'
  })
})



// reset game
document.querySelectorAll('#resetPage').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.reload()
  })
})

// reset the coin toss box back to both coins showing
// document.getElementById('resetCoinToss').addEventListener('click', resetCoinBox)

gameBoard.addEventListener('click', handleClick)
restart2.addEventListener('click', () => {
  init()
  if (onePlayerGame2) {
  console.log(coinTossResult)
    if (coinTossResult !== chosenSide){
      makeComputerMove()
    }
  }
})

                        // FUNCTIONS // 

// choose board size 
function chooseBoardSize() {
  if (boardSize === 4) {
    // Redirect to a different HTML page
    window.location.href = '/4x4/four.html'
  } else if (boardSize === 3) {
    console.log('3x3 board size chosen')
    playGame()
  }
}

// // handles the users coin choice of heads or tails 
// function handleCoinChoice(event) {
//   const target = event.target
//   if (target.tagName === 'IMG') {
//     const side = target.alt
//     chooseSide(side)
//   }
// }

// // sets the chosen side for the coin tos 
// function chooseSide(side) {
//   chosenSide = side
//   result.innerText = ''
//   const coinChoiceBtns = document.getElementById('coin-choice-btns')
//   coinChoiceBtns.innerHTML = `<button class="coinBtn" id="${side}Btn"><img class="coinImg" alt="${side}" id="${side}" src="/other/${side}.png"></button>`
// }

// // simulates coin flip animations and determines results 
// function flipCoin() {
//   console.log(chosenSide)

//   //if the user has not picked a side, alert them to do so.
//   if (chosenSide === '') {
//     alert('Please choose heads or tails before flipping.')
//     return
//   }
//   // array of src paths for heads and tails images
//   const sides = ['/other/heads.png', '/other/tails.png']

//   let currentTime = 0
//   const totalTime = 1000
  
//   const flipInterval = setInterval(() => {
//     // change the source of image between heads and tails 
//     coin.src = sides[Math.floor(currentTime / 100) % 2]

//     // increment currentTime by 100ms each interval
//     currentTime += 100 

//     // when currentTime reaches 1000ms... 
//     if (currentTime >= 1000) {
//       //stops the flip by changing current time to greater than total time of animation 
//       currentTime = totalTime + 1

//       // if the random number is less than 0.5, result = heads or if its greater than or equal to 0.5, result = tails.
//       if (Math.random() < 0.5) {
//         console.log('Random number is less than 0.5')
//         randomResult = 'heads'
//       } else {
//         console.log('Random number is greater than or equal to 0.5')
//         randomResult = 'tails'
//       }
//       coin.src = `/other/${randomResult}.png`

//       coinTossResult = randomResult

//       // displays a message indicating whether the user wins or loses based on their chosen side
//       if (randomResult === chosenSide) {
//         result.innerText = 'You won the toss! You move first with the dog character.'
//       } else {
//         result.innerText = 'You lost the toss! You play second with the cat character.'
//       }
//       //stops the interval
//       clearInterval(flipInterval)
//     }
//   }, 100)
// }

// initiates the game, handles player names, and triggers computer moves in one-player mode
function playGame() {
  console.log(chosenSide)
  
  let playerOne = player1Name2.value
  let playerTwo = player2Name2.value

  if (chosenSide === '') {
    alert('Please choose heads or tails before playing.')
    return
  }

  if (coinTossResult === chosenSide) {
    alert(`You won the toss! You move first with the dog character.`)
    if (!onePlayerGame2){
      playerOneScoreBoard2.innerText = playerOne
      playerTwoScoreBoard2.innerText = playerTwo
    } else if (onePlayerGame2) {
      playerOneScoreBoard2.innerText = playerOne
      playerTwoScoreBoard2.innerText = 'CAT'
    }

    // check if 1 player game and whose turn. Used setTimeout to slow down the random response for the computer
    if (onePlayerGame2 && turn22 === -1) {
      setTimeout(makeComputerMove, 500)
    }
  } else if (coinTossResult !== chosenSide) {
    console.log("Player 1 name:", playerOne)

    alert(`You lost the toss! You play second with the cat character.`)
    playerTwoScoreBoard2.innerText = playerOne

    if (!onePlayerGame2){
      playerOneScoreBoard2.innerText = playerTwo
    } else if (onePlayerGame2){
      // having a problem if i select 1 player cant play after the computer makes a move
      console.log("Player 1 name:", playerOne)
      playerOneScoreBoard2.innerText = 'DOG'
    }
    if (onePlayerGame2 && turn2 === 1) {
      console.log("Calling makeComputerMove after losing the toss")
      setTimeout(makeComputerMove, 500)
    }
  }

  modal4.style.display = 'none'
  document.body.style.backgroundImage = "url('/other/rainingcatsanddogs.jpg')"
  //https://www.flickr.com/photos/mateja-purgar/3958842873 
}

// // resets the coin toss 
// function resetCoinBox() {
//   const coinChoiceBtns = document.getElementById('coin-choice-btns')
//   coinChoiceBtns.innerHTML = `<button class="coinBtn" id="headsBtn"><img class="coinImg" alt="heads" id="heads" src="/other/heads.png"></button>
//   <button class="coinBtn" id="tailsBtn"><img class="coinImg" id="tails" alt="tails" src="/other/tails.png"></button>`
//   result.innerText = ''
//   chosenSide = ''
//   coinChoiceBtns.addEventListener('click', handleCoinChoice)
// }

// // resets the username input
// function resetUsernameDiv () {
//   const label2 = document.querySelector('label[for="insrtname2"]')
//   const input2 = document.getElementById('insrtname2')
//   label2.style.display = ''
//   input2.style.display = ''
// }


// resetCoinBox() and resetUsernameDiv() are called to initialize UI
// resetCoinBox()

init()

console.log('winner:', winner2)
//  initializes the tic-tac-toe game state
function init(){
  board2 = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  turn2 = 1
  winner2 = null
  render()
  resMsg2.style.display = 'none'
  resMsg2.innerText = ''
}

// handles player moves on the tic-tac-toe board
function handleClick(event){
  console.log('handleClick called')
  console.log('Turn before player move:', turn2)
  
  if (board2[parseInt(event.target.id)] !== null || winner2) {
    console.log("Invalid move:", event.target.id, "Current turn:", turn2)
    return
  }
 
  board2[parseInt(event.target.id)] = turn2
  winner2 = checkWinner(board2)
  render()
  console.log('winner:', winner2)

  // if one player game - computers turn - random move
  if (onePlayerGame2 && turn2 === -1 && !winner2) {
    console.log("Calling makeComputerMove after player's move")
    setTimeout(makeComputerMove, 500)
  }

  if (!winner2){
    turn2 *= -1
    console.log('Turn after player move:', turn2)
    console.log('winner:', winner2)
  }
}
console.log('winner:', winner2)
// makes a random move for the computer in one-player mode
function makeComputerMove() {
  console.log('makeComputerMove called')
  const emptySquares = board2.reduce((acc, val, index) => {
    if (val === null) acc.push(index)
    return acc
  }, [])
  console.log('Empty Squares:', emptySquares)

  if (emptySquares.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptySquares.length)
    const computerMove = emptySquares[randomIndex]
    board2[computerMove] = turn2
    turn2 *= -1 
    winner2 = checkWinner(board2)
    console.log('winner:', winner2)
    render()
    console.log('Turn after computer move:', turn2)
  }
}

// updates game based on the game state
// LOOKUP is used to map player values to their corresponding image paths
function render() {
  console.log('winner:', winner2)

  // const gameBoard = document.getElementById('game-board')


  // Loop through the board array and create grid items
  for (let i = 0; i < board2.length; i++) {
    // const gridItem = document.createElement('div')
    // gridItem.className = 'grid-item2'
    // gridItem.id = i.toString()

    // Set innerHTML based on the board value
    const gridItem = document.getElementById(i)
    gridItem.innerHTML = board2[i] ? `<img src="${LOOKUP2[board2[i]]}" alt="${LOOKUP2[board2[i]]}">` : ''

    // add the grid item to the game-board container
    gameBoard.appendChild(gridItem)
  }
  if (winner2 === 'Tie') {
    resMsg2.style.display = 'block'
    resMsg2.innerText = "It's a tie"
    ties2.innerText = tie2
  }
  if (winner2 === 1 || winner2 === -1) {
    resMsg2.style.display = 'none'
    resMsg2.innerText = `We have a WINNER!`
    pOneWins2.innerText = playerOneScore2
    pTwoWins2.innerText = playerTwoScore2
  }
}


// checks for a winning combination or a tie on the board
function checkWinner(board2) {
  for (let i = 0; i < winningCombos4x4.length; i++) {
    const sum = Math.abs(
      board2[winningCombos4x4[i][0]] +
      board2[winningCombos4x4[i][1]] +
      board2[winningCombos4x4[i][2]] +
      board2[winningCombos4x4[i][3]]
    )

    if (sum === 4 || sum === -4) {
      // Player 1 wins (sum is 4) or Player 2 wins (sum is -4)
      if (board2[winningCombos4x4[i][0]] === 1) {
        playerOneScore2 += 1
        return 'Player 1 wins'
      } else if (board2[winningCombos4x4[i][0]] === -1) {
        playerTwoScore2 += 1
        return 'Player 2 wins'
      }
    }
  }

  if (!board2.includes(null)) {
    tie2 += 1
    return 'Tie'
  }

  return null
}

