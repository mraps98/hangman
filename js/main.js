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
        "Theres something about Mary",
        "Inception",
        "The Dark Knight Rises",
        "Pulp Fiction",
        "Batman Returns",
        "Superbad",
        "Superman Returns",
        "High School Musical",
        "Inspector Gadget",
        "Bad moms",
        "Tron Legacy",
        "John Wick",
        "Goodfellas",
        "Reservoir Dogs",
        "Airplane",
        "Rocky",
        "Rambo",
        "Memento",
        "Slumdog Millionaire",
        "Seven",
        "Die Hard",
        "Ghostbusters",
        "Brokeback Mountain",
        "Almost Famous",
        "The Lion King",
        "Groundhog Day",
        "West Side Story",
        "Good Will Hunting",
        "The Big Lebowski",
        "The Usual Suspects",
        "Saving Private Ryan",
        "Titanic",
        "The Matrix",
        "Toy Story",
        "Alien",
        "The Shining",
        "When Harry met Sally",
        "A Clockwork Orange",
        "Fargo",
        "The Empire Strikes Back",
        "Blade Runner",
        "The Breakfast Club",
        "Jaws",
        "Lawrence of Arabia",
        "To Kill a Mocking Bird",
        "Forrest Gump",
        "Back to the Future",
        "Star Wars",
        "The GodFather",
        "Casablance"
    ]
};

const letters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
let numStrikes = 0;


/* Deciding the word / phrase to guess */
let phraseToGuess;
let lettersGuessed;
const setUpPhraseToGuess = () => {
    lettersGuessed = [];
    phraseToGuess = guessingOptions.hollywoodMovies[Math.floor((Math.random() * 100000) % guessingOptions.hollywoodMovies.length)];
    console.log(phraseToGuess);
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
    lettersDiv.innerHTML = "";
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
            if(letter.classList.contains("letters__letter--inactive")){
                
            }else{
                console.log("clicked");
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
                letter.classList.add("letters__letter--inactive");
                checkIfWon();
            }
        });
    });
}


/*Increase Strike*/
const increaseStrikes = () => {
    numStrikes++;
    let strikesDisplay__strikes = document.querySelector(".strikesDisplay__strikes");
    strikesDisplay__strikes.innerHTML = numStrikes;
    if(numStrikes == 6){
        alert("Game over. The phrase was " + phraseToGuess);
        reset();
    }
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
        reset();
    }
} 


/* reset */
const reset = () => {
    numStrikes = 0;
    let strikesDisplay__strikes = document.querySelector(".strikesDisplay__strikes");
    strikesDisplay__strikes.innerHTML = numStrikes;
    setUpPhraseToGuess();
    renderGuessDisplay();
    renderLetters();
    setUpClickListenersForButtons();
}
alert("Guess the movie (hollywood)");
reset();