Template.cardItem.helpers(
  { domain: function() {
    var pic = document.createElement('img');
    pic.src = this.imgUrl;
    return pic.src;
  }
});
