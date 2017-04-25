$(".more").click ->
  $(this).addClass "hide"
  $(".footerInfo").toggleClass "closed"
  $(".less").toggleClass "hide"
  $("body").addClass "no-scroll"
  return

$(".less").click ->
  $(".footerInfo").toggleClass "closed"
  $(".less").toggleClass "hide"
  $(".more").removeClass "hide"
  $("body").removeClass "no-scroll"
  return
