const database = require("./database.js")
const readlineSync = require('readline-sync')

let score = 0

function playGame (userAnswer, correctAnswer, options) {
    if (userAnswer === correctAnswer) {
        console.log("correct")
        score++;
    } else {
        const correctText = options[correctAnswer];
        console.log(`Wrong answer, correct answer: ${correctAnswer.toUpperCase()}: ${correctText}`)
    }
}

function getRandomQuestions(database, count = 5) {
  // Create a copy of the array to avoid modifying the original
  const shuffled = [...database.data];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Return the first 'count' questions (or all if fewer than count)
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function showQuestions(database) {
  const questionsToShow = getRandomQuestions(database, 5);
  
  for (const element of questionsToShow) {
    console.log("\n Q " + element.question+ "  \n")
    
    const options = Object.entries(element.option);
    for (const [key, value] of options) {
      console.log(`${key.toUpperCase()}: ${value}`)
    }
    
    let userAnswer = readlineSync.question("Enter your answer - ");

    playGame(userAnswer.toLowerCase(), element.correctAnswer, element.option)
  }
}

showQuestions(database)
console.log(`\nQuiz completed! Your final score: ${score}/5`)