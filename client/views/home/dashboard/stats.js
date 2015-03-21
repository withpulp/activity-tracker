Template['stats'].helpers({
  currentStreak: function() {
    return Acts.find({ field: { days: 1} });
  },
  today: function() {
    return moment().format('MMMM Do');
  }
});
