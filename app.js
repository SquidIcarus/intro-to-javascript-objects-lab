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

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});

console.log(game.gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, 
the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

pokemon.forEach((p) => {
  if (p.name === 'Charmeleon') {
    game.party.splice(0, 1, p);
  } if (p.name === 'Poliwhirl') {
    game.party.splice(1, 1, p);
  } if (p.name === 'Hypno') {
    game.party.splice(2, 1, p);
  } if (p.name === 'Machoke') {
    game.party.splice(3, 1, p);
  }
});

console.log(game.party);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

game.party.forEach (pokemon => {
  console.log(pokemon.name);
});

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/


// Looks like I already did this in exercise 4 with this line of code:

// const starters = pokemon.filter(p => p.starter === true);

console.log(starters);


/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};

game.catchPokemon(pokemon[73]);
console.log(game.party);









  