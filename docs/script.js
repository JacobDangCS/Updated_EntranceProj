//Making all variables in the beginning so they don't get mixed up later
let pos = 0, welcome, test, question01, choice01, choices01,
  chA1, chB1, chC1,
  question02, choice02, choices02,
  chA2, chB2, chC2, chD, chE, chF, chG, selectedMovie, correct = 0;

//Makes empty array
let movies = [];

//Array of all movie data
let data = [{
  "Title": "<h2> <p class='movieTitle-container'> Spiderman: Into the Spider-verse </p> </h2>",
  "Genre": "Action",
  "animated": true,
  "Description": "<div class='para-container'> Also serves as my favorite super-hero movie of all time! For me it serves as an outstanding example of how an animated film should be and how a Spider-Man movie should be (if you’re into that). The attention to detail, creative usages of space, and the animators really leaning into that “comic book” aesthetic really drive home how this film is an homage to animation and the titular character. </div>",
  "Image": "<img class='picture-container' src='assets/Posters/AnimatedActionPoster.png' alt='spider' width='260' height='385'>"
}, {
  "Title": "<h2> <p class='movieTitle-container'> Howl's Moving Castle </p> </h2>",
  "Genre": "Adventure",
  "animated": true,
  "Description": "<div class='para-container'> One of my favorite animated motion pictures that I feel captures a grandiose setting and blended an adventure of unlikely characters incredibly well. From the soundtrack, voice acting, to the world building, I would say this movie encapsulate a feeling of a journey to the unknown perfectly. </div>",
  "Image": "<img class='picture-container' src='assets/Posters/AnimatedAdventurePoster.jpg' alt='castle 'width='260' height='385'>"
},
{
  "Title": "<h2> <p class='movieTitle-container'> Mitchells V.S The Machines </p> </h2>",
  "Genre": "Comedy",
  "animated": true,
  "Description": "<div class='para-container'> As a young adult I never would have expected a family oriented movie to make me laugh as much as it did. It’s not only the voice acting that carries the delivery of the jokes. A lot of it’s humor is visually inventive, especially with the gorgeous animation. The interesting dynamic of our quirky yet relatable protagonists help drive the timing, pacing, and impact of every punchline and plot point. </div>",
  "Image": "<img class='picture-container' src='assets/Posters/AnimatedComedyPoster.jpg' alt='mitchells' width='260' height='385'>"
},
{
  "Title": "<h2> <p class='movieTitle-container'>Your Name</p> </h2>",
  "Genre": "Romance",
  "animated": true,
  "Description": "<div class='para-container'> This film is widely regarded as one of the most beautifully Japanese animated movies of all time. It’s story is weaved with this concept of youthful dreaming, commentary about Japanese culture, and an ending that I think about and imagine every so often. Though not romantic in the traditional sense, I want to say that the imagery and visual direction carry this unexplainable feeling that resembles romance. Though some elements may be more favored to a fanbase that has interest in anime, I do think it is strong enough film that carries overs and should inspire American cinema.</div>",
  "Image": "<img class='picture-container' src='assets/Posters/AnimatedRomanticPoster.jpg' alt='kimi' width='260' height='385'>"
}, {
  "Title": "<h2> <p class='movieTitle-container'> Spirited Away </p> </h2>",
  "Genre": "Coming of Age",
  "animated": true,
  "Description": "<div class='para-container'> If there is any film I can sincerely recommend, it would be this one. This is in matter of fact my top favorite movie of all time. I’m biased as the coming of age genre is my favorite genre as well, but from the bottom of my heart I would highly recommend anyone to watch this masterpiece of a movie. All the characters are charming in their quirks, actions, and contribution to the movie. It’s soundtrack really breathes life into the movie, and the animation is what really keeps the audience enchanted throughout the film. </div>",
  "Image": "<img class='picture-container' src='assets/Posters/AnimatedCOAPoster.jpg' alt='fav' width='260' height='385'>"
}, {
  "Title": "<h2> <p class='movieTitle-container'> Coraline </p> </h2>",
  "Genre": "Horror",
  "animated": true,
  "Description": "<div class='para-container'> As a kid this movie freaked me out more than it should’ve. Now as a young adult I appreciate this film a lot more and found it’s animation style to be the most unique of all of my animated picks so far. The story is simple and concise yet creative and refreshing. The tone and atmosphere of this movie is something uncommon yet I invite such challenging art forms to be established in film. This film works incredibly well for people of all ages. </div>",
  "Image": "<img class='picture-container' src='assets/Posters/AnimatedHorrorPoster.jpg' alt='coraline' width='260' height='385'>"
}, {
  "Title": "<h2> <p class='movieTitle-container'> The Departed </p> </h2>",
  "Genre": "Action",
  "animated": false,
  "Description": "<div class='para-container'> Carried by a star studded cast and an acclaimed direction, this movie didn’t hold my hand as it took me through the fast-paced, violent, and crooked world of The Departed. The themes of identity anchor this film and the direction held me in suspension the entire time. Whether you’re a newcomer or veteran to a Scorsese film, I believe this film will have you hooked and there for a good and long time. </div>",
  "Image": "<img class='picture-container' src='assets/Posters/LiveActionPoster.jpg' alt='mafia' width='260' height='385'>"
}, {
  "Title": "<h2> <p class='movieTitle-container'> Kung Fu Hustle </p> </h2>",
  "Genre": "Adventure",
  "animated": false,
  "Description": "<div class='para-container'> I don’t understand most of the language based jokes, nor was alive/mentally capable during the time to understand it’s significance of casting or nods to the martial arts genre. Yet I regard this film to be a masterpiece. The adventure isn’t found in fantastical landscapes or treacherous environments, but in a small and poor village somewhere in China. I consider this film an adventure because of how the journey of the protagonist, both in the grand scheme of the film and within himself, is developed throughout the film.</div>",
  "Image": "<img class='picture-container' src='assets/Posters/LiveAdventurePoster.jpg' alt='chow' width='260' height='385'>"
}, {
  "Title": "<h2> <p class='movieTitle-container'> Superbad </p> </h2>",
  "Genre": "Comedy",
  "animated": false,
  "Description": "<div class='para-container'> This film gets better and better every time I watch it. It’s emphasis on awkwardness, ridiculous yet relatable characters, and comedic timing for me is the half of it. I’m a sucker for the coming of age theme, and I feel that this movie subtlety on that theme is brilliantly hidden and is only briefly acknowledged at the end of the movie. I think what makes this movie my definitive comedy film is how it highlights the absurdity and the fun of being human in the modern day. Though the film came out in 2007, I think it stands the test of time and will continue to do so. </div>",
  "Image": "<img class='picture-container' src='assets/Posters/LiveComedyPoster.png' alt='cera' width='260' height='385'>"
}, {
  "Title": "<h2> <p class='movieTitle-container'> Moonlight </p> </h2>",
  "Genre": "Romance",
  "animated": false,
  "Description": "<div class='para-container'> I should put up a disclaimer: It’s not up front in it’s romantic themes, if anything it’s romantic for about one to two brief moments and that’s about it. To me those brief moments are everything I need to consider this a romantic film. I highly recommend watching it without this perspective in mind but hopefully you’ll understand what I mean by this. To me the feeling it left me was indescribable, something like a somber, bittersweet, and melancholy but romantic feeling. Just watch the movie if you really are curious by what I mean. </div>",
  "Image": "<img class='picture-container' src='assets/Posters/LiveRomanticPoster.jpg' alt='blue' width='260' height='385'>"
}, {
  "Title": "<h2> <p class='movieTitle-container'> Mid90s </p> </h2>",
  "Genre": "Coming of Age",
  "animated": false,
  "Description": "<div class='para-container'> This is the only movie I’ve been to the movie theater twice for. The reason why it makes my favorite live coming-of-age film is quite literally everything. I’ve picked this movie apart so many times as to why it’s so perfect. The naturalness and believability of the dialogue, the cast, the talent of the cast, the direction and tone of the movie, the imagery, the cinematography, I can keep rambling on but I highly recommend you watch it. A heads up but it has the surface of what appears to be like a “skater” movie but it quickly goes into depth on why it’s more than that.</div>",
  "Image": "<img class='picture-container' src='assets/Posters/LiveComingofagePoster.jpg' alt='skate' width='260' height='385'>"
}, {
  "Title": "<h2> <p class='movieTitle-container'> Annihilation </p> </h2>",
  "Genre": "Horror",
  "animated": false,
  "Description": "<div class='para-container'> I’d honestly say this movie goes beyond what I’d expect in classic horror genre. To me it’s exactly what I would want a horror film to be. The immediate premise allows for some dark and disturbing situations, the pacing of the film holds no barres in terms of suspension, the final moments in the film was the final piece that had me immediately deem it my favorite horror movie. Wouldn’t want to spoiler any part of this movie because every second is worth it in my opinion.</div>",
  "Image": "<img class='picture-container' src='assets/Posters/LiveHorrorPoster.jpg' alt='portman' width='260' height='385'>"
}
]

//NEW ADDITION: Object Constructor
function Movie(title, type, genre, desc, image) {
  this.title = title;
  this.type = type;
  this.genre = genre;
  this.desc = desc;
  this.image = image;
}

for (let i = 0; i < data.length; i++) {
  const film = new Movie(data[i].Title, data[i].animated, data[i].Genre, data[i].Description, data[i].Image)
  movies.push(film);
}

//Welcome Page, introduces viewer on what to expect
let firstPage = [
  {
    welcome: "<div class='welcome-container intro__hide'> Welcome to Jake’s Film Curations! </div>" +
      "<br>" + "<div class='myname-container intro__hide'> I’m Jacob Dang and am an avid movie watcher! </div>" +
      "<br>" + "<div class='description-container intro__hide'> Can’t figure out what to watch? Then go through this thorough questionnaire to decide on tonight’s film of my choice! </div>" +
      "<br>"
  }
];

//First Question
let questionOne = [
  {
    question01: "Live or Animated?",
    a: "Live",
    b: "Animated",
  }
];

//Second Question
let questionTwo = [
  {
    question02: "What genre?",
    a1: "Action",
    b1: "Adventure",
    c1: "Comedy",
    d: "Coming of Age",
    e: "Romance",
    f: "Horror",
  }
];


//Called at the end of the code, starts project
function openTitle() {
  test = get("test");
  introPage = firstPage[pos].welcome;
  test.innerHTML = "<h2 class='intro__hide'>" + introPage + "</h2>";
  test.innerHTML += "<br> <label class='intro__hide'> <button onclick='firstQuestion()'>Next</button> </label> <label class='intro__hide'> <button onclick='interestedPage()' id='intBtn'>Your Interested</button> </label>";
}

//NEW ADDITIONS: LOCAL STORAGE
/*Saved Movies Page Function interestedPage,
Should retrieve saved film data*/
function interestedPage() {
  userSaved = JSON.parse(localStorage.getItem("interested"))
  if (userSaved == null || userSaved.length == 0) {
    document.querySelector('#intBtn')
      .textContent = 'N/A';
  } else {
    let allTitle = document.querySelectorAll('.intro__hide')
    for (let i = 0; i < allTitle.length; i++) {
      allTitle[i].remove();
    }
    for (let i = 0; i < userSaved.length; i++) {
      get("test").innerHTML += "<br>" + userSaved[i].image + "<br>";
    }
    test.innerHTML += "<button onclick='openTitle()'>Return to Home</button>" +
      "<label> <button onclick='clearScreen()'>Clear Selection</button> </label>";
  }
}

//Clears and reset Interested selection
function clearScreen() {
  const resetInt = [];
  localStorage.setItem("interested", JSON.stringify(resetInt));
  openTitle();
}

/*Save Button Function, should change text 'Interested' to 'Saved!' for user 
as well as have result(s) stored into the local storage/Interested Page*/
function saveMovie() {
  userSaved = JSON.parse(localStorage.getItem("interested"))
  if (userSaved == null){
    userSaved = []
  }

  let alrSave = false
  for (let i = 0; i < userSaved.length; i++) {
    let curTitle = userSaved[i].title
    if (curTitle == selectedMovie.title) {
      alrSave = true
    }
  }
  if (alrSave) {
    document.querySelector('#saveBtn')
      .textContent = 'Already Saved!';
  } else {
    selectedMovie.title
    document.querySelector('#saveBtn')
      .textContent = 'Saved!';
    localStorage.getItem("interested")
    userSaved.push(selectedMovie)
    localStorage.setItem("interested", JSON.stringify(userSaved))
  }
}


//Q1 Format and Structure
function firstQuestion() {
  test = get("test");

  questionFirst = questionOne[pos].question01;
  chA1 = questionOne[pos].a;
  chB1 = questionOne[pos].b;
  test.innerHTML = "<h2>" + questionFirst + "</h2>"

  test.innerHTML += "<label> <input type='radio' name='choices01' value='Live'>" + chA1 +
    "</label><br><label> <input type='radio' name='choices01' value='Animated'> " + chB1 +
    "</label><br>"
    + "<br><br><button onclick='nextQuestion()'>Next</button>";

}

//Starts Q2, stores Q1's value
function nextQuestion() {

  //Returns value of answer for Q1
  const logAnswer01 =
    document.querySelector("input[name='choices01']:checked");
  if (logAnswer01.value == 'Live') {
    animate = false;
  } else if (logAnswer01.value == 'Animated') {
    animate = true;
  }

  questionSecond = questionTwo[pos].question02;
  chA2 = questionTwo[pos].a1;
  chB2 = questionTwo[pos].b1;
  chC2 = questionTwo[pos].c1;
  chD = questionTwo[pos].d;
  chE = questionTwo[pos].e;
  chF = questionTwo[pos].f;
  test.innerHTML = "<h2>" + questionSecond + "</h2>"

  test.innerHTML += "<label> <input type='radio' name='choices02' value='Action'> " + chA2 +
    "</label><br><label> <input type='radio' name='choices02' value='Adventure'> " + chB2 +
    "</label><br><label> <input type='radio' name='choices02' value='Comedy'> " + chC2 +
    "</label><br><label> <input type='radio' name='choices02' value='Coming of Age'> " + chD +
    "</label><br><label> <input type='radio' name='choices02' value='Romance'> " + chE +
    "</label><br><label> <input type='radio' name='choices02' value='Horror'> " + chF +
    "</label><br><label>"
    + "<br><br><button onclick='loadResults()'>Next</button>";
}

//Stores Q2 value and should lead into movie choice
function loadResults() {

  //Returns value of answer for Q2
  const logAnswer02 =
    document.querySelector("input[name='choices02']:checked");
  filter = logAnswer02.value;
  pos++;
  yourResults();
}


function get(x) {
  return document.getElementById(x);
}

//Posts results based on user's submission, last function
function yourResults() {
  if (pos >= questionOne.length && questionTwo.length) {

    //Reacts to user's submission from Q1
    let filterAnimated = movies.filter((movie) => {
      return (
        movie.type == animate
      )
    })

    //Reacts to the user's submission from Q2
    let filterGenre = filterAnimated.filter((movie) => {
      return (
        movie.genre == filter
      )
    })

    selectedMovie = filterGenre[0];

    test.innerHTML = "<div> </div>" + "<br><br>";
    get("test").innerHTML = selectedMovie.title + "<br>" + selectedMovie.image + "<br>" + selectedMovie.desc;
    pos = 0;
    correct = 0;
    test.innerHTML += "<br><button onclick = 'openTitle()'>Reset</button>";
    test.innerHTML += "<button onclick = 'saveMovie()' id='saveBtn'>Interested</button>";
    return false;
  }
}

window.addEventListener("load", openTitle);