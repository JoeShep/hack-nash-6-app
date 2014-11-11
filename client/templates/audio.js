Template.audio.helpers({
  sounds: function() {
    return Media.find({}, {fields: {id: 1, audioUrl: 1}});
  }
});

