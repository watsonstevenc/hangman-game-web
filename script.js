const WORDS = [
  'CASTLE', 'BRIDGE', 'KNIGHT', 'FOREST',
  'DRAGON', 'SHIELD', 'POTION', 'QUEST',
  'GOBLIN', 'LANTERN', 'ARROW', 'WIZARD'
];

// SVG body parts revealed in order as wrong guesses accumulate
const BODY_PARTS = ['head', 'body', 'left-arm', 'right-arm', 'left-leg', 'right-leg'];
const MAX_WRONG = 6;

let word = '';
let guessed = new Set();
let wrongCount = 0;
let gameOver = false;

function pickWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function startGame() {
  word = pickWord();
  guessed = new Set();
  wrongCount = 0;
  gameOver = false;

  // Reset hangman drawing
  BODY_PARTS.forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });

  // Reset result and play-again
  const result = document.getElementById('result');
  result.textContent = '';
  result.className = 'result hidden';
  document.getElementById('play-again').classList.add('hidden');

  renderWord();
  renderButtons();
  updateWrongCount();
  document.getElementById('guessed-letters').textContent = '';
}

function renderWord() {
  const display = document.getElementById('word-display');
  display.innerHTML = word
    .split('')
    .map(letter => {
      const shown = guessed.has(letter) ? letter : '';
      return `<span class="letter-slot">${shown}</span>`;
    })
    .join('');
}

function renderButtons() {
  const container = document.getElementById('letter-buttons');
  container.innerHTML = '';
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const btn = document.createElement('button');
    btn.textContent = letter;
    btn.className = 'letter-btn';
    btn.id = `btn-${letter}`;
    btn.addEventListener('click', () => handleGuess(letter));
    container.appendChild(btn);
  }
}

function updateWrongCount() {
  document.getElementById('wrong-count').textContent =
    `Wrong guesses: ${wrongCount} / ${MAX_WRONG}`;
}

function handleGuess(letter) {
  if (gameOver || guessed.has(letter)) return;

  guessed.add(letter);

  const btn = document.getElementById(`btn-${letter}`);
  btn.disabled = true;

  if (word.includes(letter)) {
    btn.classList.add('correct');
  } else {
    btn.classList.add('wrong');
    wrongCount++;
    // Reveal next body part
    document.getElementById(BODY_PARTS[wrongCount - 1]).classList.remove('hidden');
  }

  updateWrongCount();
  renderWord();
  updateGuessedLetters();
  checkEndCondition();
}

function updateGuessedLetters() {
  const wrong = [...guessed].filter(l => !word.includes(l)).sort();
  const el = document.getElementById('guessed-letters');
  el.textContent = wrong.length > 0 ? `Missed: ${wrong.join('  ')}` : '';
}

function checkEndCondition() {
  const won = word.split('').every(l => guessed.has(l));

  if (won) {
    gameOver = true;
    showResult('win', `You got it! The word was ${word}.`);
  } else if (wrongCount >= MAX_WRONG) {
    gameOver = true;
    // Reveal the full word
    document.getElementById('word-display').innerHTML = word
      .split('')
      .map(l => `<span class="letter-slot">${l}</span>`)
      .join('');
    showResult('lose', `Game over! The word was ${word}.`);
  }
}

function showResult(type, message) {
  const result = document.getElementById('result');
  result.textContent = message;
  result.className = `result ${type}`;
  document.getElementById('play-again').classList.remove('hidden');

  // Disable all buttons
  document.querySelectorAll('.letter-btn').forEach(btn => btn.disabled = true);
}

// Keyboard support
document.addEventListener('keydown', e => {
  const letter = e.key.toUpperCase();
  if (/^[A-Z]$/.test(letter) && !gameOver) {
    handleGuess(letter);
  }
});

// Start on load
startGame();
