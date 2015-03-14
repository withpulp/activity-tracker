Template['dashboard'].events({
  'click .start-tracking': function () {
    var currentTime = moment();
    console.log(currentTime);
  }
});
