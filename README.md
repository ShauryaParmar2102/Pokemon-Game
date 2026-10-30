# 🎮 Pokémon Collector

### ⚡ A Pokémon-Inspired 2D JavaScript Browser Game

## 📖 Project Overview

**Pokémon Collector** is a 2D browser game built using **HTML5, CSS3 and vanilla JavaScript**.

Players control a character in a Pokémon-inspired environment and must collect Pokéballs before the countdown timer reaches zero.

The game features randomly generated Pokéballs, collision detection, animated character movement, scoring, difficulty selection and interactive game menus.

This project was initially developed by following a JavaScript game development tutorial. I then expanded it with additional functionality to practise JavaScript programming, debugging and implementing new gameplay features.

## 🛠️ Technologies Used

### 🎨 Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### 🔧 Development Tools

![Visual Studio Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

## ✨ Game Features

## ✨ Game Features

### 🕹️ Character Movement

- ✅ Move the player using WASD or arrow keys
- ✅ Animated character walking sprites
- ✅ Character appearance changes based on movement direction
- ✅ Supports horizontal, vertical and diagonal movement
- ✅ Prevents the character from moving outside the screen
- ✅ Improved keyboard release handling to prevent one released key from stopping movement on both axes

### ⚪ Pokéball Collection

- ✅ 10 Pokéballs are generated when the game starts
- ✅ Pokéballs appear at random positions around the screen
- ✅ Collision detection identifies when the player touches a Pokéball
- ✅ A sound effect plays when a Pokéball is collected
- ✅ The collected Pokéball disappears
- ✅ The player's score increases by one
- ✅ A replacement Pokéball is generated after each collection

### 🌳 Game Environment

- ✅ 50 bushes are randomly generated across the environment
- ✅ Pokémon-inspired background and character sprites
- ✅ Random placement of collectible items
- ✅ Continuous gameplay animation using `requestAnimationFrame()`

### 🎯 Difficulty Selection

Players can choose from three difficulty levels.

| Difficulty | ⏱️ Time Limit | ⚪ Pokéballs Required |
| ---------- | ------------: | -------------------: |
| 🟢 Easy    |    90 seconds |                   20 |
| 🟡 Medium  |    60 seconds |                   30 |
| 🔴 Hard    |    30 seconds |                   40 |

Each difficulty changes the countdown timer and the number of Pokéballs required to win.

### ⏱️ Countdown Timer

- ✅ Timer starts when a difficulty is selected
- ✅ Countdown decreases every second
- ✅ Time remaining is displayed on screen
- ✅ Countdown pauses when the player pauses the game
- ✅ Game Over is triggered when the timer reaches zero
- ✅ Different time limits for each difficulty

### ⏸️ Pause & Resume System

- ✅ Pause gameplay using the Pause button
- ✅ Press **P** to pause or resume
- ✅ Dedicated pause menu overlay
- ✅ Player movement stops while paused
- ✅ Walking animations stop while paused
- ✅ Countdown timer freezes
- ✅ Resume gameplay without resetting the current score
- ✅ Restart the game directly from the pause menu

### 🏆 Win & Game Over System

- ✅ Victory screen appears when the target score is reached
- ✅ Game Over screen appears when the timer runs out
- ✅ Final number of collected Pokéballs is displayed
- ✅ Player movement stops when the game ends
- ✅ Play Again button reloads the game and returns to difficulty selection

## 🎮 Game Controls

| Key      | Action         |
| -------- | -------------- |
| ⬆️ W / ↑ | Move Up        |
| ⬇️ S / ↓ | Move Down      |
| ⬅️ A / ← | Move Left      |
| ➡️ D / → | Move Right     |
| ⏸️ P     | Pause / Resume |

Players can also use the onscreen buttons to pause, resume or restart the game.

## 📂 Project Structure

```text
Pokemon-Collector/
├── 📄 index.html
├── 🎨 styles.css
├── ⚡ script.js
├── 📁 assets/
│   ├── 🌳 land.png
│   ├── 🌿 bush.png
│   ├── ⚪ pokeball.png
│   ├── 🧍 player_front.png
│   ├── 🧍 player_back.png
│   ├── 🧍 player_left.png
│   ├── 🧍 player_right.png
│   └── 🔊 coin.mp3
└── 📖 README.md
```

## 🚀 Getting Started

### 📥 1. Download the Game

1. Open the Pokémon Collector repository on GitHub.
2. Click the green **Code** button.
3. Select **Download ZIP**.
4. Extract the downloaded ZIP file to a folder on your computer.

### 📂 2. Open the Project

1. Open the extracted project folder.
2. Open the folder in **Visual Studio Code** if you want to inspect or modify the source code.

### ▶️ 3. Run the Game

1. Locate `index.html` inside the project folder.
2. Double-click `index.html` to open it in your web browser, or use the **Live Server** extension in Visual Studio Code.
3. The difficulty selection menu will appear.

### 🎮 4. Start Playing

1. 🎯 Choose Easy, Medium or Hard.
2. 🕹️ Move around the map using WASD or arrow keys.
3. ⚪ Collect Pokéballs to increase your score.
4. ⏱️ Reach the target score before the timer runs out.
5. 🏆 Win the game or restart and try again!

**Note:** The game runs in a web browser and does not require Node.js, npm or a separate backend server.

## 🧠 JavaScript Concepts Practised

This project helped me practise several JavaScript programming concepts:

- 📦 Variables, constants and objects
- 📋 Arrays and array methods such as `push()` and `splice()`
- 🔁 `for` loops
- 🔀 Conditional statements
- ⚙️ Functions
- 🖱️ DOM manipulation
- ⌨️ Keyboard event listeners (`keydown` and `keyup`)
- 🎯 Collision detection using `getBoundingClientRect()`
- ⏱️ Countdown timers using `setInterval()`
- 🎞️ Animation loops using `requestAnimationFrame()`
- 🎲 Random positioning using `Math.random()`
- 🔊 Audio playback using JavaScript
- 🛑 Game state management using Boolean variables
- 🐛 Debugging and testing

## 💻 How the Game Works

### 🌳 1. Generating the Environment

The `createBushes()` function generates 50 bushes at random positions across the screen.

JavaScript creates each bush using `document.createElement()` and adds it to the webpage.

### ⚪ 2. Generating Pokéballs

The `createBalls()` function generates 10 Pokéballs at the beginning of the game.

The `generateBall()` function places each Pokéball at a random location and stores a reference to it in an array.

When a Pokéball is collected, another one appears.

### 🚶 3. Moving the Player

Keyboard event listeners detect when movement keys are pressed or released.

The `player_vel` object stores the player's horizontal and vertical movement speeds.

The `run()` function continuously updates the player's position using `requestAnimationFrame()`.

### 🎯 4. Detecting Collisions

The `collision()` function checks whether two HTML elements overlap.

The `checkCollisions()` function uses this to detect when the player collects a Pokéball.

When a collision occurs:

- The collection sound plays.
- The Pokéball is removed.
- The score increases.
- The score display updates.
- A new Pokéball is generated unless the player has won.

### ⏱️ 5. Managing the Countdown

The `startTimer()` function uses `setInterval()` to decrease the remaining time every second.

The timer stops progressing while the game is paused and ends when the player wins or loses.

### 🏆 6. Determining the Result

The `endGame()` function is called when the player wins or runs out of time.

It stops character movement and displays the appropriate result screen.

## 👨‍💻 Author

**Made by Shaurya Parmar**
