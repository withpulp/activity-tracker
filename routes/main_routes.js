Router.route('/', {
  name: 'home',
  data: function() {
    return Acts.find({username: Meteor.user().username});
  },
  waitOn: function () {
    return [
      Meteor.subscribe('standings'),
      Meteor.subscribe('acts', 'username'),
      Meteor.subscribe('quotes')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('home');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/leaderboard', {
  name: 'leaderboard',
  waitOn: function () {
    return [
      Meteor.subscribe('standings')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('leaderboard');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/dashboard', {
  name: 'dashboard',
  waitOn: function () {
    return [
      Meteor.subscribe('acts'),
      Meteor.subscribe('quotes')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('dashboard');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});
