const questions = Array.from(document.querySelectorAll(".question")) as HTMLDivElement[];
const buttons = Array.from(document.querySelectorAll("button")) as HTMLButtonElement[];

let currentQuestionIndex = 0;
let correctAnswer: number = 0;
let wrongAnswer: number = 0;
let score: number = 0;

function showNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        const currentQuestion = questions[currentQuestionIndex];
        const nextQuestion = questions[currentQuestionIndex + 1];


        currentQuestion.classList.remove("active");
        nextQuestion.classList.add("active");


        nextQuestion.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });

        currentQuestionIndex++;
    } else {

        alert(
            "Quiz Complete!" +
            "\nScore: " + score +
            "\nCorrect answers: " + correctAnswer +
            "\nWrong answers: " + wrongAnswer
        );
    }
}


buttons.forEach((button) => {
    button.addEventListener("click", (e: MouseEvent) => {
        const target = e.target as HTMLButtonElement;
        const isCorrect = target.dataset.correct === "true";

        if (isCorrect) {
            alert("Correct!");
            score += 1;
            correctAnswer += 1;
        } else {
            alert("Wrong!");
            wrongAnswer += 1;
        }

        showNextQuestion();
    });
});


questions[currentQuestionIndex].classList.add("active");
