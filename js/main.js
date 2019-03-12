

let vanillaJsImgArr = [];
let reactImgArr = [];
let nodeJsImgArr = [];
let animationImgArr = [];
let apiImgArr = [];

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
console.log(tiles);

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
  index = 0;
  flipTiles(currentTile);
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
