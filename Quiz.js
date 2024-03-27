const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultsContainer = document.getElementById("results");

const myQuestions = [
  {
    question: "1. What is the largest source of marine pollution?",
    answers: {
      a: "Plastic waste",
      b: "Oil spills",
      c: "Chemical waste",
    },
    correctAnswer: "a",
  },

  {
    question:
      "2. What is the primary greenhouse gas responsible for climate change?",
    answers: {
      a: "Carbon dioxide (CO2)",
      b: "Methane (CH4)",
      c: "Nitrous oxide (N2O)",
    },
    correctAnswer: "a",
  },

  {
    question: "3. What is the primary cause of deforestation?",
    answers: {
      a: "Urbanization",
      b: "Logging",
      c: "Pollution",
      d: "Climate change",
    },
    correctAnswer: "b",
  },

  {
    question:
      "4 .What is the greenhouse gas primarily emitted by the burning of fossil fuels?",
    answers: {
      a: "Carbon dioxide (CO2)",
      b: "Methane (CH4)",
      c: "Nitrous oxide (N2O)",
      d: "Ozone (O3)",
    },
    correctAnswer: "a",
  },

  {
    question: "5. Which of the following is a renewable source of energy?",
    answers: {
      a: "Coal",
      b: "Natural gas",
      c: "Solar power",
      d: "Nuclear power",
    },
    correctAnswer: "c",
  },

  {
    question:
      "6 .What is the process of converting waste materials into reusable materials called?",
    answers: {
      a: "Recycling",
      b: "Composting",
      c: "Incineration",
      d: "Landfilling",
    },
    correctAnswer: "a",
  },

  {
    question: "7 .What is the main cause of ocean acidification?",
    answers: {
      a: "Oil spills",
      b: "Plastic pollution",
      c: "Carbon emissions",
      d: "Industrial waste",
    },
    correctAnswer: "c",
  },

  {
    question: "8 .Which of the following is a non-renewable resource?",
    answers: {
      a: "Wind energy",
      b: "Geothermal energy",
      c: "Natural gas",
      d: "Hydroelectric power",
    },
    correctAnswer: "c",
  },

  {
    question:
      "9. What is the term for the gradual increase in the Earth's average temperature?",
    answers: {
      a: "Global warming",
      b: "Climate change",
      c: "Greenhouse effect",
      d: "Ozone depletion",
    },
    correctAnswer: "b",
  },

  {
    question:
      "10. What is the process of planting trees to restore or create forests called?",
    answers: {
      a: "Afforestation",
      b: "Reforestation",
      c: "Deforestation",
      d: "Desertification",
    },
    correctAnswer: "b",
  },

  {
    question: "11. Which of the following is a major contributor to air pollution?",
    answers: {
      a: "Volcanic eruptions",
      b: "Forest fires",
      c: "Vehicle emissions",
      d: "All of the above",
    },
    correctAnswer: "d",
  },

  {
    question:
      "12. What is the term for the loss of a species from a particular habitat or from the entire planet?",
    answers: {
      a: "Extinction",
      b: "Overpopulation",
      c: "Habitat destruction",
      d: "Genetic diversity",
    },
    correctAnswer: "a",
  },

  {
    question:
      "13. What is the process of using less energy to accomplish the same tasks called?",
    answers: {
      a: "Energy efficiency",
      b: "Energy conservation",
      c: "Renewable energy",
      d: "Sustainable development",
    },
    correctAnswer: "a",
  },

  {
    question: "14. What is the main source of water pollution?",
    answers: {
      a: "Industrial waste",
      b: "Agricultural runoff",
      c: "Sewage discharge",
      d: "All of the above",
    },
    correctAnswer: "d",
  },

  {
    question: "15. Which of the following is a renewable resource?",
    answers: {
      a: "Natural gas",
      b: "Coal",
      c: "Biomass",
      d: "Uranium",
    },
    correctAnswer: "c",
  },

  {
    question:
      "16. What is the term for the gradual increase in the Earth's average sea level?",
    answers: {
      a: "Ocean acidification",
      b: "Coastal erosion",
      c: "Sea level rise",
      d: "Coral bleaching",
    },
    correctAnswer: "c",
  },

  {
    question:
      "17. What is the process of converting organic waste into nutrient-rich soil called?",
    answers: {
      a: "Recycling",
      b: "Composting",
      c: "Incineration",
      d: "Landfilling",
    },
    correctAnswer: "b",
  },

  // Add more questions here...
];

function buildQuiz() {
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (const letter in currentQuestion.answers) {
      answers.push(
        `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter}: ${currentQuestion.answers[letter]}
         </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");
  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = "green";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }

    // Display the correct answer
    answerContainers[questionNumber].insertAdjacentHTML(
      "beforeend",
      `<p class="text-danger">Correct answer: ${currentQuestion.correctAnswer}</p>`
    );
  });

  resultsContainer.innerHTML = `You answered ${numCorrect} out of ${myQuestions.length} questions correctly.`;
}

buildQuiz();

submitButton.addEventListener("click", showResults);
