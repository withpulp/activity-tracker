Template['dashboard'].helpers({
  notTracking: function() {
    // @TODO: if Stats.length === 0 => return true
    // check stats only for currentUser.username
  }
});

Template['dashboard'].events({
  'click .start-tracking': function () {
    var now = moment();
    console.log(now);
  }
});
