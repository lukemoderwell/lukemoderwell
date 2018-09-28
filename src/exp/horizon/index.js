// js
const gallery = document.querySelector('[data-gallery]');
const left = document.querySelector('[data-left]');
const right = document.querySelector('[data-right]');
const units = document.querySelectorAll('.unit');
const pad = 15;
let currentPos = 0;
let featUnit = 0;

function i() {
  const width = gallery.scrollWidth;
  const is = `transform: translate3d(0px, 0px, 0px);cursor: grab;touch-action: pan-y;user-select: none;width: ${width}px;`
  gallery.style = is;
}

function shift(offset) {
  currentPos = currentPos + offset;
  gallery.style = `transform: translate3d(${currentPos}px, 0px, 0px)`;
  console.log(gallery.style.transform);
}

left.addEventListener('click', function() {
  offset = units[featUnit].offsetWidth;
  shift(offset);
  featUnit = featUnit - 1;
});

right.addEventListener('click', function() {
  offset = units[featUnit].offsetWidth;
  shift(-(offset + pad));
  featUnit = featUnit + 1;
});

i();

