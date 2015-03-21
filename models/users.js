Users = Meteor.users

Meteor.methods({
  'userExists': function(username){
    return !!Users.findOne({username: username});
  }
});
