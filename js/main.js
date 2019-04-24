import startAnimating from './svgLoader.js';
import clicker from './portfolio.js'
import Resume from './Resume.jsx'


document.addEventListener('load', startAnimating(1));

const btn = document.querySelectorAll('.flipBtn');
for(let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', clicker);
}

window.setTimeout( function() {
  document.getElementById('animationBox').style.opacity = '1';
  document.getElementById('t').style.opacity = '1';
}, 1000 );
