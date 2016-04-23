Package.describe({
  summary: "Facebook OAuth flow without conf ui",
  version: "0.0.7",
  name : "planettraining:facebook-no-ui-conf"
});

Package.onUse(function(api) {
  api.use('oauth2@1.1.7', ['client', 'server']);
  api.use('oauth@1.1.8', ['client', 'server']);
  api.use('http@1.1.3', ['server']);
  api.use('underscore@1.0.8', 'server');
  api.use('random@1.0.9', 'client');
  api.use('service-configuration@1.0.9', ['client', 'server']);

  api.export('Facebook');


  api.addFiles('../meteor/packages/facebook/facebook_server.js', 'server');
  api.addFiles('../meteor/packages/facebook/facebook_client.js', 'client');
});
