import TweenLite from 'gsap';
const gallery = document.querySelector('[data-gallery]');
const units = document.querySelectorAll('.unit');

let currentXPosition;
let featUnit;

function init() {
  currentXPosition = 0;
  featUnit = 0;
  addAnimation(units[featUnit]);

  const width = gallery.scrollWidth;
  const baseStyles = `transform: translate3d(0px, 0px, 0px);cursor: grab;touch-action: pan-y;user-select: none;width: ${width}px;`
  gallery.style = baseStyles;
}

function updateFeatUnit(amount) {
  featUnit = featUnit + amount;
  // can never have negative units
  featUnit < 0 ? featUnit == 0 : "";
  addAnimation(units[featUnit]);
}

function addAnimation(unit) {
  var animationReady = unit.querySelectorAll('[data-animation]');
  for (var i = 0; i < animationReady.length; i += 1) {
    animationReady[i].classList.add('animation', animationReady[i].dataset.animation);
  }
}

function shift(offset) {
  currentXPosition = currentXPosition + offset;
  TweenLite.to(gallery, .25, {x:currentXPosition})
}

function moveLeft() {
  if (featUnit >= 1) {
    let offset = units[featUnit - 1].offsetWidth;
    shift(offset);
    updateFeatUnit(-1);
  }
}

function moveRight() {
  if (featUnit < units.length - 1) {
    let offset = units[featUnit].offsetWidth;
    shift(-(offset));
    updateFeatUnit(1);
  }
}

window.addEventListener('keydown', function(event) {
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  key == "ArrowRight" ? moveRight() : '';
  key == "ArrowLeft" ? moveLeft() : '';
});

init();

