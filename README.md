# SEI27-ProjectOne
Project One Deliverable
I am an SEI student with General Assembly in Seattle. I am very new to this world of coding, but I enjoy putting puzzles together, and there is nothing more exhilirating than when a puzzle begins to take shape. So for this project One, I am implementing a word scrambler game. The process will challenge me significantly, based on the loops, array structures, and word sources I would like to fetch in order to distinguish between valid and invalid word choices that the player inputs. Here are the original markups I would like to implement. Throughout the week, I'll update the results of each day's work. - Day 1

I wrestled with myself through most of the day wondering whether my original structure could work through the parameters of the five main word validation processes: 1) word length 2) does the player input match the randomized letters the game given?
3) check the dictionary file to see if that word exists 4) How many words are left over for the player to guess 5) if the player clicks hint, give one randomized character hint for the longest word left over. What I have accomplished so far:
1) When the player submits their word choice, my program measures the input by length. Based on the length, that input goes to the specified area in the game. 2) Then, using Array.includes(), the player's inputs are matched to the lettersArray. If the player selects the incorrect letter in any order, it returns false, therefore no match is found and is added to the invalid inputs list. 3) Next, checkDictionary is an object. Using Object.entries, I composed a for... in loop that so far only console.logs the dictionary file.  -Day 2

More wrestling for day 3. The problem was I was over-complicating the process. Instead of first checking if the word is a match to the dictionary file, I was introducing at least three criteria points even before checking to see if it is a word. I chose to flip that around. For efficiency sake, why do three steps when one verifies the input and removes the outliers, too.
The includes method worked very well as I converted the word-dictionary file from an object to an array structure. My main condition is simple now: is there a match at all in the file, if not, it is invalid. If so, valid.  Then we check the input value for length. The switch statement still controls that. -Day 3

Finished the game on day four. Added a reset button because so if you are dealt a really bad set of letters, you can get click for vowels and consonants again.  It clears all the contents of the game at its current state: All the points, the win/lose message, the invalid word guesses, and the valid words in their respective areas. I was able to have a few people play the game from start to finish and get their feedback. One was good, another was embarrassing so it gave me a chance to review where I was at to avoid any surprises. -Day 4

It is submission day. I was unable to get my hint function to work. Also, I had wanted to figure out how many words are left for the player to find.  I abandonded those and set a conditional for points winning and changed the h1 banner to reflect a win or lost game. I can wrap my head around what I need to do for both functions.  I would use a combination of Array.sort and .filter with nested loops. Here's my thought: I could sort the dictionary file alphabetically, shortest to longest, or longest to shortest and then reference the randomLettersArray to see if it includes any part if the dictionary word strings.  If it inlcudes the same characters, then return true and give the next letter to the player when they click the hint button. If it returns false, then there are no matches, and there is no hint to give.  I suppose this step could be very similar to how many playable words are there to find from the randomLettersArray. At this point, I could not figure out the correct steps and in the right order to make it happen. I did make the effort, but not attainable for me at this point.


The next immediate step would be to convert my dictionary file from a hard-coded text file to an api dictionary source.  While playing the game, I noticed how many variations I could come up with that frustrated me that it was not on the list.  I have nearly 450 words, but I like words, so for me it was frustrating to be limited with the word choices that matched the dictionary file.  An API would certainly solve this.  However, I have a deliverable product because of the array.includes method and the switch statement. This was a DOM manipulation/array studying project that helped me learn so much about how to create elements, how to move them to areas, and then how to remove them successfully. I have gained a lot of traction in implementing these steps and producing a viable product that I enjoyed playing, that could easily handle adding more randomized letters for the player, and I would like to continue refining.


# weekOneAssignment
