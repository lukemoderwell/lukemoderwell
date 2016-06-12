$(".more").click ->
  $(".footerInfo").toggleClass "closed"
  $(".less").toggleClass "hide"
  return

$(".less").click ->
  $(".footerInfo").toggleClass "closed"
  $(".less").toggleClass "hide"
  return