Package.describe({
  summary: "Facebook OAuth flow without conf ui",
  version: "0.0.1",
  name : "planettraining:facebook-no-ui-conf"
});

Package.onUse(function(api) {
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('underscore', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.export('Facebook');


  api.addFiles('../meteor/packages/facebook/facebook_server.js', 'server');
  api.addFiles('../meteor/packages/facebook/facebook_client.js', 'client');
});
