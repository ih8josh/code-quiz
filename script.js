document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("start-btn");
  const questionContainer = document.getElementById("question-container");
  const choicesContainer = document.getElementById("choices-container");
  const timerElement = document.getElementById("timer");
  const submitBtn = document.getElementById("submit-btn");
  const resultMessage = document.getElementById("result-message");
  const scoreForm = document.getElementById("score-form");

  let timer;
  let timeLeft = 100; 
  let currentQuestionIndex = 0;
  let correctAnswers = 0;

  const question = [
        {
          question: "Who was the lead singer off Grupo Arriesgado?",
          choices: ["Josue Gonzalez", "Arturo González", "Jose Torres", "Eden Munoz"],
          correctAnswer: "Arturo González"
        }
  ]
        const question = [
        {
          question: "Who wrote the song tiltled `La People`",
          choices: ["Xavi", "Ivan Conejo", "Tito Double P.", "Peso Pluma"],
          correctAnswer: "Tito Double P."
        },
        ]
      const question = [
        {
          question: "Which artist is known for being threatend by the cartel",
          choices: ["Chalino Sanchez", "Los Tigres del Norte", "Santa Grifa", "Danny Lux"],
          correctAnswer: "Chalino Sanchez"
        }
      ]
      const question = [
        {
          question: "Which artist made Taylor Swift famous",
          choices: ["Jay-z", "Kanye West", "Odd Future", "Tyler The Creator"],
          correctAnswer: "Kanye West"
        }
      ]
      const questions = [
        {
          question: "Who made the first rap album",
          choices: ["MF DOOM", "The Last Poet", "Biggie Smalls", "Kodak Black"],
          correctAnswer: "The Last Poet"
        }
      ]

  startBtn.addEventListener("click", startQuiz);
  scoreForm.addEventListener("submit", saveScore);

  function startQuiz() {
    startBtn.style.display = "none";
    displayQuestion();
    timer = setInterval(updateTimer, 1000);
  }

  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    choicesContainer.innerHTML = "";
    currentQuestion.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", () => checkAnswer(choice));
      choicesContainer.appendChild(button);
    });
  }

  function checkAnswer(userChoice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (userChoice === currentQuestion.correctAnswer) {
      correctAnswers++;
    } else {
      timeLeft -= 10; // Subtract 10 seconds for incorrect answer
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }

  function updateTimer() {
    timerElement.textContent = `Time: ${timeLeft}`;
    if (timeLeft <= 0) {
      endQuiz();
    } else {
      timeLeft--;
    }
  }

  function endQuiz() {
    clearInterval(timer);
    resultMessage.textContent = `You got ${correctAnswers} out of ${questions.length} questions correct!`;
    submitBtn.style.display = "block";
    scoreForm.style.display = "block";
  }

  function saveScore(event) {
    event.preventDefault();
    const initials = document.getElementById("initials").value;
    console.log("Initials:", initials, "Score:", correctAnswers);
    resetGame();
  }

  function resetGame() {
    startBtn.style.display = "block";
    timerElement.textContent = "Time: 60";
    submitBtn.style.display = "none";
    resultMessage.textContent = "";
    scoreForm.style.display = "none";

    timeLeft = 60;
    currentQuestionIndex = 0;
    correctAnswers = 0;
  }
});
