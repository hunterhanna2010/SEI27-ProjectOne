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
var randomLettersArray = []; //limit to 5. this is the total letters from the vowelsArray and the consonantsArray
var inputArray = []; //we compare inputArray with the randomLettersArray to check if the input matches at any point and in any order.
var vowelClicks = 0; //limit to 2
var consonantClicks = 0; //limit to 3
var playerScore = 0; //score system updates by player inputs
var playerInputValue = ''; //global scope so it can be accessed in multiple functions


//DOM REFERENCES
var vowelButton = document.getElementById('vowels');
var consonantButton = document.getElementById('consonants');
var hintButton = document.getElementById('hint');
var submitButton = document.getElementById('submit-word');
var currentScore = document.getElementById('current-score');


//EVENT LISTENERS

//when the vowel button is clicked, the vowelsArray is randomized and placed in the h2-field for the player to begin
//after two clicks, the vowel button is disabled and the vowels cannot be added to the randomLettersArray.
vowelButton.addEventListener('click', function(e) {
    console.log('vowels has been clicked')
    if (vowelClicks < 2) {
        vowelClicks++;
        var randomVowel = vowelsArray[Math.floor(Math.random() * vowelsArray.length)];
        console.log(randomVowel);
        var h2VowelElement = document.getElementById('random-vowel-area');
        console.log(h2VowelElement);
        var h2Element = document.createElement('h2')
        h2Element.textContent = randomVowel;
        h2VowelElement.appendChild(h2Element)
        randomLettersArray.push(randomVowel);
        //randomLettersArray.split(h2VowelElement.textContent)
        console.log(randomLettersArray)
        // lettersArray.splice(0, 1, lettersArray);
        // lettersArray.flat(2);
        //lettersArray.map(letter => lettersArray[i]);
        //console.log(letter);
        } else {
            var disableVowels = document.getElementById('vowels').disabled = true;
            //randomLettersArray.pop()
            console.log(`the vowels button no longer works`);
        }
});

//each time the consonant button is clicked, the consonantArray is randomized and added to the DOM as an h2 Element to begin
//after three clicks, the consonant button is disabled and the consonants cannot be aded to the randomLettersArray anymore.
consonantButton.addEventListener('click', function(e) {
    console.log('consonants has been clicked');
    if (consonantClicks < 3) {
        consonantClicks++;
        var randomConsonant = consonantsArray[Math.floor(Math.random() * consonantsArray.length)];
        console.log(randomConsonant);
        var h2ConsonantElement = document.getElementById('random-consonant-area');
        var h2Element = document.createElement('h2');
        h2Element.textContent = randomConsonant;
        h2ConsonantElement.appendChild(h2Element)
        randomLettersArray.push(randomConsonant);
        console.log(randomLettersArray)
        //console.log(h2ConsonantElement.textContent);
        } else {
        var disableConsonants = document.getElementById('consonants').disabled = true;
        console.log(`the consonants button no longer works`);
    }
});

//when the hint button is clicked, the hidden text field will be visible

hintButton.addEventListener('click', function(e) {
    console.log(`hint has been clicked`);
    playerScore = playerScore - 10;
    currentScore.textContent = `Current Score: ${playerScore}`;
    var hintField = document.getElementById('hint-field');
    hintField.style.visibility = 'visible';
})

//the submit button click
//This block collects the inputvalue (.value)
//and pushes it into inputArray in order to proceed with game functions.
submitButton.addEventListener('click', function(e) {
    console.log(`this is a word button has been clicked`);
    playerInputValue = document.getElementById('player-input').value;
    // inputArray.push(playerInputValue);
    // console.log(inputArray)
    console.log(playerInputValue)
    if (checkLegal(playerInputValue)) {
        checkDictionary(playerInputValue);
        checkLetterCount(playerInputValue)
    };
    
})

//There are five elements to check. 1) compare the arrays, if they do not compare, there is no reason to checkDictionary or count their length


//this is the first element to check. This function compares if playerInputs are equivalent to the randomLetterArray only.
//order does not matter, only if there is an instance where the playerInput compares true to the randomLetterArray.
//in this block, I do not check if it is a word, that will be the checkDictionary function.
//if true, it is valid to the randomLettersArray and can go in the correct area
//else, it is false, therefore invalid, because the inputArray did not match the randomLettersArray
function checkLegal(playerInputValue) {
    //check if the length of the guess is longer than the random letters array
//     if (playerInputValue > randomLettersArray.length) {
//         //iterate over playerInput
//         for (let i = 0; i < inputArray.length; i++) {
//             var legal = randomLetterArray.includes(inputArray[i])
//             console.log(legal)
//         }
//     }
// }
    
    
    // check for legality
    // see if what the person imputed has any characters that are not in your random letters array
    // return value will be a boolean

    // iterate through MOST RECENT guess.
    // for looping through the recentGuess.length
    // if random letters array includes recentGuess[i]
    var listItem = document.createElement('li');
    //for (let i = 0; i < inputArray.length; i++) {
        var match = dictionary.includes(playerInputValue);
        console.log("Input array at i is: " + playerInputValue)
        //console.log("🍑"+i)
        console.log(match)
        if (!match) {
            console.log('your input was NOT in the array')
            console.log(playerInputValue)
            var notInTheArray = document.getElementById('invalid-word-list')
            playerScore = playerScore - 2;
            listItem.textContent = playerInputValue;
            notInTheArray.appendChild(listItem);
            console.log(notInTheArray)
        } else {
            console.log('your input was in the array')
            switch(playerInputValue.length) {
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
            
    }
}


//this is the second element to check. This function tests whether the input includes a word from the dictionary file
//if it is true, it is a word in the dictionary, at it to a new array 
//else, it is not in the dictionary, and is false, therefore invalid.
function checkDictionary(playerInputValue) {
    if (dictionary[playerInputValue]) {
        return true;
        // if (dictionary.hasOwnProperty(word)) {
        //     console.log('this is word (' + 
        //     word + ') for sure. Value: ' + dictionary[word]);
        //}
    } 
    return false;
}
//         else {
//           console.log(word); // toString or something else
//         }
//       }
    // for (let [word, value] of Object.entries(dictionary)) {
    //     let value = console.log((`${word}: ${value}`));
    //     console.log(value)
    // }
//}
    //checkDictionary();
    
//This is the third element to check. the switch statement tells the valid word where to go and how many points to give to the player.
//The switch is based on letter count. If the input is more than five characters - it is invalid, and will be added to the invalid list.
//this switch statement is working in its current implementation.
function checkLetterCount(playerInputValue) {
    
}
    




//this fourth element is to iterate over the randomLettersArray and see how many word combinations are present
//leftOver words must be english words defined in the word-dictionary file, exclude one letter words and the articles 'a', 'an', and 'the'
//player cannot finish currentGame until all words are solved.
//display winning message if all words are solved
//also, display message if no words can be found at all, therefore, direct player to reset page
function checkWordsLeft() {

}

//this is the fifth element to check. the hint area is hidden until the player clicks
//at that point, programatically, I want to check which dictionary word is the longest left over
//then randomize which letter to hint
//append that letter to the DOM with the other characters hidden by password bulletpoints
function checkForHint() {

}


        







//GAME FUNCTIONS




