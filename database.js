const database = {
  data: [
    {
      question: "Is method chaining possible with for each",

      option: {
        a : "yes",
        b: "no"
      },
      correctAnswer : "b"
    },
    {
      question: "Which method converts a JSON string to an object?",
      option: {
        a: "JSON.parse",
        b: "JSON.stringify",
        c: "toJSON",
        d: "parseJSON"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the result of typeof null?",
      option: {
        a: "null",
        b: "object",
        c: "undefined",
        d: "number"
      },
      correctAnswer: "b"
    },
    {
      question: "Which keyword declares a block-scoped mutable variable?",
      option: {
        a: "var",
        b: "let",
        c: "const",
        d: "static"
      },
      correctAnswer: "b"
    },
    {
      question: "Which array method does NOT mutate the original array?",
      option: {
        a: "map",
        b: "push",
        c: "splice",
        d: "sort"
      },
      correctAnswer: "a"
    },
    {
      question: "What does NaN === NaN evaluate to?",
      option: {
        a: "true",
        b: "false",
        c: "Throws an error",
        d: "undefined"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following creates a Promise?",
      option: {
        a: "new Promise((res, rej) => {})",
        b: "Promise()",
        c: "async function(){}",
        d: "setTimeout(() => {})"
      },
      correctAnswer: "a"
    },
    {
      question: "What does 'use strict' do?",
      option: {
        a: "Enables stricter parsing and error handling",
        b: "Enables TypeScript",
        c: "Optimizes performance automatically",
        d: "Disables hoisting"
      },
      correctAnswer: "a"
    },
    {
      question: "Where do Promise.then callbacks run in the event loop?",
      option: {
        a: "Microtask queue",
        b: "Macrotask queue",
        c: "Call stack",
        d: "Render pipeline"
      },
      correctAnswer: "a"
    },
    {
      question: "What does Array.from do?",
      option: {
        a: "Creates an array from an iterable or array-like",
        b: "Creates a shallow copy of an array",
        c: "Converts array to string",
        d: "Mutates the original array"
      },
      correctAnswer: "a"
    },
    {
      question: "Which syntax spreads properties into a new object?",
      option: {
        a: "Spread syntax (...)",
        b: "Object.assign",
        c: "concat",
        d: "extend"
      },
      correctAnswer: "a"
    },
    {
      question: "What does console.log([1,2] + [3,4]) output?",
      option: {
        a: "[1,2,3,4]",
        b: "1,2,3,4",
        c: "1,23,4",
        d: "Throws a TypeError"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following is a falsy value?",
      option: {
        a: "0",
        b: "[]",
        c: "{}",
        d: "'false'"
      },
      correctAnswer: "a"
    },
    {
      question: "How is 'this' bound in an arrow function?",
      option: {
        a: "Dynamically based on the caller",
        b: "Lexically from the enclosing scope",
        c: "Bound to the global object",
        d: "Always undefined"
      },
      correctAnswer: "b"
    },
    {
      question: "What does Array.isArray(value) check?",
      option: {
        a: "Whether value is an array",
        b: "Whether value is iterable",
        c: "Whether value is array-like",
        d: "Whether value is a typed array"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the difference between == and ===?",
      option: {
        a: "== compares value; === compares value and type",
        b: "== compares type; === compares value",
        c: "Both are identical",
        d: "=== performs type coercion"
      },
      correctAnswer: "a"
    }
  ]
}

module.exports = database;