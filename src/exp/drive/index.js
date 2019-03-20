import {TweenMax} from "gsap";

function init() {
  // make sure DOM has loaded, etc
  wait(loadingFadeIn, 500);
  wait(loadingFadeOut, 2000);
  wait(revealVideo, 3000);
  wait(videoTransform, 6000);
}

function loadingFadeIn() {
  TweenMax.to('.loading-logo', .75, {
    opacity: 1,
    y: '0',
    ease: Power1.easeInOut
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
    delay: .5
  });

  // hide loading
  TweenMax.to('.loading-wrapper', 0, {
    opacity: 0,
    visibility: 'hidden',
    pointerEvents: 'none',
    delay: .75
  });

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
    x: '50vw',
    width: '50vw',
    ease: Power1.easeInOut
  });

  TweenMax.to('.content-title', .75, {
    opacity: 1,
    visibility: 'visible',
    ease: Power1.easeInOut,
    delay: .5
  });
}

function wait(f, t) {
  setTimeout(function () {
    f();
  }, t);
}

init();
