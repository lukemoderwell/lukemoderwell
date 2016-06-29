$(".more").click ->
  $(this).addClass "hide"
  $(".footerInfo").toggleClass "closed"
  $(".less").toggleClass "hide"
  return

$(".less").click ->
  $(".footerInfo").toggleClass "closed"
  $(".less").toggleClass "hide"
  $(".more").removeClass "hide"
  return