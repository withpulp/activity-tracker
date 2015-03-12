Router.route('/', {
  name: 'home'
}, function () {
  this.render('home');
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/leaderboard', {
  name: 'leaderboard'
}, function () {
  this.render('leaderboard');
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/dashboard', {
  name: 'dashboard'
}, function () {
  this.render('dashboard');
  SEO.set({ title: Meteor.App.NAME });
});
