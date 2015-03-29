Package.describe({
  summary: "Google OAuth flow without conf ui",
  version: "0.0.1",
  name : "planettraining:google-no-ui-conf"
});

Package.onUse(function(api) {
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use(['underscore', 'service-configuration'], ['client', 'server']);
  api.use(['random'], 'client');

  api.export('Google');
  api.addFiles('../meteor/packages/google/google_server.js', 'server');
  api.addFiles('../meteor/packages/google/google_client.js', 'client');
});
