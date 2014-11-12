function requireLogin(pause) {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
    this.render("access-denied");
    pause();
    }
  }
}
