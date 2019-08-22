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

function guessTheNumber (question, rightAnswer,responseIfTrue,responseIfFalse,responseIfFail,questionNumber,attempts){
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
      alert(responseIfFail);
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
//universal attributes of a question
//questionNumber, questionType, questionText, rightAnswer, responseIfTrue, responseIfFalse

//unique to multiple choice and guess the number:
//attempts, responseIfFail

//unique to trueOrFalse:
//wrongAnswer

//question-based global variables
var today = new Date();
var findCurrentHour = today.getHours();
var winePreference = ['pinot noir','zifendel','brut'];
var testResponses = ['yes','maybe','perhaps','indubitably'];
var cohort = ['sian','bree','clay','james','noah','diana','leo','essan','jack','kevin','roman','brett','lena','nicole','evan'];

var questionObject = {
  
  questionOne : {
    questionType:'trueOrFalse',
    question:'Chuck Norris?',
    rightAnswer:'always',
    wrongAnswer:'never',
    responseIfTrue:'you\'re the best - *around*',
    responseIfFalse:'Roundhouse Kick to the Face!',
  },
  
  questionTwo : {
    questionType:'trueOrFalse',
    question:'In Star Wars, was the Emperor right?',
    rightAnswer:'yes',
    wrongAnswer:'die sith!',
    responseIfTrue:'Canon means nothing',
    responseIfFalse :'Only a Sith deals in absolutes.',
  },

  questionThree : {
    questionType:'guessTheNumber',
    question:'What time of day is it?',
    rightAnswer: findCurrentHour,
    responseIfTrue: 'Blimey, it\'s late isn\'t it?',
    responseIfFalse: 'Nope!',
    responseIfFail: '',
    attempts: 3
  },

  questionFour : {
    questionType:'multipleChoice',
    question:'What is my favorite wine?',
    rightAnswer: winePreference,
    responseIfTrue: 'Correct! I like '+winePreference+' wines',
    responseIfFalse: 'Nope! Guess again!',
    responseIfFail: 'Sorry, we just don\'t like the same wines. I like '+winePreference+' wines.',
    attempts: 4
  }
}

var allQuestions = [];

for(var checkQuestions in questionObject) {
  allQuestions.push(questionObject[checkQuestions]);
}

numberOfQuestions = allQuestions.length;

function guessingGame(questionsAsObjects){
  for(var i = 0; i<questionsAsObjects.length; i++){
    //check to see if the question is true or false
    if(questionsAsObjects[i].questionType === 'trueOrFalse'){
      trueOrFalse(questionsAsObjects[i].question,questionsAsObjects[i].rightAnswer,questionsAsObjects[i].wrongAnswer,questionsAsObjects[i].responseIfTrue,questionsAsObjects[i].responseIfFalse,i+1);
    } else if(questionsAsObjects[i].questionType === 'guessTheNumber'){
      guessTheNumber(questionsAsObjects[i].question,questionsAsObjects[i].rightAnswer,questionsAsObjects[i].responseIfTrue,questionsAsObjects[i].responseIfFalse,questionsAsObjects[i].responseIfFail,i+1,questionsAsObjects[i].attempts);
    } else if(questionsAsObjects[i].questionType === 'multipleChoice'){
      multipleChoice(questionsAsObjects[i].question,questionsAsObjects[i].rightAnswer,questionsAsObjects[i].responseIfTrue,questionsAsObjects[i].responseIfFalse,questionsAsObjects[i].responseIfFail,i+1,questionsAsObjects[i].attempts);
    }
  }
  findScore();
}

function findScore(){
if(countOfTrues > (numberOfQuestions/2)){
  alert('You passed, '+userName+' You got '+countOfTrues+' out of '+numberOfQuestions+' for a score of '+((countOfTrues/numberOfQuestions)*100)+'%');
} else {
  alert('Sorry '+userName+' You got '+countOfTrues+' out of '+numberOfQuestions+' for a score of '+((countOfTrues/numberOfQuestions)*100)+'%');
}
}
