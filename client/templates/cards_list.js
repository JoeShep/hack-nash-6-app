// Template.cardsList.helpers({
//   posts: function() {
//     return Media.find();
//   }
// });
var cardsData = [ {
    name: 'Introducing Telescope',
    imgUrl: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    name: 'Meteor',
    imgUrl: 'http://meteor.com'
}, {
    name: 'The Meteor Book',
    imgUrl: 'http://themeteorbook.com'
  }
];
Template.cardsList.helpers({
  cards: cardsData
});
