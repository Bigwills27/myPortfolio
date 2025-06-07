// Interview page logic
const questions = [
  {
    text: "Do you need someone who treats coding like solving puzzles, not just writing syntax?",
    explanation:
      "I approach every problem by understanding the 'why' first. Whether it's optimizing a MongoDB query or building accessible interfaces, I dig deeper than surface-level solutions.",
  },
  {
    text: "Want a MEVN stack developer who's actually confident with MongoDB aggregations?",
    explanation:
      "I've built real applications using MongoDB's aggregation pipeline for complex data processing, not just basic CRUD operations. Vue 3 + Node.js + Express is my comfort zone.",
  },
  {
    text: "Need fresh eyes that won't suggest jQuery for everything?",
    explanation:
      "I keep up with modern web standards. I know when to use vanilla JS, when Vue 3's Composition API makes sense, and when a library is actually needed vs. when it's just convenient.",
  },
  {
    text: "Looking for someone who understands Web3 beyond just 'blockchain = cool'?",
    explanation:
      "I'm a junior Solidity developer who's built smart contracts and understands gas optimization, not just someone who read about crypto on Twitter.",
  },
  {
    text: "Want a developer who asks 'why' before 'how'?",
    explanation:
      "I've learned that understanding the business problem first leads to better technical solutions. I ask questions that might seem obvious but often aren't.",
  },
  {
    text: "Need someone who writes accessible code, not just code that works?",
    explanation:
      "I built a Braille learning app with full screen reader support and keyboard navigation. Inclusive design isn't a nice-to-have for me - it's a feature.",
  },
  {
    text: "Want someone who's built real solutions people actually use?",
    explanation:
      "My Braille learning app (doty·touch) solves a real problem for visually impaired learners. I build with purpose, not just to add to my portfolio.",
  },
  {
    text: "Looking for a developer who debugs with curiosity, not frustration?",
    explanation:
      "I improved website performance by 30% in my last role because I got curious about why things were slow, not just frustrated that they were.",
  },
  {
    text: "Need someone who collaborates with designers, not fights them?",
    explanation:
      "I've worked closely with design teams to implement pixel-perfect UIs while suggesting improvements for better user experience and technical feasibility.",
  },
  {
    text: "Want a developer who learns new tech because projects demand it, not for the resume?",
    explanation:
      "I learned Solidity because I wanted to build decentralized solutions, not because 'Web3' looked good on LinkedIn. I pick up tools when they solve problems.",
  },
  {
    text: "Looking for someone who can explain technical decisions to non-technical stakeholders?",
    explanation:
      "I can break down why we should use server-side rendering or why certain database choices matter, in terms that make business sense.",
  },
  {
    text: "Need a developer who sees inclusive design as a feature, not a nice-to-have?",
    explanation:
      "Accessibility improvements often lead to better UX for everyone. My inclusive approach has improved user engagement across all user groups in past projects.",
  },
];

let currentQuestionIndex = 0;

function startQuiz() {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("quizContainer").style.display = "block";
  document.getElementById("totalQuestions").textContent = questions.length;
  loadQuestion();
}

function loadQuestion() {
  const container = document.getElementById("questionContainer");
  const question = questions[currentQuestionIndex];

  // Clear previous
  container.innerHTML = "";

  // Create question element
  const questionEl = document.createElement("div");
  questionEl.className = "question active";
  questionEl.innerHTML = `
        <h2 class="question-text">${question.text}</h2>
        <button class="show-explanation" onclick="toggleExplanation(this)">Why this matters?</button>
        <div class="question-explanation">${question.explanation}</div>
    `;

  container.appendChild(questionEl);

  updateProgress();
}

function toggleExplanation(button) {
  const explanation = button.nextElementSibling;
  explanation.classList.toggle("show");
  button.textContent = explanation.classList.contains("show")
    ? "Hide explanation"
    : "Why this matters?";
}

function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById("progressFill").style.width = progress + "%";
  document.getElementById("currentQuestion").textContent =
    currentQuestionIndex + 1;
}

function nextQuestion() {
  const currentQuestion = document.querySelector(".question.active");
  currentQuestion.classList.remove("active");
  currentQuestion.classList.add("prev");

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
      showResults();
    } else {
      loadQuestion();
    }
  }, 300);
}

function showResults() {
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("resultScreen").style.display = "block";
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  // Additional setup
});
