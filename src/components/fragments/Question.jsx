import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export const questions = [
  {
    questionText: "What will be the output of the following code?",
    code: `function greet() {
  console.log("Hello, world!");
}
greet();`,
    answerOptions: [
      { answerText: "Hello, world!", isCorrect: true },
      { answerText: "undefined", isCorrect: false },
      { answerText: "Error", isCorrect: false },
      { answerText: "Nothing", isCorrect: false },
    ],
  },
  {
    questionText: "What is the correct way to declare a JavaScript variable?",
    code: `let x = 5;`,
    answerOptions: [
      { answerText: "var x = 5;", isCorrect: false },
      { answerText: "let x = 5;", isCorrect: true },
      { answerText: "x = 5;", isCorrect: false },
      { answerText: "int x = 5;", isCorrect: false },
    ],
  },
  // Tambahkan 8 soal lainnya...
];
