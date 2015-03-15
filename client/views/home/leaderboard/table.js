Template['table'].helpers({
  standings: function() {
    return Standings.find({}, {sort: {days: -1}});
  }
});
