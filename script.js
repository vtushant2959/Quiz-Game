const readline = require("readline");

// Create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const quiz = [
    {
        question: "What is the capital of France?",
        options: ["1. Berlin", "2. Madrid", "3. Paris", "4. Rome"],
        answer: 3
    },
    {
        question: "Which language runs in a web browser?",
        options: ["1. Java", "2. C", "3. Python", "4. JavaScript"],
        answer: 4
    },
    {
        question: "What does HTML stand for?",
        options: ["1. Hyper Text Markup Language", "2. High Tech Modern Language", "3. Home Tool Markup Language", "4. None of the above"],
        answer: 1
    }
];

let score = 0;
let index = 0;

function askQuestion() {
    if (index < quiz.length) {
        let q = quiz[index];

        console.log(`\nQ${index + 1}: ${q.question}`);
        q.options.forEach(option => console.log(option));

        rl.question("Enter the option number: ", (userAnswer) => {
            if (parseInt(userAnswer) === q.answer) {
                console.log("✅ Correct!");
                score++;
            } else {
                console.log(`❌ Wrong! The correct answer was ${q.answer}.`);
            }
            index++;
            askQuestion(); // Ask next question
        });

    } else {
        console.log(`\n🎉 Quiz Over! You scored ${score} out of ${quiz.length}.`);
        rl.close(); // Close input stream
    }
}

// Start quiz
askQuestion();
