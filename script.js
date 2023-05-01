const BASE_URL = "https://superheroapi.com/api.php/575885307838461";
const superDiv = document.getElementById("superheroDiv");
const searchValue = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
//Run the getSearchSuper function when search button is clicked
searchBtn.onclick = () => getSuper(`/search/${searchValue.value}`);

//showStatsHTML(hero) -> returns a string in html containing all the information of the hero.
const showHeroInfo = (hero) => {
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
    return `<p><b>${statToEmoji[stat]} ${stat.toLowerCase()}</b>: ${
      hero.powerstats[stat]
    }</p>`;
  });
  // concatanate the image, name, and stats into a single string to add to the html
  superDiv.innerHTML += `<div class="hero-container">
    <div class="hero">${name + image}</div>` + `<div class="stats"><h2>Stats</h2>${stats.join("")}</div>
  </div>`;
};

// getRandomSuper() -> information and image of random superhero displayed on DOM
const getRandomSuper = () => {
  //generate a random id number from 1 to 731 inclusive
  let heroId = Math.floor(Math.random() * 731) + 1;
  //fetch the random superhero by that id number
  // fetch(`${BASE_URL}/${heroId}`)
  //   //convert the promise to a json file
  //   .then((response) => response.json())
  //   .then((hero) => {
  //     console.log(hero);
  //     //display the results for the random hero
  //     superDiv.innerHTML = "";
  //     showHeroInfo(hero);
  //   });
  getSuper(`/${heroId}`)
};

// getSuper(name) -> information and images of all the superheros in the search results displayed on DOM
const getSuper = (query) => {
  //fetch searched name in superhero api
  fetch(`${BASE_URL}${query}`)
    //convert the respons to a json format
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      superDiv.innerHTML = "";
      if (data.results) {
        data.results.forEach((hero) => {
          showHeroInfo(hero);
        });
      } else {
        showHeroInfo(data)
      }
    }).catch((error) => {
      superDiv.innerHTML = `<div class="hero-container">
        <h1 id="error">404: Hero not found :/</h1>
      </div>`
    })
};
//get random superhero on load
getRandomSuper();
