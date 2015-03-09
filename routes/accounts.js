AccountsTemplates.configureRoute('signIn', {
  name: 'login',
  path: '/login',
  template: 'login',
  layoutTemplate: 'layout',
  redirect: '/',
});

AccountsTemplates.configure({
  // Behaviour
  confirmPassword: true,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  overrideLoginErrors: true,
  sendVerificationEmail: false,
  lowercaseUsername: false,

  // Appearance
  showAddRemoveServices: false,
  showForgotPasswordLink: false,
  showLabels: true,
  showPlaceholders: true,

  // Client-side Validation
  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: true,

  // Privacy Policy and Terms of Use
  privacyUrl: 'privacy',
  termsUrl: 'terms-of-use',

  // Redirects
  homeRoutePath: '/',
  redirectTimeout: 4000,

  // Texts
  texts: {
    button: {
      signIn: 'Login',
      signUp: 'Register'
    },
    socialSignUp: 'Register with Social',
    title: {
      forgotPwd: 'Recover Your Password'
    },
  }
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
