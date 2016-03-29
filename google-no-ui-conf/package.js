Package.describe({
  summary: "Google OAuth flow without conf ui",
  version: "0.0.6",
  name : "planettraining:google-no-ui-conf"
});

Package.onUse(function(api) {
  api.use('oauth2@1.1.7', ['client', 'server']);
  api.use('oauth@1.1.8', ['client', 'server']);
  api.use('http@1.1.3', ['server']);
  api.use(['underscore@1.0.6', 'service-configuration@1.0.7'], ['client', 'server']);
  api.use(['random@1.0.7'], 'client');

  api.export('Google');
  api.addFiles('../meteor/packages/google/google_server.js', 'server');
  api.addFiles('../meteor/packages/google/google_client.js', 'client');
});
