import TweenLite from 'gsap';
const gallery = document.querySelector('[data-gallery]');
const left = document.querySelector('[data-left]');
const right = document.querySelector('[data-right]');
const units = document.querySelectorAll('.unit');
const pad = 15;
let currentXPosition;
let featUnit;

function init() {
  currentXPosition = 0;
  featUnit = 0;

  const width = gallery.scrollWidth;
  const baseStyles = `transform: translate3d(0px, 0px, 0px);cursor: grab;touch-action: pan-y;user-select: none;width: ${width}px;`
  gallery.style = baseStyles;
}

function updateFeatUnit(amount) {
  featUnit = featUnit + amount;
  // can never have negative units
  featUnit < 0 ? featUnit == 0 : "";
  console.log(units[featUnit]);
}

function shift(offset) {
  // handle first shift + padding
  if (featUnit == 0) {
    offset = offset - pad;
  }

  // handle shift back to first unit
  if (featUnit == 1 && offset > 0) {
    offset = offset + pad;
  }
  currentXPosition = currentXPosition + offset;
  TweenLite.to(gallery, .25, {x:currentXPosition})
}

left.addEventListener('click', function() {
 moveLeft();
});

right.addEventListener('click', function() {
  moveRight();
});

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

