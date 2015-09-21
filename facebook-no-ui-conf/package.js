Package.describe({
  summary: "Facebook OAuth flow without conf ui",
  version: "0.0.3",
  name : "planettraining:facebook-no-ui-conf"
});

Package.onUse(function(api) {
  api.use('oauth2@1.1.4', ['client', 'server']);
  api.use('oauth@1.1.6', ['client', 'server']);
  api.use('http@1.1.1', ['server']);
  api.use('underscore@1.0.4', 'server');
  api.use('random@1.0.4', 'client');
  api.use('service-configuration@1.0.5', ['client', 'server']);

  api.export('Facebook');


  api.addFiles('../meteor/packages/facebook/facebook_server.js', 'server');
  api.addFiles('../meteor/packages/facebook/facebook_client.js', 'client');
});
