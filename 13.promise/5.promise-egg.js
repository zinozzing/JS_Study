function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  // return Promise.resolve(`🍃 => 🐔`);
  return Promise.reject(new Error("error"));
}

// getChicken()
//   .catch(error => {
//     console.log(error.name);
//     return "🐔";
//   })
//   .then(chicken => fetchEgg(chicken))
//   .then(egg => fryEgg(egg))
//   .then(friedEgg => console.log(friedEgg));

//promise chaining
getChicken()
  .catch(() => "🐔")
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
