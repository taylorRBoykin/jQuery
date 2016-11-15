// JQUERY

$(document).ready(function(){

  $('#slide').click(function(){
    $('#box').slideToggle(1000);
  });

  $('#fade').click(function(){
    $('#box').fadeToggle(1000);
  });

});
