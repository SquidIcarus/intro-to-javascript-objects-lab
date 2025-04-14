const pokemon = require('./data.js');

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

// console.dir(pokemon, { maxArrayLength: null })
// console.log(pokemon[58]);
// console.log(game);

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = "Hard";
console.log(game);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

const starters = pokemon.filter(p => p.starter === true);
console.log(starters);

const starterPokemon = starters.find(p => p.name === 'Charmander');
console.log(starterPokemon);

game.party.push(starterPokemon);
console.log(game);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

const pokeTypes = [...new Set(pokemon.map(p => p.type))];
// console.log (pokeTypes);

const bugMon = pokemon.filter(p => p.type === 'bug');
const dragonMon = pokemon.filter(p => p.type === 'dragon');
const electricMon = pokemon.filter(p => p.type === 'electric');
const fairyMon = pokemon.filter(p => p.type === 'fairy');
const fightMon = pokemon.filter(p => p.type === 'fighting');
const fireMon = pokemon.filter(p => p.type === 'fire');
const ghostMon = pokemon.filter(p => p.type === 'ghost');
const grassMon = pokemon.filter(p => p.type === 'grass');
const groundMon = pokemon.filter(p => p.type === 'ground');
const iceMon = pokemon.filter(p => p.type === 'ice');
const normalMon = pokemon.filter(p => p.type === 'normal');
const poisonMon = pokemon.filter(p => p.type === 'poison');
const psychicMon = pokemon.filter(p => p.type === 'psychic');
const rockMon = pokemon.filter(p => p.type === 'rock');
const waterMon = pokemon.filter(p => p.type === 'water');

// console.log(electricMon);

game.party.push(waterMon[5]);
game.party.push(psychicMon[3]);
game.party.push(fightMon[2]);
console.log(game.party);













  