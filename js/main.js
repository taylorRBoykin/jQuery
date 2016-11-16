// JQUERY

$(document).ready(function(){

  $('#slide').click(function(){
    $('#box').slideToggle(1000);
  });

  $('#fade').click(function(){
    $('#box').fadeToggle(1000);
  });

  // FADE TO .5

  $('#box').click(function(){

    $('div, ul li:nth-child(2)').fadeTo(500, 0.5);

  });

});
