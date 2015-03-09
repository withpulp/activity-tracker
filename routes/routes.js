Router.route('/', {
  name: 'home'
}, function () {
  this.render('home');
  SEO.set({ title: Meteor.App.NAME });
});
