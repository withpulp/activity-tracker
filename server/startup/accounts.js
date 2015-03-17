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
      'consumerKey': 'hrP3jt7nWqUz3bX12WWFF3XTR',
      'secret': '54vJBevQg7fKYpyaoqZD1CvEQFQa8TicgXfyhLEBZmJazEgx5W'
    }
  }, {
    upsert: true
  });

});
