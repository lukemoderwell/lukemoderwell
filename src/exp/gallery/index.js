import TweenLite from 'gsap';
const gallery = document.querySelector('[data-gallery]');
const units = document.querySelectorAll('.unit');
const unitWrapper = document.querySelector('.unit-wrapper');
const pad = 15;
let currentXPosition;
let featUnit;

function init() {
  currentXPosition = 0;
  featUnit = 0;
  unitWrapper.style.paddingLeft = `${(window.innerWidth / 2) - (units[0].offsetWidth / 2)}px`;
  const width = gallery.scrollWidth;
  const baseStyles = `transform: translate3d(0px, 0px, 0px);cursor: grab;touch-action: pan-y;user-select: none;width: ${width}px;`
  gallery.style = baseStyles;
}

function updateFeatUnit(amount) {
  units[featUnit].classList.remove('featured');
  featUnit = featUnit + amount;
  // can never have negative units
  featUnit < 0 ? featUnit == 0 : "";
  units[featUnit].classList.add('featured');
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

function moveLeft() {
  if (featUnit >= 1) {
    let offset = units[featUnit - 1].offsetWidth;
    shift(offset);
    updateFeatUnit(-1);
  }
}

function moveRight() {
  let offset = units[featUnit].offsetWidth;
  shift(-(offset));
  updateFeatUnit(1);
}

window.addEventListener('keydown', function(event) {
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  key == "ArrowRight" ? moveRight() : '';
  key == "ArrowLeft" ? moveLeft() : '';
});

init();

