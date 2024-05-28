const BASE_URL = "https://superheroapi.com/api.php/575885307838461";

//showStatsHTML(hero) -> returns a string in html containing all the information of the hero.
export const showHeroInfo = (hero) => {
  //HTML to display the image and name of the hero
  let image = `<img src='${hero.image.url}' height="240px"/>`;
  let name = `<h1>${hero.name}</h1>`;
  //array of emojies and their keys
  const statToEmoji = {
    combat: "🤺",
    durability: "🛠",
    intelligence: "🧠",
    power: "🏋🏾‍♂️",
    speed: "🏃🏾‍♂️",
    strength: "💪🏾",
  };
  // Creating an aray of all the stats in a html paragraph
  const stats = Object.keys(hero.powerstats).map((stat) => {
    return `${statToEmoji[stat]} ${stat.toLowerCase()}${ hero.powerstats[stat] }`;
  });
  // concatanate the image, name, and stats into a single string to add to the html
};

// getRandomSuper() -> information and image of random superhero displayed on DOM
export const getRandomSuper = () => {
  let heroId = Math.floor(Math.random() * 731) + 1;
  getSuper(`/${heroId}`)
};

// getSuper(name) -> information and images of all the superheros in the search results displayed on DOM
export const getSuper = (query) => {
  //fetch searched name in superhero api
  fetch(`${BASE_URL}${query}`)
    //convert the respons to a json format
    .then((response) => response.json())
    .then((data) => {
      if (data.results) {
        return data.results
      } else {
        return data
      }
    }).catch((error) => {
      return error
    })
};
