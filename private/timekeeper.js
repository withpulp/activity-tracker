//Method that keeps track of activity time

//Psuedo code
//On click '.start-tracking', get the current date and time in hours


Template.newActivity.events({
  'click .start-tracking': function (event) {
    var currentTime = event.moment();
    console.log(currentTime);
  }
});

Meteor.methods({
  newPost: function () {
    console.log("Holy shit, it's working?");
  }
})

//User has n = 0 days by default. Every 24 hours, add days + 1
