'use strict';

console.log('I live!');
//Global variable declaration
var countOfTrues = 0;
var countOfFalses = 0;
var countOfFails = 0;
var userName;
var checkUserName;
var normalizeUserName;
var numberOfQuestions;


//question-based global variables
var cohort = ['sian','bree','clay','james','noah','diana','leo','essan','jack','kevin','roman','brett','lena','nicole','evan'];
var today = new Date();
var findCurrentHour = today.getHours();
var winePreference = ['pinot noir','zifendel','brut'];
var testResponses = ['yes','maybe','perhaps','indubitably'];

function findStuffInThings (variable,name){
  for(var i = 0; i < variable.length; i++) {
    if(variable [i] === name) {
      console.log (name + 'is at position ' + i);
        return i;
      }
    }
    if(i === variable.length) {
      console.log ('function findStuffInThings did not find ' + name + ' in ' + variable);
      return -1;
    }
  }

function trueOrFalse (question, rightAnswer, wrongAnswer, responseIfTrue, responseIfFalse,questionNumber){
  console.log('beginning question '+questionNumber);
  var checkIfComplete = '';
  while (checkIfComplete === ''){
    checkIfComplete = prompt(question);
console.log('user inputted '+ checkIfComplete);
  checkIfComplete = checkIfComplete.toLowerCase();
    if(checkIfComplete === rightAnswer){
      alert(responseIfTrue);
      countOfTrues++;
console.log('user input correct');
      return 1;
    } else if(checkIfComplete === wrongAnswer){
      alert(responseIfFalse);
      countOfFalses++;
console.log('user input incorrect');
    } else{
      alert('Invalid entry. Only ' + rightAnswer + ' or ' + wrongAnswer + ' accepted. Try again.');
      countOfFails++;
      checkIfComplete = '';
console.log('user input was invalid');
    }
  }
console.log('end question '+questionNumber);
console.log('count of correct inputs: '+countOfTrues);
console.log('count of inccorrect inputs: '+countOfFalses);
console.log('count of invalid inputs: '+countOfFails);
}

function guessTheNumber (question, rightAnswer,responseIfTrue,responseIfFalse,questionNumber,attempts){
  console.log('beginning question '+questionNumber);
  for (var i = 0; i<attempts; i++){
    var checkIfComplete = prompt(question);
console.log('user inputted '+ checkIfComplete);
  checkIfComplete = Number(checkIfComplete);
    if(checkIfComplete === rightAnswer){
      alert(responseIfTrue);
      countOfTrues++;
console.log('user input correct');
      return 1;
    } else {
      alert(responseIfFalse);
      countOfFails++;
console.log('user input incorrect');
    }
  }
console.log('end question '+questionNumber);
console.log('count of correct inputs: '+countOfTrues);
console.log('count of inccorrect inputs: '+countOfFalses);
console.log('count of invalid inputs: '+countOfFails);
  return 0;
}

function multipleChoice (question,rightAnswer,responseIfTrue,responseIfFalse,responseIfFail,questionNumber,attempts){
  console.log('beginning question '+questionNumber);
  for (var i = 0; i<attempts; i++){
    var checkIfComplete = prompt(question);
console.log('user inputted '+checkIfComplete);
    checkIfComplete = checkIfComplete.toLowerCase();
    if(findStuffInThings(rightAnswer,checkIfComplete) === -1){
      alert(responseIfFalse);
console.log('user input incorrect');
      countOfFalses++;
    } else {
      alert(responseIfTrue);
console.log('user input correct');
      countOfTrues++
      return 1;
    } 
  }
console.log('end question '+questionNumber);
console.log('count of correct inputs: '+countOfTrues);
console.log('count of inccorrect inputs: '+countOfFalses);
console.log('count of invalid inputs: '+countOfFails);
  alert(responseIfFail);
  return 0;
}

//finding the user's name
userName = prompt('Hi there! What is your name?');
normalizeUserName = userName.toLowerCase();
checkUserName = findStuffInThings(cohort, normalizeUserName);
if(checkUserName === -1) {
  alert ('We didn\'t find you on the  ' + userName);
} else {
  alert ('Welcome, ' + userName);
}



numberOfQuestions = trueOrFalse('Chuck Norris?', 'always' , 'never', 'you\'re the best - *around*.', 'roundhouse kick to the face!',1);
numberOfQuestions += multipleChoice('is this a test?',testResponses,'correct','incorrect','you used up your attempts',2,2);
numberOfQuestions += multipleChoice('what do you think my favorite wines are?',winePreference,'Correct! I like '+winePreference+' wines','Sorry, I don\'t like that one. Try again.','Sorry, you used up your answers. I like '+winePreference+' wines.',3,2);
numberOfQuestions += guessTheNumber('time of day is it?',findCurrentHour,'blimey it\'s late it?','Nope! Guess again!',3,2);

if(countOfTrues > (numberOfQuestions/2)){
  alert('You passed, '+userName+' You got '+countOfTrues+' for a score of '+((countOfTrues/numberOfQuestions)*100)+'%');
} else {
  alert('Sorry '+userName+' You got '+countOfTrues+' for a score of '+((countOfTrues/numberOfQuestions)*100)+'%');
}

