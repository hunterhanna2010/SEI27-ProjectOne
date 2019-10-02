//TO DO
//gather dictionary source: word api or text file? currently using a text file of the 100 most used English words
//string conversion to array
//array split in order to process each character individually
//loop through array
//array concat based on the player's guess
//array push into two separate arrays: 1) valid words 2) invalid words
//loop through both arrays to parse programmatically which one has more
//apply rounds system: 3 complete rounds for a win
//randomize which character to give to player when they click hint. 
//I want to start with longest word left to correctly guess.
//game settings: initialize game, start game, play game, win game, lose game, restart game
//winner message/loser message




//GLOBAL VARIABLES
const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
const consonantsArray = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z'];
var randomLettersArray = []; //limit to 5. this is the vowelsArray concated with the consonantArray
var inputArray = []; //we will compare this array with the vowels array to check if the player clicked an input that was not in the randomLettersArray
var vowelClicks = 0; //limit to 2
var consonantClicks = 0; //limit to 3
var playerScore = 0; //score system updates by player inputs
playerInputValue = ''; 


//DOM REFERENCES
var vowelButton = document.getElementById('vowels');
var consonantButton = document.getElementById('consonants');
var hintButton = document.getElementById('hint');
var submitButton = document.getElementById('submit-word');
var currentScore = document.getElementById('current-score');


//EVENT LISTENERS

//when the vowel button is clicked, the vowelsArray is randomized and placed in the h2-field for the player to begin
//after two clicks, the vowel button is disabled and the vowels cannot be added to the randomLettersArray anymore.
vowelButton.addEventListener('click', function(e) {
    console.log('vowels has been clicked')
    if (vowelClicks < 2) {
        vowelClicks++;
        var randomVowel = vowelsArray[Math.floor(Math.random() * vowelsArray.length)];
        console.log(randomVowel);
        var h2VowelElement = document.getElementById('random-vowel-area');
        h2VowelElement.textContent = randomVowel;
        console.log(h2VowelElement.textContent);
        randomLettersArray.push(h2VowelElement.textContent);
        // lettersArray.splice(0, 1, lettersArray);
        // lettersArray.flat(2);
        console.log(randomLettersArray);
        //lettersArray.map(letter => lettersArray[i]);
        //console.log(letter);
        } else {
            var disableVowels = document.getElementById('vowels').disabled = true;
            randomLettersArray.pop()
            console.log(`the vowels button no longer works`);
        }
});

//each time the consonant button is clicked, the consonantArray is randomized and added to the DOM as an h2 Element to begin
//after two clicks, the consonant button is disabled and the consonants cannot be aded to the randomLettersArray anymore.
consonantButton.addEventListener('click', function(e) {
    console.log('consonants has been clicked');
    if (consonantClicks <= 3) {
        consonantClicks++;
        var randomConsonant = consonantsArray[Math.floor(Math.random() * consonantsArray.length)];
        console.log(randomConsonant);
        var h2ConsonantElement = document.getElementById('random-consonant-area');
        h2ConsonantElement.textContent = randomConsonant;
        randomLettersArray.push(h2ConsonantElement.textContent);
        //lettersArray.map(letter);
        console.log(randomLettersArray)
        //letter.textContent += randomConsonant;
        console.log(h2ConsonantElement.textContent);
        } else {
        var disableConsonants = document.getElementById('consonants').disabled = true;
        randomLettersArray.pop();
        console.log(`the consonants button no longer works`);
    }
});

//when the hint button is clicked, the hidden text field will be visible
//TODO provide one character hint for the longest word left to find.
hintButton.addEventListener('click', function(e) {
    console.log(`hint has been clicked`);
    playerScore = playerScore - 10;
    currentScore.textContent = `Current Score: ${playerScore}`;
    var hintField = document.getElementById('hint-field');
    hintField.style.visibility = 'visible';
})

//at the submit button click, there are four elements to check. 
//This block checks the length of the input (.value) only
//Sends that input to appropriate area based on input length.
submitButton.addEventListener('click', function(e) {
    console.log(`this is a word has been clicked`);
    var playerInputValue = document.getElementById('player-input').value;
    var letterCount = playerInputValue.length;
    inputArray.push(playerInputValue);
    compareArrays();
    console.log(inputArray)
    console.log(playerInputValue)
    console.log(letterCount);
    switch(letterCount) {
        case 5:
            console.log(`this is number 5`);
            var five = document.getElementById('five');
            var paraElementFive = document.createElement('P');
            paraElementFive.textContent = playerInputValue;
            five.append(playerInputValue);
            playerScore = playerScore + 5;
            currentScore.textContent = `Current Score: ${playerScore}`;
            console.log(paraElementFive)
            console.log(five)
            break;
        case 4:
            console.log(`this is number 4`)
            var four = document.getElementById('four');
            var paraElementFour = document.createElement('P');
            paraElementFour.textContent = playerInputValue;
            four.append(playerInputValue);
            playerScore = playerScore + 4;
            currentScore.textContent = `Current Score: ${playerScore}`
            console.log(four)
            break;
        case 3:
            console.log(`this is number 3`)
            var three = document.getElementById('three');
            var paraElementThree = document.createElement('P');
            paraElementThree.textContent = playerInputValue;
            three.append(playerInputValue);
            playerScore = playerScore + 3;
            currentScore.textContent = `Current Score: ${playerScore}`
            console.log(three)
            break;
        case 2:
            console.log(`this is number 2`)
            var two = document.getElementById('two');
            var paraElementTwo = document.createElement('P');
            paraElementTwo.textContent = playerInputValue;
            two.append(playerInputValue);
            playerScore = playerScore + 2
            currentScore.textContent = `Current Score: ${playerScore}`
            console.log(two)
            break;
        default:
            console.log(`that is a letter not a word`)
            var one = document.getElementById('invalids');
            one.textContent += playerInputValue;
            playerScore = playerScore - 2;
            currentScore.textContent = `Current Score: ${playerScore}`
            console.log(one)
    }
})
//this is the second element to check. This function compares if playerInputs is equivalent to the playerArray only.
//order does not matter, only if there is an instance where the playerInput compares true to the playerArray.
//in this block, I do not check if it is a word, that will be the next element to check.
//if true, it is valid to the randomLettersArray and can go in the correct area
//else, it is invalid and needs to go to the invalid list because the inputArray did not match the randomLettersArray
function compareArrays() {
    for (let l = 0; l < randomLettersArray.length; l++) {
    var match = inputArray.includes(randomLettersArray[l]);
    console.log(match)
        if (!match) {
        console.log('your input was NOT in the array')
        var notInTheArray = document.getElementById('invalids')
        notInTheArray.textContent += playerInputValue;
        } else {
        console.log('your input was in the array')
        }
    }
}

//this is the third element to check. This file tests whether the input is a valid word
//if it is true, it is a word in the dictionary, so put it in the right area
//else, it is not in the dictionary, and is false, therefore invalid.
function checkDictionary() {

}
//this is the fourth element to check. the hint area is hidden until the player clicks
//at that point, programatically, I want to check which dictionary word is the longest left over
//then randomize which letter to give
//append that letter to the DOM with the other characters hidden by password bulletpoints
function hintZone() {

}


        







//GAME FUNCTIONS




