import moment from 'moment-timezone';
const clock = document.getElementById('clock');

function updateClock() {
  const now = moment.tz('America/New_York').format('H:mm:ss');
  clock.innerText = now;
}

setInterval(updateClock, 1000);
