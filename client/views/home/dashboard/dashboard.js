Template.dashboard.rendered = function() {

};

Template['dashboard'].helpers({
  //userActs: function() {
  //  return Acts.find({ username: username }).fetch();
  //},
  notTracking: function() {
    // @TODO:
    // create publication & subscription to Acts for currentUser
    // if Acts.length === 0 => return true
    // else
    // return false
  }
});

Template['dashboard'].events({
  'click .start-tracking': function (e) {
    e.preventDefault();

    var now = new Date(),
        userId = Meteor.userId(),
        username = Meteor.user().username,
        act = {
          userId: userId,
          username: username,
          days: 1,
          activity: {
            start: now
          }
        }

    console.log(act);
<<<<<<< HEAD
    //Acts.insert(act);
    
=======
    Acts.insert(act);

>>>>>>> 5b55b53e03a42207f3a9cb3cc60401615241ba44
    // @TODO: insert event object to Acts.events[]
    // event object has username, start, and new
    // start: now
    // new: now + 1 day using moment()
    // use new variable to check when to enable track-again button
    // track-again click event will have same object


    // @TODO: Insert '1 day' into DB
    // Every day, at 12am, insert new day key into database (explore CRON task)
    //  Positive scenario:
    //    When user clicks 'COMMIT'
    //    Add '1' value to key-value pair
    //    And log event as 1 day
    //  Negative scenario:
    //      When user does not click 'COMMIT'
    //      Keep value null
    //      And reset tracker (tracker reset def TBD)
  }
});
