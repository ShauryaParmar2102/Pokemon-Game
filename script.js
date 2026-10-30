const NUM_BUSHES = 50; // Set the total number of bushes to generate
const NUM_BALLS = 10;

// Store the selected difficulty settings
let timeLeft = 90
let TARGET_SCORE = 20

// Track whether the player has started the game
let gameStarted = false

// Track whether the game has finished
let gameOver = false

// Track whether the game is paused
let isPaused = false

// Select the pause menu overlay
const pauseMenu = document.getElementById('pauseMenu')

// Select the Resume Game button
const resumeButton = document.getElementById('resumeButton')

// Select the Pause button from the HTML
const pauseButton = document.getElementById('pauseButton')

// Select the timer element from HTML
const timerDisplay = document.getElementById('timer')

// Select the game over screen
const gameOverScreen = document.getElementById('gameOverScreen')

// Select the result heading and final score
const gameResult = document.getElementById('gameResult')
const finalScore = document.getElementById('finalScore')

// Select the restart button
const restartButton = document.getElementById('restartButton')

const player = document.querySelector('.player')
const player_pos = {
    x: parseInt(window.innerWidth/2),
    y: parseInt(window.innerHeight/2),
}

// Store the player's horizontal and vertical movement speed
const player_vel = {
    x: 0,  // Horizontal speed (left and right)
    y: 0 // Vertical speed (up and down)
}


// Create an empty array to store the Pokéballs
const balls = []

//Store number of pokeballs collected
let score = 0;


// Select the score display from the HTML
const scoreDisplay = document.getElementById('score')

// Load the sound effect played when collecting a Pokéball
const sound = new Audio('assets/coin.mp3')


// Function to create bushes at random positions
function createBushes() {

    // Loop 50 times to create 50 bushes
    for (let i =0; i < NUM_BUSHES; i++) {

        // Create a new div element for each bush
        const div = document.createElement('div')

        // Add the 'bush' CSS class to style the div
        div.classList.add('bush')

        // Set a random horizontal position between 0% and 100%
        let x = Math.random() * 100 + '%'
        let y = Math.random() * 100 + '%'
        div.style.left = x // Set the bush's horizontal position (left and right)
        div.style.top = y // Set the bush's vertical position (up and down)
        document.body.appendChild(div) // Add the bush element to the HTML webpage

    }
}

// Function to check whether two HTML elements are colliding
function collision($div1, $div2) {
    var x1 = $div1.getBoundingClientRect().left;  // Get the horizontal (left) position of the first element
    var y1 = $div1.getBoundingClientRect().top; // Get the vertical (top) position of the first element

     // Get the height and width of the first element
    var h1 = $div1.clientHeight;
    var w1 = $div1.clientWidth;

    // Calculate the bottom and right edges of the first element
    var b1 = y1 + h1;
    var r1 = x1 + w1;

     // Get the horizontal (left) position of the second element
    var x2 = $div2.getBoundingClientRect().left;

     // Get the vertical (top) position of the second element
    var y2 = $div2.getBoundingClientRect().top;

      // Get the height and width of the second element
    var h2 = $div2.clientHeight;
    var w2 = $div2.clientWidth;

    // Calculate the bottom and right edges of the second element
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    // Return false if the two elements are not overlapping
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;

    // Return true if the two elements are touching or overlapping
    return true;
}

// Check whether the player collects any Pokéballs
function checkCollisions() {

    // Stop checking collisions when the game ends
    if (gameOver) return

    // Loop backwards through the Pokéballs
    for (let i = balls.length - 1; i >= 0; i--) {

        // Check whether the player touches a Pokéball
        if (collision(balls[i].ball, player)) {

            // Play the collection sound
            sound.currentTime = 0
            sound.play().catch(() => {})

            // Remove the Pokéball from the screen
            balls[i].ball.remove()

            // Remove the Pokéball from the array
            balls.splice(i, 1)

            // Increase the player's score
            score++

            // Update the score display
            scoreDisplay.textContent = score

            // Check if the target score has been reached
            if (score >= TARGET_SCORE) {
                endGame(true)
                return
            }

            // Generate a new Pokéball
            generateBall()
        }
    }
}

function run() {
    // Stop the game when it ends
    if (gameOver) return

    // Freeze the game while paused
    if (isPaused) {
        requestAnimationFrame(run)
        return
    }

    // Update the player's horizontal and vertical positions
    player_pos.x += player_vel.x
    player_pos.y += player_vel.y

    // Prevent the player from moving beyond the left edge
    if (player_pos.x < 0) {
        player_pos.x = 0
    }

    // Prevent the player from moving beyond the right edge
    if (player_pos.x > window.innerWidth - player.offsetWidth) {
        player_pos.x = window.innerWidth - player.offsetWidth
    }

    // Prevent the player from moving beyond the bottom edge
    if (player_pos.y < 0) {
        player_pos.y = 0
    }

    // Prevent the player from moving beyond the top edge
    if (player_pos.y > window.innerHeight - player.offsetHeight) {
        player_pos.y = window.innerHeight - player.offsetHeight
    }

    // Update the player's position on the screen
    player.style.left = player_pos.x + 'px'
    player.style.bottom = player_pos.y + 'px'

    // Check whether the player collects any Pokéballs
    checkCollisions()

    // Continue the game animation
    requestAnimationFrame(run)
}

// Function to generate a Pokéball at a random position
function generateBall() {

    // Create a new HTML div element
    const div = document.createElement('div')

    // Add the Pokéball CSS class
    div.classList.add('pokeball')

    // Generate random horizontal and vertical positions
    let x = Math.random() * 100 + '%'
    let y = Math.random() * 100 + '%'

    // Set the Pokéball's position
    div.style.left = x
    div.style.top = y

    // Store the Pokéball in the balls array
    balls.push({
        ball: div,
        pos: {
            x,
            y
        }
    })

    // Add the Pokéball to the webpage
    document.body.appendChild(div)
}

function createBalls() {
    // Loop through the code 50 times (NUM_BALLS = 50)
    for (let i =0; i < NUM_BALLS; i++) { 
        generateBall()
    }
}

// Function to end the game
function endGame(won) {

    // Mark the game as finished
    gameOver = true

    // Stop the player's movement
    player_vel.x = 0
    player_vel.y = 0

    // Stop the walking animation
    player.classList.remove('active')

    // Display the game over screen
    gameOverScreen.style.display = 'flex'

    // Display the result
    if (won) {
        gameResult.textContent = 'You Win! 🎉'
    } else {
        gameResult.textContent = 'Game Over!'
    }

    // Display the final score
    finalScore.textContent = `You collected ${score} Pokéballs!`
}

// Start the 60-second countdown timer
function startTimer() {

    // Run every second
    const timerInterval = setInterval(function() {

        // Stop counting if the game has ended
        if (gameOver) {
            clearInterval(timerInterval)
            return
        }

        // Stop the countdown timer when the game is paused
        if (isPaused) return

        // Decrease the remaining time
        timeLeft--

        // Update the timer display
        timerDisplay.textContent = timeLeft

        // End the game when time runs out
        if (timeLeft <= 0) {
            clearInterval(timerInterval)
            endGame(false)
        }

        // Close the function running inside setInterval
    }, 1000)
} // Close the startTimer() function

// Function to pause or resume the game
function togglePause() {

    // Prevent pausing after Game Over
    if (gameOver) return

    // Switch between paused and playing
    isPaused = !isPaused

    // Update the Pause button text
    pauseButton.textContent = isPaused ? 'Resume' : 'Pause'

    // Show the pause menu when paused and hide it when resumed
    pauseMenu.style.display = isPaused ? 'flex' : 'none'

    // Stop the player when the game is paused
    if (isPaused) {
        player_vel.x = 0
        player_vel.y = 0

        // Stop the walking animation
        player.classList.remove('active')
    }
}

// Pause or resume when the button is clicked
pauseButton.addEventListener('click', togglePause)

// Resume the game when the Resume Game button is clicked
resumeButton.addEventListener('click', togglePause)


// Function to initialise the game
function init() {

    // Generate the bushes
    createBushes()

    // Generate the Pokéballs
    createBalls()

    // Start the game animation
    run()

    // Start the countdown timer
    startTimer()
}

// Start the game with the selected difficulty
function startGame(difficulty) {

    // Configure the game difficulty
    if (difficulty === 'easy') {
        timeLeft = 90
        TARGET_SCORE = 20
    }

    if (difficulty === 'medium') {
        timeLeft = 60
        TARGET_SCORE = 30
    }

    if (difficulty === 'hard') {
        timeLeft = 30
        TARGET_SCORE = 40
    }

    // Update the score target shown on screen
    document.getElementById('targetScore').textContent = TARGET_SCORE

    // Update the timer display
    timerDisplay.textContent = timeLeft

    // Hide the difficulty selection menu
    document.getElementById('difficultyMenu').style.display = 'none'

    // Mark the game as started
    gameStarted = true

    // Start gameplay
    init()
}

// Listen for when the player presses a keyboard key
window.addEventListener('keydown', function(e){
    
    // Press P to pause or resume the game
if (e.key.toLowerCase() === 'p' && !e.repeat && gameStarted) {
    togglePause()
    return
}

// Prevent movement before starting, when paused, or after Game Over
if (!gameStarted || isPaused || gameOver) return

    // Move the player upwards using W or Arrow Up
if (e.key.toLowerCase() === 'w' || e.key === 'ArrowUp') {
    player_vel.y = 3
    player.style.backgroundImage = 'url("assets/player_front.png")'
}

// Move the player downwards using S or Arrow Down
if (e.key.toLowerCase() === 's' || e.key === 'ArrowDown') {
    player_vel.y = -3
    player.style.backgroundImage = 'url("assets/player_back.png")'
}

// Move the player left using A or Arrow Left
if (e.key.toLowerCase() === 'a' || e.key === 'ArrowLeft') {
    player_vel.x = -3
    player.style.backgroundImage = 'url("assets/player_left.png")'
}

// Move the player right using D or Arrow Right
if (e.key.toLowerCase() === 'd' || e.key === 'ArrowRight') {
    player_vel.x = 3
    player.style.backgroundImage = 'url("assets/player_right.png")'
}

// Activate the walking animation
player.classList.add('active')

// Close the keydown event listener
})

// Listen for when the player releases a keyboard key
window.addEventListener('keyup', function(e) {

    // Stop vertical movement when W, S, Up or Down is released
    if (e.key.toLowerCase() === 'w' || e.key.toLowerCase() === 's' ||
        e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        player_vel.y = 0
    }

    // Stop horizontal movement when A, D, Left or Right is released
    if (e.key.toLowerCase() === 'a' || e.key.toLowerCase() === 'd' ||
        e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        player_vel.x = 0
    }

    // Stop the walking animation when the player stops moving
    if (player_vel.x === 0 && player_vel.y === 0) {
        player.classList.remove('active')
    }
})

// Restart the game when the player clicks Play Again
restartButton.addEventListener('click', function() {

    // Reload the webpage to reset the game
    window.location.reload()
})

// Select the Restart button inside the Pause Menu
const pauseRestartButton = document.getElementById('pauseRestartButton')

// Restart the game when the button is clicked
pauseRestartButton.addEventListener('click', function() {
    window.location.reload()
})