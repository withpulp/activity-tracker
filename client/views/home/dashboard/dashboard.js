Template['dashboard'].helpers({
  notTracking: function() {
    // @TODO: if Stats.length === 0 => return true
    // check stats only for currentUser.username
  }
});

Template['dashboard'].events({
  'click .start-tracking': function (e) {
    e.preventDefault();

    var now = moment(),
        user = Meteor.user().username,
        act = {
          username: user,
          start: now
        }

    Stats.insert(act);

    // @TODO: insert event object to Stats.events[]
    // event: { start: now }
    // if events[].count() > 0 => update previous event: { end: now }
    // and create new event: { start: now }
  }
});
