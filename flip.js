
// one or two player game buttons 
const onePlayerBtn = document.getElementById('onePlayer')
const twoPlayerBtn = document.getElementById('twoPlayer')


// username modals 
let player1Name = document.getElementById('insrtname1')
let player2Name = document.getElementById('insrtname2')
const usernameDiv = document.getElementById('username')


// initalize variable to track which side the user picked (heads or tails)
let chosenSide = ''

const coin = document.getElementById('coin')
const result = document.getElementById('result')
const headsBtn = document.getElementById('headsBtn')
const tailsBtn = document.getElementById('tailsBtn')

//event listeners 
headsBtn.addEventListener('click', () => chooseSide('heads'))
tailsBtn.addEventListener('click', () => chooseSide('tails'))
document.getElementById('btnFlip').addEventListener('click', flipCoin)
document.getElementById('playGameBtn').addEventListener('click', playGame)


onePlayerBtn.addEventListener('click', () => {
  usernameDiv.innerHTML = `<label for="insrtname1">Player 1:</label>
  <input type="text" id="insrtname1">`
})

function handleCoinChoice(event) {
  const target = event.target
  if (target.tagName === 'IMG') {
    const side = target.alt
    chooseSide(side)
  }
}

function chooseSide(side) {
  chosenSide = side
  result.innerText = ''
  const coinChoiceBtns = document.getElementById('coin-choice-btns')
  coinChoiceBtns.innerHTML = `<button class="coinBtn" id="${side}Btn"><img class="coinImg" alt="${side}" id="${side}" src="/other/${side}.png"></button>`
}

let randomResult
let wonCoinToss = false 
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

      // displays a message indicating whether the user wins or loses based on their chosen side
      if (randomResult === chosenSide) {
        result.innerText = 'You Win!'
        wonCoinToss = true
      } else {
        result.innerText = 'You Lose!'
        wonCoinToss = false
      }
      //stops the interval
      clearInterval(flipInterval)
    }
  }, 100)
}

function playGame() {
  console.log(chosenSide)
  if (chosenSide === '') {
    alert('Please choose heads or tails before playing.')
    return
  }

  if (wonCoinToss) {
    alert(`You win the toss! You move first with the dog character.`)
  } else {
    alert(`You lost the toss! You play second with the cat character.`)
  }

  modal4.style.display = 'none'
  document.body.style.backgroundImage = "url('/other/rainingcatsanddogs.jpg')"
  //https://www.flickr.com/photos/mateja-purgar/3958842873 
}

const modal1 = document.getElementById('modal')
const modal2 = document.getElementById('modal2')
const modal3 = document.getElementById('modal3')
const modal4 = document.getElementById('modal4')
const instructionsBtn = document.querySelectorAll('.instructionsBtns')
const closeInstructions = document.querySelectorAll('.close-instr')


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

// reset the coin toss box back to both coins showing
document.getElementById('resetCoinToss').addEventListener('click', () => { 
  resetCoinBox()
})

function resetCoinBox() {
  console.clear()
  const coinChoiceBtns = document.getElementById('coin-choice-btns')
  coinChoiceBtns.innerHTML = `<button class="coinBtn" id="headsBtn"><img class="coinImg" alt="heads" id="heads" src="/other/heads.png"></button>
  <button class="coinBtn" id="tailsBtn"><img class="coinImg" id="tails" alt="tails" src="/other/tails.png"></button>`
  result.innerText = ''
  chosenSide = ''
  coinChoiceBtns.addEventListener('click', handleCoinChoice)
}

document.getElementById('resetCoinToss').addEventListener('click', resetCoinBox)


function resetUsernameDiv () {
  usernameDiv.innerHTML = `<label for="insrtname1">Player 1:</label>
  <input type="text" id="insrtname1"> <br> <label id="p2NameLabel" for="insrtname2">Player 2:</label> <input type="text" id="insrtname2">`
}


resetCoinBox()