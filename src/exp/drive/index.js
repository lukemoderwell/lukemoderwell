import {TweenMax} from "gsap";

function init() {
  // make sure DOM has loaded, etc
  wait(loadingFadeIn, 500);
  wait(loadingFadeOut, 2000);
  wait(revealVideo, 3000);
  // wait(videoFadeOut, 5000);
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

  TweenMax.to('.video-poster', 0, {
    opacity: 1,
    visibility: 'visible',
    delay: .5
  });

  // swiper down
  TweenMax.to('.video-swiper', .75, {
    height: 0,
    top: 0,
    delay: .95,
    ease: Power1.easeInOut
  });
}

function videoFadeOut() {
  TweenMax.to('.video-wrapper', .75, {opacity: .95});
  TweenMax.to('.video-poster', .75, {
    width: 500,
    height: 500,
    x: '50%',
    borderRadius: '50%',
    ease: Power1.easeInOut
  });
}

function wait(f, t) {
  setTimeout(function () {
    f();
  }, t);
}

init();
