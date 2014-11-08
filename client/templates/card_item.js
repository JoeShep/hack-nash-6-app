Template.cardItem.helpers(
  { domain: function() {
    var a = document.createElement('a');
    a.href = this.imgUrl;
    return a.hostname;
  }
});
