Router.route('/', {
  name: 'home',
  data: function() {
    return Acts.findOne({userId: this.userId});
  },
  waitOn: function () {
    return [
      Meteor.subscribe('standings'),
      Meteor.subscribe('acts', Meteor.userId()),
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
