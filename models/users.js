Users = Meteor.users

Users.helpers({
  userActs: function() {
    return Acts.find({userId: this._id});
  }
});

Meteor.methods({
  'userExists': function(username){
    return !!Users.findOne({username: username});
  }
});
