Meteor.startup(function() {

  // facebook config
  ServiceConfiguration.configurations.update({
    'service': 'facebook'
  }, {
    $set: {
      'appId': 'xxxxxxxxxxxxxxxxxxxx',
      'secret': 'xxxxxxxxxxxxxxxxxxx'
    }
  }, {
    upsert: true
  });

  // google config
  ServiceConfiguration.configurations.update({
    'service': 'google'
  }, {
    $set: {
      'clientId': 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      'client_email': 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
      'secret': 'XXXXXXXXXXXXXXXXXXXXXXXX'
    }
  }, {
    upsert: true
  });

  // twitter config
  ServiceConfiguration.configurations.update({
    'service': 'twitter'
  }, {
    $set: {
      'consumerKey': 'XXXXXXXXXXXX',
      'secret': 'XXXXXXXX'
    }
  }, {
    upsert: true
  });

});
