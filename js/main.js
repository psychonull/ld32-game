
var bg_menu = new Howl({
  urls: ['audio/bg_menu.mp3', 'audio/bg_menu.ogg'],
  autoplay: true,
  loop: true,
  volume: 0.3,
  onEnd: function() {
    bg_menu.stop();
    bg_menu.play();
  }
});

var rumble_ready = false;
var rumble = new Howl({
  urls: ['audio/rumble.mp3', 'audio/rumble.ogg', 'audio/rumble.wav'],
  autoplay: false,
  loop: true,
  volume: 0.3,
  onload: function() {
    rumble_ready = true;
  }
});

var cancel_ready = false;
var cancel = new Howl({
  urls: ['audio/cancel.mp3', 'audio/cancel.ogg', 'audio/cancel.wav'],
  autoplay: false,
  volume: 0.3,
  onload: function() {
    cancel_ready = true;
  }
});

var hover_ready = false;
var hover = new Howl({
  urls: ['audio/hover.mp3', 'audio/hover.ogg', 'audio/hover.wav'],
  autoplay: false,
  volume: 0.3,
  onload: function() {
    hover_ready = true;
  }
});

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
    if (cancel_ready) cancel.play();
  }

  $('.game-controls a.back').click(goback);

  $('.game-controls a').hover(function(){
    if (hover_ready) hover.play();
  }, function(){
    if (hover_ready) hover.stop();
  });

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
      if (rumble_ready) rumble.play();
      $(this).trigger('startRumble');
    }, function(){
      if (rumble_ready) rumble.stop();
      $(this).trigger('stopRumble');
    });

});
