import bouncingBallsImg from '../img/vanillaJS/bouncingBallsScreenshot.png';
import hangmanImg from '../img/vanillaJS/hangmanScreenshot.png';
import javaClockImg from '../img/vanillaJS/javaClockScreenshot.png';
import jsDrumSetImg from '../img/vanillaJS/jsDrumSetScreenshot.png';
import musicBoxImg from '../img/vanillaJS/musicBoxScreenshot.png';
import pdfImg from '../img/vanillaJS/pdfScreenshot.png';

let vanillaJSImgArr = [bouncingBallsImg, hangmanImg, javaClockImg, jsDrumSetImg, musicBoxImg, pdfImg];

let frameCount=0, fps, fpsInterval, startTime, now, then, elapsed;

const randomCoor = () => {
  let ranNumX, ranNumY;
  ranNumX = () => {
    return Math.floor(Math.random() * (380 - 20) + 20);
  }
   ranNumY = () => {
     return Math.floor(Math.random() * (380 - 20) + 20);
   }

   const point =`${ranNumX()} ${ranNumY()}`;
   return point;
}

const startAnimating = (fps) => {
  fpsInterval = 1000/fps;
  then= Date.now();
  startTime = then;
  animate();
}

const animate = () => {
  requestAnimationFrame(animate);
  now = Date.now();
  elapsed = now - then;
  if(elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    const t = document.querySelector('#t');
  t.setAttribute('d', `M ${randomCoor()} L ${randomCoor()} L ${randomCoor()}`);
  }
}

document.addEventListener('load', startAnimating(1));

const tiles = document.querySelectorAll('.project-tile');

let currentTile = 6;
let index = 0;
function flipTiles (currentTile) {
  setTimeout(function () {
    tiles[index].classList.add('flip');
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
};

const clicker = () => {
  let btnId = event.target.id;
  console.log(btnId);
  index = 0;
  let tileIndex = 0;
  flipTiles(currentTile);
  const imgArr = populateImages(btnId);
  console.log(imgArr);
  imgArr.forEach(function(image){
    const tiles = document.querySelectorAll('.project-tile-img');
    let tile = tiles[tileIndex];
    tile.setAttribute("src", image)
    console.log(tile);
    tileIndex++;
  })
}

const populateImages = (button) => {
  let imgArr;
  switch(button) {
    case 'vanillajs-icon':
      imgArr = vanillaJSImgArr;
      return imgArr;
      break;
    case 'react-icon':
      imgArr = reactImgArr;
      break;
    case 'nodejs-icon':
      imgArr = nodejsArr;
      break;
    case 'animation-icon':
      imgArr = animationArr;
      break;
    case 'api-icon':
      imgArr = apiArr;
  }
  return imgArr;
}

const btn = document.querySelectorAll('.flipBtn');
for(let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', clicker);
}

const unclip = () => {

}

document.querySelectorAll('.resumeArrow').forEach((arrow) => {
  arrow.addEventListener('click', unclip);
})

window.setTimeout( function() {
  document.getElementById('animationBox').style.opacity = '1';
  document.getElementById('t').style.opacity = '1';
}, 100 );
