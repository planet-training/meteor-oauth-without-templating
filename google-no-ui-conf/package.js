Package.describe({
  summary: "Google OAuth flow without conf ui",
  version: "0.0.7",
  name : "planettraining:google-no-ui-conf"
});

Package.onUse(function(api) {
  api.use('oauth2@1.1.9', ['client', 'server']);
  api.use('oauth@1.1.10', ['client', 'server']);
  api.use('http@1.1.5', ['server']);
  api.use(['underscore@1.0.8', 'service-configuration@1.0.7'], ['client', 'server']);
  api.use(['random@1.0.9'], 'client');

  api.export('Google');
  api.addFiles('../meteor/packages/google/google_server.js', 'server');
  api.addFiles('../meteor/packages/google/google_client.js', 'client');
});
