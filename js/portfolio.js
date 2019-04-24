import vanillaJSImgArr from './imgArrays.js';

let currentArr;



const clicker = () => {
  let btnId = event.target.id;
  console.log(btnId);
  index = 0;
  const imgArr = populateImages(btnId);
  imgLoader(imgArr);
  flipTiles(currentTile);
  const projectTitles = populateTitle(imgArr);
  console.log(imgArr);
  console.log(projectTitles);
  document.getElementById('projectTitle').style.opacity = 1;
  titleLoader(projectTitles);
  //change to make forEach method apply link changes to projects rather than the image src
}

const populateTitle = (imgArr) => {
  let projectTitles;
  if (currentArr === vanillaJSImgArr) {
    projectTitles = ['Bouncing Balls', 'Hangman Game', 'JavaScript Clock', 'JavaScript Drum Kit',
    'JavaScript Music Box', 'Custom PDF Viewer'];
  } else {
    projectTitles = null;
  }
  return projectTitles;
}

const titleLoader = (projectTitles) => {
  const images = document.querySelectorAll('.project-tile');
  let titleIndex = 0;
  for (let item of images) {
    (function() {
      let title = projectTitles[titleIndex];
      console.log(title);
      item.addEventListener('mouseover', function() {
        document.getElementById('projectTitle').innerHTML = `${title}`;
        console.log(1);
      })
      titleIndex++;
    }());
  }
}

const imgLoader = (imgArr) => {
  let tileIndex = 0;
  imgArr.forEach(function(image){
    const tiles = document.querySelectorAll('.project-tile-img');
    tiles[tileIndex].setAttribute("src", image);
    tileIndex++;
  })
}

const populateImages = (button) => {
  let imgArr;
  switch(button) {
    case 'vanillajs-icon':
      imgArr = vanillaJSImgArr;
      currentArr = vanillaJSImgArr;
      return imgArr;
      break;
    case 'react-icon':
      imgArr = reactImgArr;
      break;
    case 'nodejs-icon':
      imgArr = nodejsArr;
      b
      +reak;
    case 'animation-icon':
      imgArr = animationArr;
      break;
    case 'api-icon':
      imgArr = apiArr;
  }
  return imgArr;
}


const tiles = document.querySelectorAll('.project-tile');
let tilesImg = document.querySelectorAll('.project-tile-img');

let currentTile = 6;
let index = 0;
let imgIndex = 0;
function addTileClicker() {
  let tileList = document.querySelectorAll('.project-tile');
  for (let tile of tileList) {
    tile.addEventListener('click', function() {
      removeClickedTile();
      tile.classList.add('clickedTile');
    })
  }
}
addTileClicker();
function removeClickedTile() {
  let tileList = document.querySelectorAll('.project-tile');
  for (let tile of tileList) {
    tile.classList.remove('clickedTile');
  }
}
function flipTiles (currentTile) {
  setTimeout(function () {
    tiles[index].classList.add('flip');
    setTimeout(function () {
      tilesImg[imgIndex].style.opacity = 1;
      imgIndex++;
    }, 500);
    index++;
    if(--currentTile) {
      flipTiles(currentTile);
    }
  }, 80);

  setTimeout(function() {
    for(let i = 0; i < 6; i++) {
      tiles[i].classList.remove('flip');
    }
  }, 1400);
  for (let item of tilesImg) {
    item.addEventListener("mouseover", function() {
      document.getElementById('projectTitle').innerHTML = projectTitle;

    })
  }
};



export default clicker;
