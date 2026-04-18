const WORDS = [
  // Animals
  'TIGER',     'ELEPHANT',  'DOLPHIN',   'PENGUIN',   'GIRAFFE',   'PANTHER',   'FALCON',    'JAGUAR',    'BUFFALO',   'HAMSTER',
  'LOBSTER',   'VULTURE',   'RACCOON',   'GORILLA',   'CHEETAH',   'LEOPARD',   'OSTRICH',   'SPARROW',   'WALRUS',    'OCTOPUS',
  'PARROT',    'BEAVER',    'BADGER',    'COBRA',     'CONDOR',    'COYOTE',    'FERRET',    'IGUANA',    'LLAMA',     'MEERKAT',
  'NARWHAL',   'OCELOT',    'PUFFIN',    'TOUCAN',    'WOMBAT',    'LEMUR',     'BISON',     'HYENA',     'PELICAN',   'PLATYPUS',
  'TORTOISE',  'FLAMINGO',  'GAZELLE',   'WEASEL',    'MONGOOSE',  'BABOON',    'MACAW',     'MOOSE',     'OTTER',     'LYNX',

  // Nature
  'VOLCANO',   'GLACIER',   'CANYON',    'DESERT',    'THUNDER',   'TORNADO',   'RAINBOW',   'HORIZON',   'MEADOW',    'SWAMP',
  'TUNDRA',    'RAPIDS',    'LAGOON',    'PLATEAU',   'BLIZZARD',  'AVALANCHE', 'BOULDER',   'CAVERN',    'SUMMIT',    'DELTA',
  'GEYSER',    'MARSH',     'RAVINE',    'MONSOON',   'TYPHOON',   'CYCLONE',   'ESTUARY',   'FJORD',     'SAVANNA',   'JUNGLE',
  'BAYOU',     'PRAIRIE',   'WATERFALL', 'FOREST',    'LAVA',      'MAGMA',     'VORTEX',    'TSUNAMI',   'BEDROCK',   'CREVASSE',

  // Fantasy
  'DRAGON',    'WIZARD',    'KNIGHT',    'CASTLE',    'GOBLIN',    'SHIELD',    'POTION',    'DUNGEON',   'PHANTOM',   'VAMPIRE',
  'SORCERER',  'CURSED',    'RUNE',      'GOLEM',     'WRAITH',    'TROLL',     'ORACLE',    'PALADIN',   'RANGER',    'ROGUE',
  'AMULET',    'SCROLL',    'FORTRESS',  'GRIFFIN',   'PHOENIX',   'PEGASUS',   'UNICORN',   'KRAKEN',    'CHIMERA',   'HYDRA',
  'SPHINX',    'BANSHEE',   'WARLOCK',   'DRUID',     'SHAMAN',    'BASILISK',  'QUEST',     'MINOTAUR',  'CYCLOPS',   'ENCHANTED',

  // Food
  'PIZZA',     'BURGER',    'MANGO',     'CHERRY',    'WAFFLE',    'PRETZEL',   'NOODLE',    'CHEDDAR',   'BISCUIT',   'MUFFIN',
  'PANCAKE',   'SAUSAGE',   'MUSTARD',   'AVOCADO',   'COCONUT',   'LEMON',     'GARLIC',    'PEPPER',    'GINGER',    'SPINACH',
  'BROCCOLI',  'ALMOND',    'WALNUT',    'PEANUT',    'CARAMEL',   'VANILLA',   'CINNAMON',  'PAPRIKA',   'TRUFFLE',   'SHRIMP',
  'OYSTER',    'TUNA',      'ANCHOVY',   'SCALLOP',   'MUSSEL',    'BRISKET',   'CHORIZO',   'RICOTTA',   'TAHINI',    'QUINOA',
  'HUMMUS',    'KIMCHI',    'WASABI',    'TAMALE',    'BURRITO',   'DUMPLING',  'NOUGAT',    'BAGUETTE',  'SORBET',    'CUSTARD',

  // Objects
  'LANTERN',   'COMPASS',   'BICYCLE',   'CAMERA',    'TRUMPET',   'HAMMER',    'LADDER',    'MIRROR',    'PILLOW',    'BLANKET',
  'TELESCOPE', 'CANDLE',    'NEEDLE',    'ANCHOR',    'BUCKET',    'BARREL',    'SHOVEL',    'WRENCH',    'CHISEL',    'MAGNET',
  'FUNNEL',    'CAPSULE',   'PULLEY',    'LANYARD',   'ZIPPER',    'SATCHEL',   'THERMOS',   'GOBLET',    'CHALICE',   'SCABBARD',
  'QUIVER',    'BELLOWS',   'MORTAR',    'PESTLE',    'SPINDLE',   'SEXTANT',   'PORTHOLE',  'RUDDER',    'ARROW',     'BRIDGE',

  // Places
  'VILLAGE',   'HARBOR',    'AIRPORT',   'STADIUM',   'LIBRARY',   'MUSEUM',    'FACTORY',   'GARDEN',    'TEMPLE',    'PALACE',
  'COTTAGE',   'SUBURB',    'BAZAAR',    'MARINA',    'CHAPEL',    'CLINIC',    'BUNKER',    'PYRAMID',   'COLOSSEUM', 'CATHEDRAL',
  'MONASTERY', 'CITADEL',   'TAVERN',    'BARRACKS',  'ARENA',     'GREENHOUSE','OBSERVATORY','LIGHTHOUSE','COURTYARD', 'QUARRY',

  // Space
  'ROCKET',    'PLANET',    'GALAXY',    'NEBULA',    'COMET',     'SATURN',    'JUPITER',   'ASTEROID',  'COSMOS',    'ORBIT',
  'PULSAR',    'QUASAR',    'ECLIPSE',   'SOLSTICE',  'AURORA',    'METEOR',    'GRAVITY',   'EQUINOX',   'ZENITH',    'SUPERNOVA',

  // Music
  'GUITAR',    'VIOLIN',    'FLUTE',     'CLARINET',  'TROMBONE',  'MANDOLIN',  'UKULELE',   'BANJO',     'CELLO',     'SONATA',
  'RHYTHM',    'MELODY',    'CHORUS',    'BALLAD',    'SYMPHONY',  'OCTAVE',    'TEMPO',     'CHORD',     'HARMONY',   'CADENCE',

  // Gems and minerals
  'MARBLE',    'CRYSTAL',   'OBSIDIAN',  'GRANITE',   'QUARTZ',    'AMBER',     'JASPER',    'TOPAZ',     'OPAL',      'EMERALD',
  'SAPPHIRE',  'DIAMOND',   'AMETHYST',  'GARNET',    'ONYX',      'PEARL',     'BRONZE',    'COBALT',    'TITANIUM',  'TUNGSTEN',

  // Plants
  'BAMBOO',    'CACTUS',    'ORCHID',    'WILLOW',    'CYPRESS',   'REDWOOD',   'MAPLE',     'CEDAR',     'MAGNOLIA',  'JASMINE',
  'LAVENDER',  'THISTLE',   'CLOVER',    'NETTLE',    'FUCHSIA',   'DAHLIA',    'MARIGOLD',  'FOXGLOVE',  'HEMLOCK',   'JUNIPER',

  // Science
  'OXYGEN',    'NITROGEN',  'HELIUM',    'ARGON',     'SILICON',   'CALCIUM',   'PROTON',    'NEUTRON',   'ELECTRON',  'PHOTON',
  'POLYMER',   'NETWORK',   'ROUTER',    'FIREWALL',  'KERNEL',    'CIPHER',    'VECTOR',    'MODULE',    'BINARY',    'ISOTOPE',

  // Concepts
  'COURAGE',   'WISDOM',    'JUSTICE',   'FREEDOM',   'LOYALTY',   'HONOR',     'VIRTUE',    'PATIENCE',  'KINDNESS',  'STRENGTH',
  'ANCIENT',   'FROZEN',    'HOLLOW',    'TWISTED',   'GLOWING',   'BURNING',   'SOARING',   'VIBRANT',   'ETHEREAL',  'OMINOUS',
  'SERENE',    'RADIANT',   'CRYPTIC',   'SHADOW',    'RIDDLE',    'LEGEND',    'MYTH',      'FABLE',     'MYSTICAL',  'WHISPER',

  // Mythology
  'OLYMPUS',   'TITAN',     'MEDUSA',    'TRITON',    'HERMES',    'ARTEMIS',   'ATHENA',    'POSEIDON',  'NEMESIS',   'ACHILLES',
  'ODYSSEY',   'CENTAUR',   'SATYR',     'VALKYRIE',  'VALHALLA',  'RAGNAROK',  'FENRIR',    'ZEUS',      'ODIN',      'THOR',
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
