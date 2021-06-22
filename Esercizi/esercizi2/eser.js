function spinner(){
  if($("#cornice").hasClass("spinning")){
    $("#cornice2").addClass("spinning2")
  }
    $("#cornice").addClass("spinning")
}

$("#stella").on("click", spinner);
