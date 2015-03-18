Template['dashboard'].helpers({
  notTracking: function() {
    // @TODO: if Acts.length === 0 => return true
    // check stats only for currentUser.username
  }
});

Template['dashboard'].events({
  'click .start-tracking': function (e) {
    e.preventDefault();

    var now = new Date(),
        user = Meteor.user().username,
        act = {
          username: user,
          start: now
        }

    Acts.insert(act);

    // @TODO: insert event object to Acts.events[]
    // event object has username, start, and new
    // start: now
    // new: now + 1 day using moment()
    // use new variable to check when to enable track-again button
    // track-again click event will have same object
  }
});
