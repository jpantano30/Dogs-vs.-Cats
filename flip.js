document.addEventListener('DOMContentLoaded', function () {
// Variables // 

// used to display instructions and collect user names
const modal1 = document.getElementById('modal')
const modal2 = document.getElementById('modal2')
const modal3 = document.getElementById('modal3')
const modal4 = document.getElementById('modal4')

// opening and closing the instruction modals
const instructionsBtn = document.querySelectorAll('.instructionsBtns')
const closeInstructions = document.querySelectorAll('.close-instr')


// one or two player game buttons 
const onePlayerBtn = document.getElementById('onePlayer')
// const twoPlayerBtn = document.getElementById('twoPlayer')

// 3x3 or 4x4 size board btns 
const threeBtn = document.getElementById('three')
const fourBtn = document.getElementById('four')

// username modals - input elements for entering player names 
let player1Name = document.getElementById('insrtname1')
let player2Name = document.getElementById('insrtname2')

// Get player names and display on scoreboard
const playerOneScoreBoard = document.getElementById('plone')
const playerTwoScoreBoard = document.getElementById('pltwo')

// const usernameDiv = document.getElementById('username')

// initalize variable to track which side the user picked (heads or tails)
let chosenSide = ''

// coin toss 
let randomResult
let coinTossResult

const coin = document.getElementById('coin')
const result = document.getElementById('result')
const headsBtn = document.getElementById('headsBtn')
const tailsBtn = document.getElementById('tailsBtn')

// variable to track if its a one player game 
let onePlayerGame = false

// game results scoreboard variables 
const pOneWins = document.querySelector('#p1wins h1')
const pTwoWins = document.querySelector('#p2wins h1')
const ties = document.querySelector('#ties h1')

// game results below the board & restart 
const resMsg = document.querySelector('#gameovermsg')
const restart = document.getElementById('restart')

// object to store players image for their characters 
const LOOKUP = {
  '1': '/other/PaisleyFace1.png', 
  '-1':'/other/cat2.png'
}


// array of winning combinations on the 3x3 board 
const winningCombos = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
]

// variables initialized for game state 
let board 
let turn
let winner
let playerOneScore = 0
let playerTwoScore = 0
let tie = 0
let boardSize = 3

// game board 
const boardEl = document.getElementById('game-board')


                     // EVENT LISTENERS // 


headsBtn.addEventListener('click', () => chooseSide('heads'))
tailsBtn.addEventListener('click', () => chooseSide('tails'))

document.getElementById('btnFlip').addEventListener('click', flipCoin)
document.getElementById('playGameBtn').addEventListener('click', () => {
  chooseBoardSize()
  // document.getElementById('.instBtns').style.removeProperty("position")
  // document.getElementById('.instBtns').style.removeProperty("top")
  // document.getElementById('.instBtns').style.removeProperty("left")

}) 

// changes the modal 3 to only allow input for 1 player and changes oneplayer game to true when pressed 
onePlayerBtn.addEventListener('click', () => {
  const label2 = document.querySelector('label[for="insrtname2"]')
  const input2 = document.getElementById('insrtname2')
  label2.style.display = 'none'
  input2.style.display = 'none'
  onePlayerGame = true
})
fourBtn.addEventListener('click', () => {
  boardSize = 4
})
threeBtn.addEventListener('click', () => {
  boardSize = 3
})

// continue buttons modals 
document.getElementById('cont-1').addEventListener('click', () => {
  modal1.style.display = 'none'
  modal2.style.display = 'block'
})

document.getElementById('cont-2').addEventListener('click', () => {
  modal2.style.display = 'none'
  modal3.style.display = 'block'
})

document.getElementById('cont-3').addEventListener('click', () => { 
  modal3.style.display = 'none'
  modal4.style.display = 'block'
  let player1 = document.getElementById('insrtname1').value
  document.getElementById('inputname').innerText = player1
})

// open and close intructions buttons 
instructionsBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    modal1.style.display = 'flex'
    modal2.style.display = 'none' 
    modal3.style.display = 'none' 
    modal4.style.display = 'none'
    resetCoinBox()
    resetUsernameDiv()
    document.getElementById('inputname').innerText = 'name'
  })
})

closeInstructions.forEach(btn => {
  btn.addEventListener('click', () => {
  modal1.style.display = 'none'
  modal2.style.display = 'none'
  modal3.style.display = 'none'
  modal4.style.display = 'none'
  resetCoinBox()
  resetUsernameDiv()
  document.getElementById('inputname').innerText = 'name'
  document.body.style.backgroundImage = "url('/other/rainingcatsanddogs.jpg')"
  })
})

// reset page
document.querySelectorAll('#resetPage').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.reload()
  })
})

// reset the coin toss box back to both coins showing
document.getElementById('resetCoinToss').addEventListener('click', resetCoinBox)

boardEl.addEventListener('click', handleClick)
restart.addEventListener('click', () => {
  init()
  if (onePlayerGame) {
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

// handles the users coin choice of heads or tails 
function handleCoinChoice(event) {
  const target = event.target
  if (target.tagName === 'IMG') {
    const side = target.alt
    chooseSide(side)
  }
}

// sets the chosen side for the coin tos 
function chooseSide(side) {
  chosenSide = side
  result.innerText = ''
  const coinChoiceBtns = document.getElementById('coin-choice-btns')
  coinChoiceBtns.innerHTML = `<button class="coinBtn" id="${side}Btn"><img class="coinImg" alt="${side}" id="${side}" src="/other/${side}.png"></button>`
}

// simulates coin flip animations and determines results 
function flipCoin() {
  console.log(chosenSide)

  //if the user has not picked a side, alert them to do so.
  if (chosenSide === '') {
    alert('Please choose heads or tails before flipping.')
    return
  }
  // array of src paths for heads and tails images
  const sides = ['/other/heads.png', '/other/tails.png']

  let currentTime = 0
  const totalTime = 1000
  
  const flipInterval = setInterval(() => {
    // change the source of image between heads and tails 
    coin.src = sides[Math.floor(currentTime / 100) % 2]

    // increment currentTime by 100ms each interval
    currentTime += 100 

    // when currentTime reaches 1000ms... 
    if (currentTime >= 1000) {
      //stops the flip by changing current time to greater than total time of animation 
      currentTime = totalTime + 1

      // if the random number is less than 0.5, result = heads or if its greater than or equal to 0.5, result = tails.
      if (Math.random() < 0.5) {
        console.log('Random number is less than 0.5')
        randomResult = 'heads'
      } else {
        console.log('Random number is greater than or equal to 0.5')
        randomResult = 'tails'
      }
      coin.src = `/other/${randomResult}.png`

      coinTossResult = randomResult

      // displays a message indicating whether the user wins or loses based on their chosen side
      if (randomResult === chosenSide) {
        result.innerText = 'You won the toss! You move first with the dog character.'
      } else {
        result.innerText = 'You lost the toss! You play second with the cat character.'
      }
      //stops the interval
      clearInterval(flipInterval)
    }
  }, 100)
}

// initiates the game, handles player names, and triggers computer moves in one-player mode
function playGame() {
  console.log(chosenSide)
  
  let playerOne = player1Name.value
  let playerTwo = player2Name.value

  if (chosenSide === '') {
    alert('Please choose heads or tails before playing.')
    return
  }

  if (coinTossResult === chosenSide) {
    console.log('won the toss')
    if (!onePlayerGame){
      playerOneScoreBoard.innerText = playerOne
      playerTwoScoreBoard.innerText = playerTwo
    } else if (onePlayerGame) {
      playerOneScoreBoard.innerText = playerOne
      playerTwoScoreBoard.innerText = 'CAT'
      if (onePlayerGame && turn === -1) {
        setTimeout(makeComputerMove, 500)
      }
    }

    // check if 1 player game and whose turn. Used setTimeout to slow down the random response for the computer

  } else if (coinTossResult !== chosenSide) {
    console.log('lost the toss')
    console.log("Player 1 name:", playerOne)
    playerTwoScoreBoard.innerText = playerOne

    if (!onePlayerGame){
      playerOneScoreBoard.innerText = playerTwo
    } else if (onePlayerGame){
      // having a problem if i select 1 player cant play after the computer makes a move
      console.log("Player 1 name:", playerOne)
      playerOneScoreBoard.innerText = 'DOG'
    }
    if (onePlayerGame && turn === 1) {
      console.log("Calling makeComputerMove after losing the toss")
      setTimeout(makeComputerMove, 500)
    }
  }

  modal4.style.display = 'none'
  document.body.style.backgroundImage = "url('/other/rainingcatsanddogs.jpg')"
  //https://www.flickr.com/photos/mateja-purgar/3958842873 
}

// resets the coin toss 
function resetCoinBox() {
  const coinChoiceBtns = document.getElementById('coin-choice-btns')
  coinChoiceBtns.innerHTML = `<button class="coinBtn" id="headsBtn"><img class="coinImg" alt="heads" id="heads" src="/other/heads.png"></button>
  <button class="coinBtn" id="tailsBtn"><img class="coinImg" id="tails" alt="tails" src="/other/tails.png"></button>`
  result.innerText = ''
  chosenSide = ''
  coinChoiceBtns.addEventListener('click', handleCoinChoice)
}

// resets the username input
function resetUsernameDiv () {
  const label2 = document.querySelector('label[for="insrtname2"]')
  const input2 = document.getElementById('insrtname2')
  label2.style.display = ''
  input2.style.display = ''
}


// resetCoinBox() and resetUsernameDiv() are called to initialize UI
resetCoinBox()

init()

console.log('winner:', winner)
//  initializes the tic-tac-toe game state
function init(){
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
  resMsg.style.display = 'none'
  resMsg.innerText = ''
}

// handles player moves on the tic-tac-toe board
function handleClick(event){
  console.log('handleClick called')
  console.log('Turn before player move:', turn)
  
  if (board[parseInt(event.target.id)] !== null || winner) {
    console.log("Invalid move:", event.target.id, "Current turn:", turn)
    return
  }

  board[parseInt(event.target.id)] = turn
  winner = checkWinner()
  render()
  console.log('winner:', winner)

  if (!winner){
    turn *= -1
    console.log('Turn after player move:', turn)
    console.log('winner:', winner)
  }
    // if one player game - computers turn - random move
    if (onePlayerGame && turn === -1 && !winner) {
      console.log("Calling makeComputerMove after player's move")
      setTimeout(makeComputerMove, 500)
    }
}
console.log('winner:', winner)
// makes a random move for the computer in one-player mode
function makeComputerMove() {
  console.log('makeComputerMove called')
  const emptySquares = board.reduce((acc, val, index) => {
    if (val === null) acc.push(index)
    return acc
  }, [])
  console.log('Empty Squares:', emptySquares)

  if (emptySquares.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptySquares.length)
    const computerMove = emptySquares[randomIndex]
    board[computerMove] = turn
    turn *= -1 
    winner = checkWinner()
    console.log('winner:', winner)
    render()
    console.log('Turn after computer move:', turn)
  }
}

// updates game based on the game state
// LOOKUP is used to map player values to their corresponding image paths
function render() {
  console.log('winner:', winner)
  for (let i = 0; i < board.length; i++) {
    const sq = document.getElementById(i)
    sq.innerHTML = board[i] ? `<img src="${LOOKUP[board[i]]}" alt="${LOOKUP[board[i]]}">` : ''
  }
  if (winner === 'Tie') {
    resMsg.style.display = 'block'
    resMsg.innerText = "It's a tie"
    ties.innerText = tie
  }
  if (winner === 1 || winner === -1) {
    resMsg.style.display = 'block'
    resMsg.innerText = `We have a WINNER!`
    console.log(winner)
    pOneWins.innerText = playerOneScore
    pTwoWins.innerText = playerTwoScore
  }
}


// checks for a winning combination or a tie on the board
function checkWinner (){
  console.log('winner:', winner)
  for (let i = 0; i < winningCombos.length; i++){
      sum = Math.abs(
        board[winningCombos[i][0]] + 
        board[winningCombos[i][1]] + 
        board[winningCombos[i][2]])
      if (sum === 3) {
          if (board[winningCombos[i][0]] === 1){
            playerOneScore += 1
          } 
          if (board[winningCombos[i][0]] === -1){
            playerTwoScore += 1
          } 
          return board[winningCombos[i][0]]
      }
  }
  if (!board.includes(null)) {
      tie += 1
      return 'Tie'
  }
  return null
}



})