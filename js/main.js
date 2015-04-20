
$(function(){

  var types = ['pig', 'car', 'money', 'footsun'].sort(function() {
    return .5 - Math.random();
  });

  var ctn = $('.mini-games');

  types.forEach(function(item){
    var completedClass =
      localStorage.getItem('scene-' + item + '-completed') === null ?
        'not-completed' :
        'completed';

    ctn.append(
      $('<a>')
        .addClass(item)
        .addClass(completedClass)
        .attr('href', "/scene-" + item + "/index.html")
        .click(function(e){
          e.preventDefault();
          ctn.find('a').not(this).fadeOut();
          $('.help-' + item).removeClass('hidden');
          $('.controls').removeClass('hidden');
          $('.controls .play').attr('href', this.href);
        })
    );
  });

  $('.controls .back').click(function(e){
    e.preventDefault();
    $('.controls').addClass('hidden');
    $('.help').addClass('hidden');
    ctn.find('a').fadeIn();
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
