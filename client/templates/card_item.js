var counter = 0;
var matches = 0;

Template.cardItem.helpers({
  domain: function() {
    var pic = document.createElement('img');
    pic.src = this.imgUrl;
    return pic.src;
  }
});

Template.cardItem.events({
  'click': function(){
    var target = event.currentTarget,
        $pic = $(target).find('.pic'),
        $tile = $(target).children('.tile');

    if($tile.hasClass('matched') || $('.play_btn').text() === 'play' || $('.flipped').length === 2)
      return;

    if(!$tile.hasClass('flipped') && $('.flipped').length < 2){
      $tile.flip({
        direction:'rl',
        speed: 200,
        color: 'white',
        onEnd: function(){
          // debugger;
          if($('.flipped:eq(1)').length){
            checkMatch();
            counter += 1;
            $('#flip-count').text(' ' + counter);
          }
        }
      }).addClass('flipped');
      $pic.toggleClass('invisible');
    } else {
      $pic.toggleClass('invisible');
      $tile.removeClass('flipped').revertFlip();
    }
  }
});

function checkMatch(){
  var $pic1 = $('.flipped:eq(0)').find('img').data('id');
  var $pic2 = $('.flipped:eq(1)').find('img').data('id');

  if( $pic1 === $pic2 ){
    $('.flipped').addClass('matched').removeClass('flipped');
    $('.matched').children().css('outline','5px solid green');
    $('#ding')[0].play();
    playMultiSound($('audio[class="'+$pic1+'"]'));
    $('#js-boardContainer').animate({'background-color':'green'},300).delay(300).animate({'background-color':'#7792A8'},200);
    matches += 1;
    $('#match-count').text(' ' + matches);

    if($('.matched').length === 20){
      setTimeout(function(){
        alert('Great job!');
      },500);
    }
  } else {
      $('#wrong')[0].play();
      setTimeout(function(){
        $('.flipped').revertFlip().removeClass('flipped');
      },800);
    }
}

function playMultiSound(s) {
  var soundFX = new Audio();
  soundFX.src = s.attr('src');
  soundFX.volume = s.attr('volume') || "1.0";
  soundFX.load();
  soundFX.play();
  // debugger;
}

