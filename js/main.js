(function(){$(".more").click(function(){$(".footerInfo").toggleClass("closed"),$(".less").toggleClass("hide")}),$(".less").click(function(){$(".footerInfo").toggleClass("closed"),$(".less").toggleClass("hide")})}).call(this);

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
