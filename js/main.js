
$(function(){

  $('.mini-games a').jrumble({
      x: 2,
      y: 2,
      rotation: 1
    })
    .hover(function(){
      $(this).trigger('startRumble');
    }, function(){
      $(this).trigger('stopRumble');
    });

});