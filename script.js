console.log('This is project One');

const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z'];
var vowelClicks = 0; //limit to 3
var consonantClicks = 0; //limit to 2
var vowelButton = document.getElementById('vowels');
vowelButton.addEventListener('click', function(e) {
    console.log('vowels has been clicked')
    if (vowelClicks < 2) {
        vowelClicks++
        var randomVowel = vowels[Math.floor(Math.random() * vowels.length)];
        console.log(randomVowel)
        var h2VowelElement = document.getElementById('random-vowel-area')
        h2VowelElement.textContent += randomVowel;
        console.log(h2VowelElement);
        } else {
            var disableVowels = document.getElementById('vowels').disabled = true;
            console.log(`the vowels button no longer works`)
        }
})

var consonantButton = document.getElementById('consonants');
consonantButton.addEventListener('click', function(e) {
    console.log('consonants has been clicked')
    if (consonantClicks < 3) {
        consonantClicks++
        var randomConsonant = consonants[Math.floor(Math.random() * consonants.length)];
        console.log(randomConsonant)
        var h2ConsonantElement = document.getElementById('random-consonant-area')
        h2ConsonantElement.textContent += randomConsonant;
        console.log(h2ConsonantElement);
    } else {
        var disableConsonants = document.getElementById('consonants').disabled = true;
        console.log(`the consonants button no longer works`)
    }
})