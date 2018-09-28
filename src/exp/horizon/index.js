// js
const gallery = document.querySelector('[data-gallery]');
const left = document.querySelector('[data-left]');
const right = document.querySelector('[data-right]');
const units = document.querySelectorAll('.unit');
const pad = 15;
let currentXPosition;
let featUnit;

function i() {
  currentXPosition = 0;
  featUnit = 0;

  const width = gallery.scrollWidth;
  const is = `transform: translate3d(0px, 0px, 0px);cursor: grab;touch-action: pan-y;user-select: none;width: ${width}px;`
  gallery.style = is;
}

function updateFeatUnit(el) {
  if (offset < 0) {
    featUnit = featUnit + 1;  
  } else {
    featUnit = featUnit - 1;
  }
  console.log(units[featUnit]);
}

function shift(offset) {
  if (featUnit == 0) {
    offset = offset - pad;
  }
  currentXPosition = currentXPosition + offset;
  gallery.style = `transform: translate3d(${currentXPosition}px, 0px, 0px)`;
  console.log(gallery.style.transform);
}

left.addEventListener('click', function() {
  offset = units[featUnit].offsetWidth;
  shift(offset);
});

right.addEventListener('click', function() {
  offset = units[featUnit].offsetWidth;
  shift(-(offset));
});

i();

