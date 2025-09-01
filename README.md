# JavaScript Quiz CLI

A simple command-line interface quiz application built with Node.js that tests your JavaScript knowledge.

## Features

- 🎯 **Random Questions**: Selects 5 random questions from a pool of JavaScript questions each time
- 🎮 **Interactive CLI**: Easy-to-use command line interface with multiple choice options
- 📊 **Score Tracking**: Displays your score at the end of each quiz
- 💡 **Instant Feedback**: Shows correct answers when you get questions wrong
- 🔄 **No Duplicates**: Ensures no duplicate questions in a single quiz run

## Prerequisites

- Node.js installed on your system
- npm (comes with Node.js)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/ShivamJhaXXIII/quiz-me.git
   cd quiz-me
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

Run the quiz from the command line:

```bash
node index.js
```

### How to Play

1. The quiz will display a question with multiple choice options (A, B, C, D)
2. Type your answer (a, b, c, or d) and press Enter
3. Get instant feedback on whether your answer is correct
4. Continue through all 5 questions
5. View your final score at the end

### Example

```
Q: What is the result of typeof null?

A: null
B: object
C: undefined
D: number
Enter your answer - b
correct

Quiz completed! Your final score: 4/5
```

## Project Structure

```
├── index.js        # Main application file with quiz logic
├── database.js     # Question database with all quiz questions
├── package.json    # Project dependencies
└── README.md       # Project documentation
```

## Question Database

The quiz includes questions covering various JavaScript topics:

- Data types and operators
- Array methods
- Promises and async programming
- ES6+ features
- Event loop and execution context
- And more!

### Adding New Questions

To add new questions, edit the `database.js` file and add questions in the following format:

```javascript
{
  question: "Your question here?",
  option: {
    a: "Option A",
    b: "Option B", 
    c: "Option C",
    d: "Option D"
  },
  correctAnswer: "a"  // Use the option key (a, b, c, or d)
```
