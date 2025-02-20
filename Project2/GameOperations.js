// Array for different categories
const categories = {
    fruits: ["./Images/fruit1.jpeg", "./Images/fruit2.jpeg", "./Images/fruit3.jpeg", "./Images/fruit4.jpeg", "./Images/fruit5.jpeg", "./Images/fruit6.jpeg", "./Images/fruit7.jpeg", "./Images/fruit8.jpeg"],
    emojis: ["./Images/Emoji1.jpeg", "./Images/Emoji2.jpg", "./Images/Emoji3.jpeg", "./Images/Emoji4.jpeg", "./Images/Emoji5.jpg", "./Images/Emoji6.png", "./Images/Emoji7.jpg", "./Images/Emoji8.jpg"],
    animals: ["./Images/Animal1.jpeg", "./Images/Animal2.jpeg", "./Images/Animal3.jpg", "./Images/Animal4.jpeg", "./Images/Animal5.jpeg", "./Images/Animal6.jpeg", "./Images/Animal7.jpeg", "./Images/Animal8.avif"],
    planets: ["./Images/Planet1.jpg", "./Images/Planet2.png", "./Images/Planet3.png", "./Images/Planet4.png", "./Images/Planet5.png", "./Images/Planet6.png", "./Images/Planet7.png", "./Images/Planet8.png"],
    flags: ["./Images/Flag1.jpg", "./Images/Flag2.jpg", "./Images/Flag3.jpeg", "./Images/Flag4.jpeg", "./Images/Flag5.png", "./Images/Flag6.jpg", "./Images/Flag7.png", "./Images/Flag8.jpeg"],
    landMarks: ["./Images/Mark1.jpeg", "./Images/Mark2.jpg", "./Images/Mark3.jpeg", "./Images/Mark4.jpeg", "./Images/Mark5.jpeg", "./Images/Mark6.jpeg", "./Images/Mark7.jpeg", "./Images/Mark8.jpg"],
    shapes: ["./Images/Shape1.png", "./Images/Shape2.jpeg", "./Images/Shape3.png", "./Images/Shape4.jpeg", "./Images/Shape5.jpeg", "./Images/Shape6.jpeg", "./Images/Shape7.png", "./Images/Shape8.jpg"],
    vegetables: ["./Images/veg1.jpeg", "./Images/veg2.jpeg", "./Images/veg3.jpeg", "./Images/veg4.jpeg", "./Images/veg5.jpeg", "./Images/veg6.jpeg", "./Images/veg7.jpeg", "./Images/veg8.jpeg"],
    pokemons: ["./Images/Poke1.jpeg", "./Images/Poke2.png", "./Images/Poke3.jpg", "./Images/Poke4.jpg", "./Images/Poke5.png", "./Images/Poke6.png", "./Images/Poke7.jpg", "./Images/Poke8.jpeg"],
    cartoons: ["./Images/Cartoon1.png", "./Images/Cartoon2.jpeg", "./Images/Cartoon3.jpeg", "./Images/Cartoon4.jpeg", "./Images/Cartoon5.jpeg", "./Images/Cartoon6.jpeg", "./Images/Cartoon7.png", "./Images/Cartoon8.jpeg"],
    foods: ["./Images/Food1.jpeg", "./Images/Food2.jpeg", "./Images/Food3.jpeg", "./Images/Food4.jpeg", "./Images/Food5.jpeg", "./Images/Food6.jpeg", "./Images/Food7.jpeg", "./Images/Food8.jpeg"],
    harry: ["./Images/Harry1.jpeg", "./Images/Harry2.jpeg", "./Images/Harry3.jpeg", "./Images/Harry4.jpeg", "./Images/Harry5.jpeg", "./Images/Harry6.jpeg", "./Images/Harry7.png", "./Images/Harry8.jpeg"],
    flowers: ["./Images/Flower1.jpeg", "./Images/Flower2.jpeg", "./Images/Flower3.jpeg", "./Images/Flower4.jpeg", "./Images/Flower5.jpeg", "./Images/Flower6.jpeg", "./Images/Flower7.jpeg", "./Images/Flower8.jpeg"],
    memes: ["./Images/Meme1.jpeg", "./Images/Meme2.jpeg", "./Images/Meme3.jpeg", "./Images/Meme4.jpeg", "./Images/Meme5.png", "./Images/Meme6.png", "./Images/Meme7.jpeg", "./Images/Meme8.jpeg"],
    sweets: ["./Images/Dessert1.jpeg", "./Images/Dessert2.jpeg", "./Images/Dessert3.jpeg", "./Images/Dessert4.jpeg", "./Images/Dessert5.jpeg", "./Images/Dessert6.jpeg", "./Images/Dessert7.jpeg", "./Images/Dessert8.jpeg"],
    // animals: ["./Images", "./Images", "./Images", "./Images", "./Images", "./Images", "./Image", "./Images"],
};

let firstCard, secondCard;
let lockBoard = false;
let timeLeft = 30;
let timer;
let score = 0;
let cards = [];
let gameActive = false;
let currentSound = null;

// Sounds Path
const flipSound = new Audio('./Sounds/Flip.wav');
const matchSound = new Audio('./Sounds/Match.wav');
const unmatchSound = new Audio('./Sounds/Wrong.wav');

// On Click of start button on banner it takes to categories section
function showGrid() {
    document.getElementById("category-selection").scrollIntoView({ behavior: "smooth" });
}

// For when We want to go back to homepage from game
function showHome() {
    document.getElementById("category-section").style.display = "grid";
    document.getElementById("about-game").style.display = "flex";
    document.getElementById("game-footer").style.display = "block";
    document.getElementById("gameBox").style.display = "none";
}

function showGameBox() {
    document.getElementById("category-section").style.display = "none"; //hides category section
    document.getElementById("about-game").style.display = "none"; //hides about-game section
    document.getElementById("game-footer").style.display = "none";
    // Game grid will be shown 
    document.getElementById("gameBox").style.display = "flex";   
    document.getElementById("game-board").style.display = "grid";
}
// Game Starts
function startGame(category) {
    cards = [...categories[category], ...categories[category]];
    showGameBox();
    createBoard();

    // Enable the start button
    const startButton = document.getElementById("startButton");
    startButton.disabled = false;
    startButton.addEventListener("click", () => {
        startTimer();
        gameActive = true;
        startButton.disabled = true;
    });
}

//  Randomly rearrange the elements of an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// generating the game board by creating card in that
function createBoard() {
    shuffle(cards);
    const board = document.getElementById("game-board");
    board.innerHTML = "";
    cards.forEach(image => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.image = image;
        card.innerHTML = `<img src="${image}" alt="">`;
        card.addEventListener("click", flipCard);
        board.appendChild(card);
    });
}

// flipping card
function flipCard() {
    if (!gameActive || lockBoard || this === firstCard) return;

    // Play the flip sound effect
    flipSound.currentTime = 0; 
    flipSound.play();

    this.classList.add("flipped");
    if (!firstCard) {
        firstCard = this;
        return;
    }
    secondCard = this;
    lockBoard = true;
    checkMatch();
    saveGameState();
}



// Checking matched or not 
function checkMatch() {
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
    if (isMatch) {
        matchSound.currentTime = 0; 
        matchSound.play(); 
        
        // Add a class to give style for matched cards
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        
        disableCards();
        score += 10; // score increment
        document.getElementById("totalScore").innerText = score;
    } else {
        unmatchSound.currentTime = 0; 
        unmatchSound.play();
        unflipCards();
    }
    checkWin();
}

// disable of cards when they matched so unable to click on it
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

// when the two selected cards do not match then unflip them
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
    }, 1000);
}

// Reseting the game after each round
function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}


// For the countdown of game
function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time-left").innerText = timeLeft;
        saveGameState();    //Save time 
        if (timeLeft <= 0) {
            clearInterval(timer);
            gameActive = false;
            showEndGamePopup(false);
        }
    }, 1000);
}

// Checking all pairs matched 
function checkWin() {
    if (document.querySelectorAll(".flipped").length === cards.length) {
        clearInterval(timer);
        gameActive = false;
        setTimeout(() => showEndGamePopup(true), 500); // Game won
    }
}

// Showing the message of win or lose
function showEndGamePopup(isWin) {
    const popup = document.getElementById("endGamePopup");
    const message = isWin ? "Congratulations! You won!" : "Time's up! You lost.";
    const scoreMessage = `Your final score is : ${score}`;

    document.getElementById("popupMessage").innerText = message;
    document.getElementById("popupScore").innerText = scoreMessage;


    // Image in popup box 
    const image = document.getElementById("popupImage");
    image.src = isWin ? "./Images/WinPop.gif" : "./Images/Lose.gif"; 
    image.alt = isWin ? "Winning Sticker" : "Losing Sticker";

    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }

    currentSound = isWin ? new Audio('./Sounds/Win.wav') : new Audio('./Sounds/Game Lose.wav');
    currentSound.play();

    popup.style.display = "block";
}


// After clicking close button in popup
function closePopup() {
    const popup = document.getElementById("endGamePopup");
    popup.style.display = "none";

    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }

    // Clear the previous game and reset the game 
    document.getElementById("game-board").innerHTML = ""; 
    score = 0; 
    document.getElementById("totalScore").innerText = score;
    clearInterval(timer); 
    timeLeft = 30; 
    document.getElementById("time-left").innerText = timeLeft;
    gameActive = false;

    // Restart the game with the same category
    const selectedCategory = Object.keys(categories).find(category =>
        categories[category].some(image => cards.includes(image))
    );

    if (selectedCategory) {
        startGame(selectedCategory); 
    }
}


// Saving on localstorage and then retrieving it
function saveGameState() {
    const gameState = {
        cards,
        flippedCards: [...document.querySelectorAll('.card.flipped')].map(card => card.dataset.image),
        matchedCards: [...document.querySelectorAll('.card.matched')].map(card => card.dataset.image), // Save matched cards
        timeLeft,
        score,
    };
    localStorage.setItem('memoryGameState', JSON.stringify(gameState));
}

function loadGameState() {
    const savedState = JSON.parse(localStorage.getItem("memoryGameState"));
    if (!savedState) return;

    // Restore saved data
    cards = savedState.cards;
    timeLeft = savedState.timeLeft;
    score = savedState.score;

    // Ensure the correct category is displayed
    const selectedCategory = Object.keys(categories).find(category =>
        categories[category].some(image => cards.includes(image))
    );

    if (!selectedCategory) {
        console.error("Category for saved game not found.");
        return;
    }

    // Reinitialize the game board
    showGameBox();

    const board = document.getElementById("game-board");
    board.innerHTML = "";
    cards.forEach(image => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.image = image;

        if (savedState.flippedCards.includes(image)) {
            card.classList.add("flipped");
        }

        // Check if this card was matched and add the matched class
        if (savedState.matchedCards && savedState.matchedCards.includes(image)) {
            card.classList.add("matched");
        }

        card.innerHTML = `<img src="${image}" alt="">`;
        card.addEventListener("click", flipCard);
        board.appendChild(card);
    });

    // Update score and timer UI
    document.getElementById("totalScore").innerText = score;
    document.getElementById("time-left").innerText = timeLeft;

    // Restart the timer and enable the game
    startTimer();
    gameActive = true;
}

document.addEventListener("DOMContentLoaded", () => {
    const gameState = localStorage.getItem("memoryGameState");

    if (gameState) {
        const resume = confirm("Do you want to resume your previous game?");
        if (resume) {
            loadGameState();
        } else {
            localStorage.removeItem("memoryGameState");
            showHome();
        }
    } 
});

