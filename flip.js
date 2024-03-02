  // initalize variable to track which side the user picked (heads or tails)
  let chosenSide = ''

  const coin = document.getElementById('coin')
  const result = document.getElementById('result')

  //event listeners 
  document.getElementById('headsBtn').addEventListener('click', () => chooseSide('heads'))
  document.getElementById('tailsBtn').addEventListener('click', () => chooseSide('tails'))
  document.getElementById('btnFlip').addEventListener('click', flipCoin)
  document.getElementById('playGameBtn').addEventListener('click', playGame)


  function chooseSide(side) {
    chosenSide = side
    result.innerText = ''
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