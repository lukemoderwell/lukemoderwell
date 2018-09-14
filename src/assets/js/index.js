import moment from 'moment-timezone';
const clock = document.getElementById('clock');
const celestial = document.getElementById('celestialBody');

function setEmoji(hour) {
  let emoji;
  console.log(hour)
  
  if (hour > 18 || hour < 7) {
    emoji = '🌙';
  } else {
    emoji = '🌞'
  }

  return emoji;
}

function updateClock() {
  clock.innerText = moment.tz('America/New_York').format('H:mm:ss');
  const e = setEmoji(moment.tz('America/New_York').format('H'));
  celestial.innerText = e;
}

setInterval(updateClock, 1000);
