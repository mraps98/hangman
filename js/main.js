/* Declaring variables*/
const guessingOptions = {
    bollywoodMovies: [
        "Kuch Kuch Hota Hai",
        "Kabhi Khushi Kabhi Gham",
        "Pyaar to hona hi tha",
        "Mohabbatein",
        "Race",
        "Disco dancer",
        "Dil Maange More",
        "Golmaal",
        "Dhamaal",
        "Dhol"
    ],
    hollywoodMovies: [
        "There's something about Mary",
        "Inception",
        "The Dark Knight Rises",
        "Pulp Fiction",
        "21 Jump Street",
        "Superbad"
    ]
};

const letters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
let numStrikes = 0;


/* Deciding the word / phrase to guess */
let phraseToGuess;
let lettersGuessed = [];
const setUpPhraseToGuess = () => {
    phraseToGuess = guessingOptions.bollywoodMovies[0];
    phraseGuessed = phraseToGuess;
    phraseGuessed.split("").forEach(character=>{
        character = " ";
    });
    for(let i = 0; i < phraseToGuess.length; i++){
        if(phraseToGuess.charAt(i)==" "){
            lettersGuessed.push(true);
        }else{
            lettersGuessed.push(false);
        }
    }
}

/* Rendering the guess display */
const renderGuessDisplay = () => {
    let guessDisplay = document.querySelector(".guessDisplay");
    let content = "";
    phraseToGuess.split(" ").forEach(word => {
        content += "<div class='guessDisplay__word'>";
        word.split("").forEach(character => {
            content += "<div class='guessDisplay__character guessDisplay__character--nonspace'>_</div>";
        });
        content += "<div class='guessDisplay__character'></div>";
        content += "</div>";
    })
    guessDisplay.innerHTML = content;
};

/* Rendering Letters */
const renderLetters = () => {
    let lettersDiv = document.querySelector(".letters");
    lettersDiv.innerHTMl = "";
    letters.forEach(letter => {
        lettersDiv.innerHTML += `<div class="letters__letter">${letter}</div>`;
    });
};

/* Setting up on click listeners for Hangman */
const setUpClickListenersForButtons = () =>{
    let letterButtons = document.querySelectorAll(".letters__letter");
    let guessDisplayCharacters = document.querySelectorAll(".guessDisplay__character");
    letterButtons.forEach(letter => {
        letter.addEventListener("click", e => {
            let found = false;
            for (let i = 0; i < phraseToGuess.length; i++) {
                if (phraseToGuess.split("")[i].toLowerCase() === letter.innerHTML.toLowerCase()) {
                    guessDisplayCharacters[i].innerHTML = `${letter.innerHTML.toLowerCase()}`;
                    found=true;
                    lettersGuessed[i] = true;
                }
            }
            if(!found){
                increaseStrikes();
            }
        });
    });
    checkIfWon();
}


/*Increase Strike*/
const increaseStrikes = () => {
    numStrikes++;
}


/*Check if won*/
let won = false;
const checkIfWon = () => {
    let falseFound = false;
    lettersGuessed.forEach(letterGuessed=>{
        if(letterGuessed == false){
            falseFound = true;
        }
    });
    if(falseFound == false){
        won = true;
        alert("Congratulations! You have won tha game");
    }
    console.log(won);
} 
setUpPhraseToGuess();
renderGuessDisplay();
renderLetters();
setUpClickListenersForButtons();
