// accounts config

AccountsTemplates.configure({
  // Behaviour
  confirmPassword: false,
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
    title: {
      signIn: 'Sign In',
      signUp: 'Register with Social',
      forgotPwd: 'Recover Your Password'
    },
    button: {
      signIn: 'Sign In',
      signUp: 'Register'
    }
  }
});

// customize fields

AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');

AccountsTemplates.addFields([
  {
    _id: 'username',
    type: 'text',
    displayName: 'Username',
    minLength: 3,
    required: true,
    func: function(value) {
      if (Meteor.isClient) {
        console.log('Validating username...');
        var self = this;
        Meteor.call('userExists', value, function(err, userExists){
          if (!userExists)
            self.setSuccess();
          else
            self.setError(userExists);
            self.setValidating(false);
        });
        return;
      }

      // Server
      return Meteor.call('userExists', value);
    }
  },
  {
    _id: 'email',
    type: 'email',
    required: true,
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'Invalid email',
    displayName: 'Email',
  },
  {
    _id: 'username_and_email',
    type: 'text',
    required: true,
    displayName: 'Username or email',
    placeholder: 'Username or email'
  },
  {
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 6,
    displayName: 'Password'
  }
]);
