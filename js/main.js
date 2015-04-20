
$(function(){

  var types = ['pig', 'car', 'money', 'footsun'].sort(function() {
    return .5 - Math.random();
  });

  var ctn = $('.mini-games');

  types.forEach(function(item){
    ctn.append(
      $('<a>')
        .addClass(item)
        .attr('href', "/scene-" + item + "/index.html")
    );
  });

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