var readlineSync = require('readline-sync');
var userName = readlineSync.question("Hey, Your Name? ")
console.log('Welcome to this fun Game - Some Random Questions are in the line for you '+ userName);

var score = 0;

var questions = [{
  question:"\nWhat is 15 times 20 ? ",
  answer:"300",
  cheer:"Precise...",
  trynext:"Try next one, Good Luck"
},
{
  question:"\nHow many weeks make a fortnight ? ",
  answer:"2",
  cheer:"Correct...",
  trynext:"Try next one, Good Luck"
},
{
  question:"\nA broken clock is still right for how many times ? (1 or 2 or 3 or 4) ",
  answer:"2",
  cheer:"Awesome youuuuu...",
  trynext:"Try next one, Good Luck"
},
{
  question:"\nNothing rhymes with silver (yes/no) ? ",
  answer:"yes",
  cheer:"Helloooo, you are about to reach the top score...",
  trynext:"Try next one, Good Luck"
},
{
  question:"\nWhat five letter word becomes shorter when you add two letters ? ",
  answer:"short",
  cheer:"Was that tricky?...",
  trynext:"Try again in the next launch"
}];


function playThis(question , realAnswer, cheerComment, trynextComment) {
  if(attemptedAnswer.toLowerCase() == realAnswer.toLowerCase()){

    console.log('WOW.. %s ', cheerComment);
    score++;
  }else{
    console.log('Oops..the correct answer is '+ realAnswer +' - '+ trynextComment);
  }
  console.log('Your Score = '+ score);
 
}

for(var i=0;i<questions.length;i++)
{
  var attemptedAnswer = readlineSync.question(questions[i].question)
  playThis(questions[i].question, questions[i].answer,questions[i].cheer,questions[i].trynext);
}
if(score == 5){
  console.log('\nCongratulations..... You scored the highest! Keep learning and exploring :) Challenge others! Have Fun.');

  console.log('Send the screenshot and get your name 0n leaderboard.\n');

}else if(score == 4){
  console.log('\nYou Rock....let\'s see how others score, Take a screenshot and share this challenge.');
  console.log('Send the screenshot and get your name on leaderboard.\n');
}
else{
  console.log('\nYou tried your best! ....let\'s see how others score, share this challenge.');
  console.log('Send the screenshot and get your name on leaderboard.\n');
}
console.log('---------------------');
console.log('--|| LEADERBOARD ||--');
console.log('---------------------');
var leadScores = [{
  name:'PoojaNG',
  leadscore:5
},
{
  name:'PratikaNG',
  leadscore:4
}];
for(var i=0;i<leadScores.length;i++){
  console.log(leadScores[i].name + ' = ' + leadScores[i].leadscore);
}
