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


  function chooseSide(side) {
    chosenSide = side
    result.innerText = ''
    document.getElementById('coin-choice-btns').innerHTML = `<button class="coinBtn" id="${side}Btn"><img class="coinImg" alt="${side}" id="${side}" src="/other/${side}.png"></button>`
  }

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
    let randomResult
    const flipInterval = setInterval(() => {
      // change the source of image between heads and tails 
      coin.src = sides[Math.floor(currentTime / 100) % 2]

      // increment currentTime by 100ms each interval
      currentTime += 100 
  
      // when currentTime reaches 1000ms... 
      if (currentTime >= 1000) {
        //stops the flip by changing current time to greater than total time of animation 
        currentTime = totalTime + 1

        // if the random number is less than 0.5, set result to heads or if its greater than or equal to 0.5, set result to tails.
        if (Math.random() < 0.5) {
          console.log('Random number is less than 0.5')
          randomResult = 'heads'
        } else {
          console.log('Random number is greater than or equal to 0.5')
          randomResult = 'tails'
        }
        coin.src = `/other/${randomResult}.png`
  
        //removes any flipped class from flip-animation
        document.getElementById('flip-animation').classList.remove('flipped')

        // displays a message indicating whether the user wins or loses based on their chosen side
        if (randomResult === chosenSide) {
          result.innerText = 'You Win!'
        } else {
          result.innerText = 'You Lose!'
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

    // Simulate a game scenario
    const playerMovesFirst = chosenSide === 'heads' // Assuming heads means player moves first

   
    if (playerMovesFirst) {
      alert(`You win the toss! You move first with the dog character.`)
      // Perform actions for player moving first
    } else {
      alert(`You lost the toss! You play second with the cat character.`)
      // Perform actions for player moving second
    }
  }

const modal1 = document.getElementById('modal')
const modal2 = document.getElementById('modal2')
const modal3 = document.getElementById('modal3')
const modal4 = document.getElementById('modal4')
const instructionsBtn = document.getElementById('instructions')


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
})

instructionsBtn.addEventListener('click', () => {
  modal1.style.display = 'block'
  modal2.style.display = 'none' 
  modal3.style.display = 'none' 
  modal4.style.display = 'none'
  resetCoinBox()
})
document.getElementById('close-instr').addEventListener('click', () => {
  modal1.style.display = 'none'
  modal2.style.display = 'none'
  modal3.style.display = 'none'
  modal4.style.display = 'none'
  resetCoinBox()
})
document.getElementById('resetCoinToss').addEventListener('click', () => { 
  resetCoinBox()
})


const resetCoinBox = () => {
  document.getElementById('coin-choice-btns').innerHTML = `<button class="coinBtn" id="headsBtn"><img class="coinImg" alt="heads" id="heads" src="/other/heads.png"></button>
  <button class="coinBtn" id="tailsBtn"><img class="coinImg" id="tails" alt="tails" src="/other/tails.png"></button>`
  result.innerText = ''
}
