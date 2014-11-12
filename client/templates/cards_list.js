Template.cardsList.helpers({
  cards: function() {
    var array = Media.find().fetch();
    var shuffled = _.shuffle(array);
    return shuffled;
  }
});

Template.cardsList.rendered = function(){
  console.log("WTF?");
  this.$(".card-content").animate({opacity: 1}, "slow");
};
