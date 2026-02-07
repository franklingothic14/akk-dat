const questions = []; // заповнимо з JSON
let currentIndex = 0;
let score = 0;
let answers = {}; // {1: 'den', ...}

async function loadQuestions() {
  const res = await fetch('questions.json');
  const data = await res.json();
  questions.length = 0;
  questions.push(...data);
  startQuiz();
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  answers = {};
  updateScore();
  showQuestion();
}

function showQuestion() {
  const q = questions[currentIndex];
  document.getElementById('current').textContent = currentIndex + 1;
  document.getElementById('sentence').innerHTML = q.sentence.replace(
    '___',
    '<span style="color:#667eea; font-size:1.3em;">___</span>'
  );
  document.getElementById('hint').textContent = q.hint;

  const optsDiv = document.getElementById('options');
  optsDiv.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(opt);
    optsDiv.appendChild(btn);
  });

  document.getElementById('prev').disabled = currentIndex === 0;
  document.getElementById('next').textContent =
    currentIndex === questions.length - 1 ? 'Завершити' : 'Далі →';
}

function selectAnswer(selected) {
  const q = questions[currentIndex];
  answers[q.id] = selected;

  const opts = document.querySelectorAll('.option');
  opts.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === q.answer) btn.classList.add('correct');
    else if (btn.textContent === selected && selected !== q.answer)
      btn.classList.add('wrong');
  });

  if (selected === q.answer) score++;
  updateScore();

  localStorage.setItem('deQuizAnswers', JSON.stringify(answers));
  localStorage.setItem('deQuizScore', score.toString());
}

document.getElementById('next').onclick = () => {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    showQuestion();
  } else {
    alert(
      `Готово! Очки: ${score}/${questions.length} (${Math.round(
        (score / questions.length) * 100
      )}%)`
    );
  }
};

document.getElementById('prev').onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
};

document.getElementById('restart').onclick = () => {
  localStorage.removeItem('deQuizAnswers');
  localStorage.removeItem('deQuizScore');
  startQuiz();
};

function updateScore() {
  document.getElementById('score-val').textContent = score;
}

// Завантажити збережене
const savedAnswers = localStorage.getItem('deQuizAnswers');
const savedScore = localStorage.getItem('deQuizScore');
if (savedAnswers) {
  answers = JSON.parse(savedAnswers);
  if (savedScore) score = parseInt(savedScore);
}

loadQuestions();
