let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit",
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender",
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place",
];

function chooseRandomGenre() {
  let random = getRandomNumber(1, 3);

  if (random === 1) {
    let genre = "comedy";
  } else if (random === 2) {
    let genre = "fantasy";
  } else {
    let genre = "drama";
  }
  return genre;
}

function displayRandomShow(genre) {
  if (genre === "Random") {
    genre = chooseRandomGenre();
  }

  if (genre == "comedy") {
    let i = getRandomNumber(0, 4);
    let show = comedyShows[i];
    displayShow(show);
  } else if (genre == "drama") {
    let i = getRandomNumber(0, 4);
    let show = dramaShows[i];
    displayShow(show);
  } else {
    let i = getRandomNumber(0, 4);
    let show = fantasyShows[i];
    displayShow(show);
  }
}
