const WORDS = [
  // Animals
  'TIGER',      'ELEPHANT',   'DOLPHIN',    'PENGUIN',    'GIRAFFE',    'HAMSTER',    'RACCOON',    'GORILLA',    'CHEETAH',    'OSTRICH',
  'SPARROW',    'OCTOPUS',    'PARROT',     'BEAVER',     'TOUCAN',     'FLAMINGO',   'BABOON',     'MACAW',      'MOOSE',      'OTTER',
  'RABBIT',     'PANDA',      'KOALA',      'ZEBRA',      'CAMEL',      'TURTLE',     'EAGLE',      'PEACOCK',    'KANGAROO',   'JAGUAR',
  'MONKEY',     'LIZARD',     'SQUIRREL',   'REINDEER',   'PLATYPUS',   'LEOPARD',    'WALRUS',     'PELICAN',    'FALCON',     'BUFFALO',
  'PARROT',     'CHIPMUNK',   'HEDGEHOG',   'SEAHORSE',   'STARFISH',   'LADYBUG',    'BUTTERFLY',  'BUMBLEBEE',  'CATERPILLAR','DRAGONFLY',

  // Food and treats
  'PIZZA',      'BURGER',     'APPLE',      'BANANA',     'ORANGE',     'GRAPES',     'MANGO',      'CHERRY',     'PEACH',      'COOKIE',
  'CAKE',       'CANDY',      'DONUT',      'WAFFLE',     'PANCAKE',    'MUFFIN',     'PRETZEL',    'POPCORN',    'HOTDOG',     'TACO',
  'PASTA',      'CHEESE',     'HONEY',      'CHOCOLATE',  'STRAWBERRY', 'BLUEBERRY',  'WATERMELON', 'PINEAPPLE',  'KETCHUP',    'MUSTARD',
  'PEANUT',     'COCONUT',    'LOLLIPOP',   'BROWNIE',    'CUPCAKE',    'LEMON',      'NOODLE',     'DUMPLING',   'BURRITO',    'BISCUIT',
  'CARAMEL',    'VANILLA',    'CINNAMON',   'AVOCADO',    'BROCCOLI',   'SPINACH',    'CARROT',     'POTATO',     'TOMATO',     'SANDWICH',

  // Fantasy and fairy tales
  'DRAGON',     'WIZARD',     'KNIGHT',     'CASTLE',     'GOBLIN',     'SHIELD',     'POTION',     'PRINCESS',   'MERMAID',    'UNICORN',
  'PHOENIX',    'PEGASUS',    'FAIRY',      'WITCH',      'GIANT',      'TREASURE',   'MAGIC',      'QUEST',      'ADVENTURE',  'MONSTER',
  'PIRATE',     'NINJA',      'ROBOT',      'ALIEN',      'SUPERHERO',  'SIDEKICK',   'VILLAIN',    'CRYSTAL',    'CROWN',      'SWORD',
  'TROLL',      'GRIFFIN',    'DRAGON',     'PUZZLE',     'RIDDLE',     'LEGEND',     'HERO',       'BRAVE',      'ENCHANTED',  'RAINBOW',

  // School and learning
  'PENCIL',     'ERASER',     'NOTEBOOK',   'BACKPACK',   'TEACHER',    'LIBRARY',    'CLASSROOM',  'HOMEWORK',   'SPELLING',   'SCIENCE',
  'READING',    'WRITING',    'DRAWING',    'PAINTING',   'NUMBERS',    'LETTERS',    'CALENDAR',   'COMPUTER',   'CRAYON',     'SCISSORS',
  'PLAYGROUND', 'LUNCHBOX',   'CHALKBOARD', 'TRIANGLE',   'RECTANGLE',  'SUBTRACT',   'MULTIPLY',   'FRACTION',   'SENTENCE',   'CHAPTER',

  // Nature and weather
  'RAINBOW',    'THUNDER',    'FLOWER',     'FOREST',     'JUNGLE',     'DESERT',     'MOUNTAIN',   'VOLCANO',    'TORNADO',    'BLIZZARD',
  'WATERFALL',  'OCEAN',      'ISLAND',     'MEADOW',     'RIVER',      'BEACH',      'SNOWFLAKE',  'SUNSHINE',   'RAINDROP',   'MUSHROOM',
  'POND',       'CAVE',       'BOULDER',    'CACTUS',     'BAMBOO',     'WILLOW',     'MAPLE',      'CLOVER',     'DAISY',      'SUNFLOWER',
  'MARIGOLD',   'LAVENDER',   'TULIP',      'ROSEBUD',    'PINECONE',   'ACORN',      'SEASHELL',   'PEBBLE',     'CRYSTAL',    'DIAMOND',

  // Space
  'ROCKET',     'PLANET',     'GALAXY',     'COMET',      'SATURN',     'JUPITER',    'ASTEROID',   'METEOR',     'ECLIPSE',    'AURORA',
  'MOONLIGHT',  'STARDUST',   'TELESCOPE',  'ASTRONAUT',  'SPACESHIP',  'SUPERNOVA',  'NEBULA',     'SUNRISE',    'SUNSET',     'SHOOTING',

  // Sports and activities
  'SOCCER',     'BASEBALL',   'TENNIS',     'SWIMMING',   'SKATING',    'CYCLING',    'DANCING',    'SINGING',    'JUMPING',    'RUNNING',
  'CLIMBING',   'FISHING',    'CAMPING',    'HIKING',     'SURFING',    'FOOTBALL',   'BASKETBALL', 'BOWLING',    'GYMNASTICS', 'KARATE',

  // Toys and fun
  'BALLOON',    'BICYCLE',    'SKATEBOARD', 'SCOOTER',    'PUZZLE',     'FRISBEE',    'PUPPET',     'COSTUME',    'KITE',       'SWING',
  'SANDBOX',    'TRAMPOLINE', 'PINWHEEL',   'TAMBOURINE', 'TELESCOPE',  'MAGNIFIER',  'BINOCULARS', 'COMPASS',    'LANTERN',    'CAMERA',

  // Colors and describing words
  'ORANGE',     'PURPLE',     'YELLOW',     'SILVER',     'GOLDEN',     'VIOLET',     'CRIMSON',    'TURQUOISE',  'SPARKLE',    'GLITTER',
  'FROZEN',     'GLOWING',    'SOARING',    'BOUNCING',   'GIGGLING',   'SPLASHING',  'FLUFFY',     'STRIPED',    'SPOTTED',    'SHINY',

  // Places kids know
  'VILLAGE',    'AIRPORT',    'STADIUM',    'LIBRARY',    'MUSEUM',     'GARDEN',     'PALACE',     'COTTAGE',    'LIGHTHOUSE', 'TREEHOUSE',
  'CLASSROOM',  'HOSPITAL',   'BAKERY',     'TOYSTORE',   'AQUARIUM',   'CARNIVAL',   'CIRCUS',     'FARMHOUSE',  'GREENHOUSE', 'PLAYGROUND',
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
