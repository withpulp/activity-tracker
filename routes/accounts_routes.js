AccountsTemplates.configureRoute('signIn', {
  name: 'signIn',
  path: '/sign-in',
  template: 'signIn',
  layoutTemplate: 'layout',
  redirect: '/',
});

Router.route('/privacy', {
  name: 'privacy'
}, function () {
  this.render('privacy');
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/terms-of-use', {
  name: 'terms'
}, function () {
  this.render('terms');
  SEO.set({ title: Meteor.App.NAME });
});
