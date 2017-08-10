'use strict';

alert('ITS TIME TO PLAY..... THREE TRUTHS AND TWO LIES! (yes or no answers only) For the first five questions, there are only two wrong answers, so guess wisely!');
var q1 = 'First what is your name?';
var name = prompt(q1);

alert('Time to play! Yes or No only!');
var q2 = 'Truth/Lie #1: My great-grandfather was one of the attorneys that put Al Capone in jail.';

var answer = prompt(q2);
var res = answer.toUpperCase();
var answerlog = [];
var qlog = [];
var correctAns = 0;
var firstFive = [];
if (res === 'Y' || res === 'Yes'){
  correctAns++;
}
console.log(correctAns);
qlog.push(q2);
console.log(res);
answerlog.push(res);
var q2 = 'Truth/Lie #2: I\'m the biggest Jimi Hendrix fan you\'ll ever meet.';
qlog.push(q2);

answer = prompt(q2);
res = answer.toUpperCase();
console.log(res);
answerlog.push(res);
if (res === 'Y' || res === 'Yes'){
  correctAns++;
}
console.log(correctAns);
var q2 = 'Truth/Lie #3: I didn\'t know how to spell my middle name for the first 16 years of my life.';
qlog.push(q2);

answer = prompt(q2);
res = answer.toUpperCase();
console.log(res);
answerlog.push(res);
if (res === 'Y' || res === 'Yes'){
  correctAns++;
}
console.log(correctAns);
var q2 = 'Truth/Lie #4: I once sat next to Martin Sheen on a plane and threw up on him after having one too many drinks...';
qlog.push(q2);

answer = prompt(q2);
res = answer.toUpperCase();
console.log(res);
answerlog.push(res);
if (res === 'N' || res === 'NO'){
  correctAns++;
}
console.log(correctAns);
var q2 = 'Truth/Lie #5: I have a birthmark on my back that\'s shaped like an elephant.';
qlog.push(q2);

answer = prompt(q2);
res = answer.toUpperCase();
console.log(res);
answerlog.push(res);
if (res === 'N' || res === 'NO'){
  correctAns++;
}
console.log(correctAns);
if((answerlog[0] === 'YES' || answerlog[0] === 'Y' ) && (answerlog[1] === 'YES' || answerlog[1] === 'Y' ) && ( answerlog[2] === 'YES' || answerlog[2] === 'Y') && (answerlog[3] === 'NO' || answerlog[3] === 'N' ) && (answerlog[4] === 'NO' || answerlog[4] === 'N')){
  alert('YOU ARE CORRECT!!! Congratulations! Give yourself a nice long pat on the back');
}else{
  alert('INCORRECT!! You only got ' + correctAns + ' out of the first 5 questions correct. Moving on...');
}
console.log(answerlog);
var answer;
var q2 = 'Pick a number between 1 and 100';
qlog.push(q2);
var numberAnswer = Math.floor(Math.random() * 100);
console.log(numberAnswer);
var i = 0;
for (i = 0; i < 4; i++){
  answer = prompt(q2);
  console.log(answer);
  answerlog.push(answer);
  if (numberAnswer > answer){
    alert('You\'re too low! You only have ' + (3 - i) + ' guess(es) left!');
  }
  else if (numberAnswer < answer){
    alert('You\'re too high! You only have ' + (3 - i) + ' guess(es) left!');
  }else if (answer == numberAnswer){
    correctAns++;
    console.log(correctAns);
    alert('You did it!');
    break;}
  else{
    alert('You need to type a number! You only have ' + (3 - i) + ' guess(es) left!');
  }
}
var q2 = 'Can you guess which foriegn countries have I visited??? (I\'ve only visited five)';
qlog.push(q2);
var countries = ['CANADA', 'MEXICO', 'SPAIN', 'FRANCE', 'PERU'];
var numTries = 7;
for (i = 0; i < numTries; i++){
  answer = prompt(q2).toUpperCase();
  console.log(answer);
  answerlog.push(answer);
  if(answer === countries[0] || answer === countries[1] || answer === countries[2] || answer === countries[3] || answer === countries[4]){
    correctAns++;
    console.log(correctAns);
    alert('Congratulations! You guessed correctly! The correct answers were ' + countries.toString());
    break;
  }else if (i < (numTries - 1)){
    alert('Try again! You only have ' + ((numTries - 1) - i) + ' more tries!');
  }else {
    alert('Too bad! The correct answers were ' + countries.toString());
  }
}

console.log(answerlog);
console.log(countries);
console.log(qlog);
alert('Congratulations ' + name + '! You\'ve made it to the end. You got ' + correctAns + ' out of 7 of the questions correct!');
