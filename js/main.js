(function () {
  $(".more").click(function () {
    $(this).addClass("hide"), $(".footerInfo").toggleClass("closed"), $(".less").toggleClass("hide"), $("body").addClass("no-scroll")
  }), $(".less").click(function () {
    $(".footerInfo").toggleClass("closed"), $(".less").toggleClass("hide"), $(".more").removeClass("hide"), $("body").removeClass("no-scroll")
  }), particlesJS("particles-js", {
    particles: {
      number: {
        value: 24,
        density: {
          enable: !0,
          value_area: 1e3
        }
      },
      color: {
        value: "#53BDBD"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 10
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: !0,
        anim: {
          enable: !1,
          speed: 4,
          opacity_min: .1,
          sync: !1
        }
      },
      size: {
        value: 3,
        random: !0,
        anim: {
          enable: !0,
          speed: 1,
          size_min: 1,
          sync: !1
        }
      },
      line_linked: {
        enable: !1,
        distance: 150,
        color: "#ffffff",
        opacity: .4,
        width: 1
      },
      move: {
        enable: !0,
        speed: 3,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: {
          enable: !0,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: !0,
          mode: "repulse"
        },
        onclick: {
          enable: !0,
          mode: "push"
        },
        resize: !0
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 100,
          duration: .4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: !0
  })
}).call(this);

// Particle JS
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 24,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#53BDBD"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 10
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "size_min": 1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
