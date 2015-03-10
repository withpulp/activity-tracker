Template['header'].events({
  'click .logout.button' : function () {
    Meteor.logout();
  }
});
