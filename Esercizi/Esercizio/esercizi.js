function trasforma() {
  if($(this).hasClass("oscilla")) {
    $(this).removeClass("oscilla");
    $(this).removeClass("centro")
  }
  else if($(this).hasClass("centro"))
      $(this).addClass("oscilla");
  else
    $(this).addClass("centro");
}

$(".quadrato").click(trasforma);
