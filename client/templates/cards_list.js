Template.cardsList.helpers({
  cards: function() {
    var array = Media.find().fetch();
    var shuffled = _.shuffle(array);
    return shuffled;
  }
});


