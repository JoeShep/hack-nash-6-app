Template.button.events({
  'click': function() {
    setup();
  }
});

Template.button.helpers({

});

function setup() {
  if($(".reset_btn").length){
    location.reload();
  } else {
    setShuffle();
    $('#shuffle')[0].play();
    $('#shuffle').on('ended', function(){
      $('#ding')[0].play();
    });
    $('.btn-success').toggleClass('play_btn reset_btn').text('Reset');
  }
}

function setShuffle(){
  var numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
  var runCount = 0;
  (function animateShuffle(){
    runCount++;
    if(runCount > 15) {
      return;
    }
    var random = _.shuffle(numbers);
    var random1 = random[0];
    var random2 = random[1];
    var random3 = random[2];
    var $tile1 = $('.tile:eq(' + random1 + ')');
    var $tile2 = $('.tile:eq(' + random2 + ')');
    var $tile3 = $('.tile:eq(' + random3 + ')');
    var $tiles = $tile1.add($tile2).add($tile3);
    $tiles.removeClass('tileStyle1').addClass('tileStyle2');
    setTimeout(function(){
      $tiles.removeClass('tileStyle2').addClass('tileStyle1');
    }, 100);
    setTimeout(animateShuffle, 150);
  })();
}
