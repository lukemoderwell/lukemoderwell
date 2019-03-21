import { TweenMax, Power0, Power1, Power2, Power3, Power4 } from "gsap";

let isLoading = true;

const posterSrc = document.querySelector('.video-poster');

function init() {
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  nextBtn.addEventListener('click', handleNextClick);

  // make sure DOM has loaded, etc
  loading();
  wait(revealVideo, 3000);
  wait(videoTransform, 6000);
}

function loading() {
  if (isLoading) {
    loadingFadeIn();
    setTimeout(loadingFadeOut, 3000);
  }
}

function handleNextClick() {
  // swiper up
  TweenMax.to('.video-swiper', .75, {
    height: '100%',
    ease: Power1.easeInOut
  });

  // set new video
  setTimeout(function() {
    console.log(posterSrc);
    posterSrc.src = 'https://player.vimeo.com/external/323481091.source.mp4?s=69a761d7dd8257a4cc6365edad9fd2bdd931f401&download=1';
  }, 750);
  
  // swiper down
  TweenMax.to('.video-swiper', .75, {
    height: 0,
    top: 0,
    delay: 1.2,
    ease: Power1.easeInOut
  });
}

function loadingFadeIn() {
  TweenMax.to('.loading-logo', .75, {
    opacity: 1,
    y: '0',
    ease: Power2.easeInOut,
    delay: .25
  });
}

function loadingFadeOut() {
  TweenMax.to('.loading-logo', .75, {
    opacity: 0,
    y: '15%',
    ease: Power1.easeInOut
  });
}

function revealVideo() {
  TweenMax.to('.video-wrapper', .75, {
    y: 0,
    ease: Power1.easeInOut
  });

  // swiper up
  TweenMax.to('.video-swiper', .75, {
    height: '100%',
    ease: Power1.easeInOut
  });

  // show video
  TweenMax.to('.video-poster', 0, {
    opacity: 1,
    visibility: 'visible',
    delay: .75
  });

  // hide loading
  TweenMax.to('.loading-wrapper', 0, {
    opacity: 0,
    visibility: 'hidden',
    pointerEvents: 'none',
    delay: .75
  });

  // bg color change
  bgColorChange('#D8C5AC', .5, .75);

  // show content
  TweenMax.to('.content-wrapper', 0, {
    opacity: 1,
    visibility: 'visible',
    delay: .75
  });

  // swiper down
  TweenMax.to('.video-swiper', .75, {
    height: 0,
    top: 0,
    delay: .95,
    ease: Power1.easeInOut
  });
}

function videoTransform() {
  TweenMax.to('.video-wrapper', .75, {
    x: '30vw',
    width: '70vw',
    ease: Power2.easeInOut
  });

  TweenMax.to('.content', .75, {
    opacity: 1,
    y: 0,
    visibility: 'visible',
    ease: Power2.easeInOut,
    delay: .5
  });
}

function bgColorChange(color, time, delay) {
  TweenMax.to('.drive-intro', time, {
    backgroundColor: color,
    ease: Power0.easeInOut,
    delay: delay || 0
  })
}

function wait(f, t) {
  setTimeout(function () {
    f();
  }, t);
}

init();
