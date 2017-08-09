'use strict';

alert('ITS TIME TO PLAY..... THREE TRUTHS AND TWO LIES! (yes or no answers only) There are only two wrong answers, so guess wisely!');
var q2 = 'My great-grandfather was one of the attorneys that put Al Capone in jail.';
var answer = prompt(q2);
var res = answer.toUpperCase();
var answerlog = [];
console.log(res);
answerlog.push(res);
var q2 = 'I\'ve eaten a snake and a guinea pig before.';
answer = prompt(q2);
res = answer.toUpperCase();
console.log(res);
answerlog.push(res);
var q2 = 'I was once nearly the victim of a major american terrorist attack.';
answer = prompt(q2);
res = answer.toUpperCase();
console.log(res);
answerlog.push(res);
var q2 = 'I once sat next to Martin Sheen on a plane and threw up on him after having one too many drinks...';
answer = prompt(q2);
res = answer.toUpperCase();
console.log(res);
answerlog.push(res);
var q2 = 'I play lead gutiar in a Jimi Hendrix cover band.';
answer = prompt(q2);
res = answer.toUpperCase();
console.log(res);
answerlog.push(res);
if((answerlog[0] === 'YES' || answerlog[0] === 'Y' ) && (answerlog[1] === 'YES' || answerlog[1] === 'Y' ) && ( answerlog[2] === 'YES' || answerlog[2] === 'Y') && (answerlog[3] === 'NO' || answerlog[3] === 'N' ) && (answerlog[4] === 'NO' || answerlog[4] === 'N')){
  alert('YOU ARE CORRECT!!! Congradulations! Give yourself a nice long pat on the back');
}else{
  alert('INCORRECT... TRY AGAIN');
}
console.log(answerlog);
