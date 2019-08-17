'use strict';

console.log('I live!');
//finding the user's name
var cohort = [
'sean',
'bree',
'clay',
'james',
'noah',
'diana',
'leo',
'essan',
'jack',
'kevin',
'roman',
'brett',
'lena',
'nicole',
'ryan'
];

var userName = prompt('Hi there! What is your name?');
var checkUserName = 0;
userName = userName.toLowerCase();
for (var i = 0; i<cohort.length;i++){
  if(cohort[i] === userName){
    console.log(userName+' was found at '+i);
    alert('Hi '+userName);
    break;
  } else {
    console.log(userName+' was not found at '+i);
    checkUserName++;
  }
}
if(checkUserName === cohort.length){
    alert('You aren\'t in the cohort or a TA or instructor, '+userName+'!');
}

console.log('Beginning first question');
//first question
  var countOfTrues = 0;
  var countOfFalses = 0;
  var countOfFails = 0;

  var today = new Date();
  var findCurrentHour = today.getHours();
  var guessCurrentHour = '';
  var attempts = 0;

    while (guessCurrentHour === '' && attempts < 4){
      guessCurrentHour = prompt('what is the current hour of the day?');
console.log('user inputted '+guessCurrentHour);
      try {
        guessCurrentHour = parseInt(guessCurrentHour);
        attempts++;
        if(guessCurrentHour === findCurrentHour){
          alert('Yay '+userName+'! You got it right! It took you '+attempts+' attempts to get it right');
          countOfTrues++;
console.log('user input correct');
        } else {
          alert('Well, your computer clock seems to think otherwise');
          countOfFalses++;
          guessCurrentHour = '';
console.log('user input incorrect');
        }
      }
      catch {
        attempts++;
        alert('Your input was invalid, '+userName+'. Numbers only please.');
        countOfFails++;
        guessCurrentHour = '';
console.log('user input invalid');
      }
    }
    if(attempts === 4){
        alert('You tried 4 times and didn\'t get it right, '+userName+'. The current hour is '+findCurrentHour);
  }

console.log('end question 1');
console.log('count of correct inputs: '+countOfTrues);
console.log('count of inccorrect inputs: '+countOfFalses);
console.log('count of invalid inputs: '+countOfFails);

console.log('Beginning second question');
//second question
  var guessWoodChuckCapacity = '';
  while (guessWoodChuckCapacity === ''){
    guessWoodChuckCapacity = prompt('I\'m a real trivia nerd. So. How much wood could a woodchuck chuck if a woodchuck could chuck wood?');
console.log('user inputted '+guessWoodChuckCapacity);
    guessWoodChuckCapacity = guessWoodChuckCapacity.toLowerCase();
    if(guessWoodChuckCapacity === 'too much'){
      alert('You\'re right! Woodchucks can ingest or \"chuck\" as much as 1/5 of a pound of wood per day, roughly equal to a woodchuck\'s total size. Crazy right?');
      countOfTrues++;
console.log('user input correct');
    } else if(guessWoodChuckCapacity === 'not enough'){
      alert('Guess it depends on your definition. Woodchucks can move approximately 700 pounds of wood per day, per wikipedia.');
      countOfFalses++;
console.log('user input incorrect');
    } else{
      alert('Invalid entry. Only \"too much\" or "\not enough\" accepted. Try again.');
      countOfFails++;
      guessWoodChuckCapacity = '';
console.log('user input was invalid');
    }
  }

console.log('end question 2');
console.log('count of correct inputs: '+countOfTrues);
console.log('count of inccorrect inputs: '+countOfFalses);
console.log('count of invalid inputs: '+countOfFails);
  
console.log('Beginning third question');
//third question
  var hexMath = '';
  while (hexMath === ''){
    hexMath = prompt('Sometimes, it\'s the details that matter. Is 5 + 5 = B?');
    hexMath = hexMath.toLowerCase();
console.log('user inputted '+hexMath);
    if(hexMath === 'y'|| hexMath === 'yes'||hexMath === 'true'){
      alert('Nope. In Hexidecimal land, that is a true statement. Base 16, sucker!');
console.log('user input incorrect');
      countOfFalses = countOfFalses + 1;
    } else if(hexMath === 'n'|| hexMath === 'no'|| hexMath === 'false'){
      alert('Yep! Hexidecimal is super weird right? But it\'s just a different way to look at numbers');
      countOfTrues = countOfTrues + 1;
console.log('user input correct');
    } else{
      alert('Invalid entry. Only yes/no, true/false, y/n accepted. Try again.');
      countOfFails = countOfFails + 1;
      hexMath = '';
console.log('user input was invalid');
    }
  }

console.log('end question 3');
console.log('count of correct inputs: '+countOfTrues);
console.log('count of inccorrect inputs: '+countOfFalses);
console.log('count of invalid inputs: '+countOfFails); 

console.log('Beginning fourth question');
  //fourth question
  var binaryMath = '';
  while (binaryMath === ''){
    binaryMath = prompt('I love logic puzzles. Is 10 + 11 = 101?');
    binaryMath = binaryMath.toLowerCase();
    if(binaryMath === 'y'|| binaryMath === 'yes'||binaryMath === 'true'){
      alert('Yep! just because it isn\'t in decimal, doesn\'t make it wrong.');
      countOfTrues = countOfTrues + 1;
    } else if(binaryMath === 'n'|| binaryMath === 'no'|| binaryMath === 'false'){
      alert('Nope. Binary! Try again!');
      countOfFalses = countOfFalses + 1;
      binaryMath = '';
    } else{
      alert('Invalid entry. Only yes/no, true/false, y/n accepted. Try again.');
      countOfFails = countOfFails + 1;
      binaryMath = '';
console.log('user input was invalid');
    }
  }

console.log('end question 4');
console.log('count of correct inputs: '+countOfTrues);
console.log('count of inccorrect inputs: '+countOfFalses);
console.log('count of invalid inputs: '+countOfFails); 

console.log('Beginning fifth question');
  //fifth question
  var wineYN = '';
  while (wineYN === ''){
    wineYN = prompt('Do I like wine?');
console.log('user inputted '+wineYN);
    wineYN = wineYN.toLowerCase();
    if(wineYN === 'whoo'|| wineYN === 'yes'|| wineYN === 'true' || wineYN === 'y'){
      alert('Heck yeah! 3x the alcolhol of beer, and a lot smoother too. Plus you get to be a snob.');
      countOfTrues = countOfTrues + 1;
console.log('user input correct');
    } else if(outOfIdeas === 'boo'|| outOfIdeas === 'no'|| outOfIdeas === 'false' || outOfIdeas === 'f'){
      alert('Boo! Wine is awesome!');
      countOfFalses = countOfFalses + 1;
      outOfIdeas = '';
console.log('user input incorrect');
    } else{
      alert('Invalid entry. Only whoo/boo, yes/no, true/false, y/n accepted. Try again.');
      countOfFails = countOfFails + 1;
      outOfIdeas = '';
console.log('user input was invalid');
    }
  }

console.log('end question 5');
console.log('count of correct inputs: '+countOfTrues);
console.log('count of inccorrect inputs: '+countOfFalses);
console.log('count of invalid inputs: '+countOfFails); 

console.log('beginning of question 6');
  //sixth question
  var winePreference = [
    'pinot noir',
    'zifendel',
    'brut',
  ]
  var wineCheck = 0;
  var wineAttempts = 1;
  var wineGuess = '';
  while (wineGuess === '' && wineAttempts < 6) {
    console.log('beginning of while loop. Iteration '+wineAttempts);
    wineAttempts++;
    wineGuess = prompt('Follow up question. What is a favorite wine of mine?').toLowerCase();
    for (var i = 0;i<winePreference.length;i++){
      wineCheck++;
      if(winePreference[i] === wineGuess){
        alert('Yay '+userName+' you got it!');
        alert('I like pino noir, zifendel, and brut wines');
        break;
      } else {
        console.log(wineGuess+' is not '+winePreference[i]);
      }
    }
    if(wineCheck = winePreference.length){
      alert('Try again!');
      wineGuess = '';
    }
  }
if(wineAttempts === 6){
  alert('Sorry '+userName+', it seems like we don\'t like the same wines.')
  alert('I like pino noir, zifendel, and brut wines');
}

console.log('end question 6');
console.log('count of correct inputs: '+countOfTrues);
console.log('count of inccorrect inputs: '+countOfFalses);
console.log('count of invalid inputs: '+countOfFails); 

if(countOfTrues > 4){
  alert('You passed, '+userName+' You got '+countOfTrues+' for a score of '+((countOfTrues/6)*100));
} else {
  alert('Sorry '+userName+' You got '+countOfTrues+' for a score of '+((countOfTrues/6)*100));
}

