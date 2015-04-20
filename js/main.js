
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
          $('.game-controls').removeClass('hidden');
          $('.game-controls .play').attr('href', this.href);
          $('.mini-games').addClass('opened');
        })
    );
  });

  function goback(e){
    if (e) e.preventDefault();

    $('.game-controls').addClass('hidden');
    $('.help').addClass('hidden');
    $('.mini-games').removeClass('opened');
    ctn.find('a').fadeIn();
  }

  $('.game-controls a.back').click(goback)
  $(window, document).on('keyup', function(e){

    if ((e.keyCode || e.which) === 27) goback();

    else if ((e.keyCode || e.which) === 13)
      window.location = $('.play').attr('href');
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
