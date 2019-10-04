//winner message/loser message

//GLOBAL VARIABLES
const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
const consonantsArray = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z'];
var randomLettersArray = []; //limit to 5. this is the total letters from the vowelsArray and the consonantsArray
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
var resetButton = document.getElementById('reset');

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
        console.log(randomLettersArray)
        } else {
            var disableVowels = document.getElementById('vowels').disabled = true;
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
        } else {
        var disableConsonants = document.getElementById('consonants').disabled = true;
        console.log(`the consonants button no longer works`);
    }
});

resetButton.addEventListener('click', function(e) {
    console.log('I hate my letters, bring me new ones')
    var clearVowels = document.getElementById('random-vowel-area').textContent = '';
    var clearConsonants = document.getElementById('random-consonant-area').textContent = '';
    var clearInvalidListItem = document.getElementById('invalid-word-list').textContent = '';
    var clearParaElementTwo = document.getElementById('p-two').textContent = '';
    var clearParaElementThree = document.getElementById('p-three').textContent = '';
    var clearParaElementFour = document.getElementById('p-four').textContent = '';
    var clearParaElementFive = document.getElementById('p-five').textContent = '';
    var clearPlayerInput = document.getElementById('player-input').textContent = '';
    var clearHintField = document.getElementById('hint-field').textContent = '';
    var clearHintStyle = document.getElementById('hint-field').style.visibility = 'hidden';
    playerScore = 0;
    currentScore.textContent = `Current Score: ${playerScore}`
    vowelClicks = 0;
    consonantClicks = 0;
})

//when the hint button is clicked, the hidden text field will be visible
//I have prioritized adding a reset button and clearing the active fields
hintButton.addEventListener('click', function(e) {
    console.log(`hint has been clicked`);
    playerScore = playerScore - 10;
    currentScore.textContent = `Current Score: ${playerScore}`;
    var hintField = document.getElementById('hint-field');
    hintField.style.visibility = 'visible';
    var hintParagraph = document.getElementById('hint-field')
    var hintParaText = document.createElement('p');
    hintParaText.textContent = 'What? You need help on a five letter word?'
    hintParagraph.appendChild(hintParaText);
})

//the submit button click
//This block collects the inputvalue (.value)
//and runs checkMatch function
submitButton.addEventListener('click', function(e) {
    console.log(`this is a word button has been clicked`);
    playerInputValue = document.getElementById('player-input').value;
    //checkForHint();
    console.log(playerInputValue)
    if (checkMatch(playerInputValue)) {
        console.log('We have a winning word')
    }
})

function checkWin() {
    if (playerScore < 0) {
    console.log(`WE LOSE`)
    document.getElementById('message').textContent = 'You lost'
    } else if (playerScore >= 5) {
    console.log('WE HAVE A winner')
    document.getElementById('message').textContent = 'You Win';
    // // }
    }
}


//There are two main elements to check. 
//1) does it match as a word in the dictionary?
//2) how long is it?

//1) if there is no match in the dictionary file, it is invalid.
//this takes care of any edge cases where someone inputs a period or a comma
//or uses a contraction apostrophe.

//2) the length of the player input value controls where to put the word
//in descending order.


//this is the first element to check. And this is the bulk of the game logic. This one function negates the need for three separate 
//verifications. Now, I don't need to see if the individual characters match, because I am seeing if the word is in the file at any point.
//This is the priority for my dictionary file as is, as well as any future implementations.
//when I convert to a dictionary API, I won't need to revise my entire checkMatch function. 
function checkMatch(playerInputValue) {
    var listItem = document.createElement('li');
    //array.includes returns true or false. If the playerInputValue string includes the dictionary word == That is true and is a match.
    var match = dictionary.includes(playerInputValue);
        console.log(match)
        //if NOT a match with word-dictionary, then reject it as invalid. Deduct two points.
        if (!match) {
            console.log('your input was NOT in the array')
            console.log(playerInputValue)
            var notInTheArray = document.getElementById('invalid-word-list')
            listItem.textContent = playerInputValue;
            notInTheArray.appendChild(listItem);
            console.log(notInTheArray)
            playerScore = playerScore - 2;
            currentScore.textContent = `Current Score: ${playerScore}`
            checkWin();
        } else {
            //It IS a match, therefore now valid and sent to the correct div container based on the value.length
            console.log('your input was in the array')
            switch(playerInputValue.length) {
                case 5:
                    console.log(`this is number 5`);
                    var five = document.getElementById('p-five');
                    five.textContent = playerInputValue;
                    playerScore = playerScore + 5;
                    currentScore.textContent = `Current Score: ${playerScore}`;
                    console.log(paraElementFive)
                    console.log(five)
                    checkWin();
                    break;
                case 4:
                    console.log(`this is number 4`)
                    var four = document.getElementById('p-four');
                    four.textContent = playerInputValue;
                    playerScore = playerScore + 4;
                    currentScore.textContent = `Current Score: ${playerScore}`
                    console.log(four)
                    checkWin();
                    break;
                case 3:
                    console.log(`this is number 3`)
                    var three = document.getElementById('p-three');
                    three.textContent = playerInputValue;
                    playerScore = playerScore + 3;
                    currentScore.textContent = `Current Score: ${playerScore}`
                    console.log(three)
                    checkWin();
                    break;
                case 2:
                    console.log(`this is number 2`)
                    var two = document.getElementById('p-two');
                    two.textContent = playerInputValue;
                    playerScore = playerScore + 2
                    currentScore.textContent = `Current Score: ${playerScore}`
                    console.log(two)
                    checkWin();
                    break;
                default:
                    console.log(`that is a letter not a word`)
                    var one = document.getElementById('invalids');
                    one.textContent += playerInputValue;
                    playerScore = playerScore - 2;
                    currentScore.textContent = `Current Score: ${playerScore}`
                    console.log(one)
                    checkWin();
            }   
            
    }
}

//this is the last element to check. the hint area is hidden until the player clicks
//at that point, programatically, I want to check which dictionary word is the longest left over
//then randomize which letter to hint
//append that letter to the DOM with the other characters hidden by password bulletpoints



function checkForHint(dictionary, randomLettersArray) {
    var longestWord = dictionary.reduce(function(longest, currentWord) {
        if(currentWord.length > longest.length) {
            return console.log(currentWord)
        } else {
            return console.log(longest)
        }
    })
}
//     return dictionary.filter(function(el) {
//          return true; 
// //     })
// // }
// console.log(checkForHint(dictionary, randomLettersArray));
    
//     let request = new Request( {
//         method: 'GET'
//     });
//     fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${playerInputValue}?key=492df6b1-c190-4506-97f9-9fd3a76d3eea`)
//     .then((response) => response.json())
//     .then((data) => {
//         const children = data[0].meta.id[0];
//         console.log(children)
//     })
    
//     .catch (function(err) {
//         console.log('err')
//     })

// }


        





