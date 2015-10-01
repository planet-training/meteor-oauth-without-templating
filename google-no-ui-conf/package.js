Package.describe({
  summary: "Google OAuth flow without conf ui",
  version: "0.0.4",
  name : "planettraining:google-no-ui-conf"
});

Package.onUse(function(api) {
  api.use('oauth2@1.1.5', ['client', 'server']);
  api.use('oauth@1.1.6', ['client', 'server']);
  api.use('http@1.1.1', ['server']);
  api.use(['underscore@1.0.4', 'service-configuration@1.0.5'], ['client', 'server']);
  api.use(['random@1.0.4'], 'client');

  api.export('Google');
  api.addFiles('../meteor/packages/google/google_server.js', 'server');
  api.addFiles('../meteor/packages/google/google_client.js', 'client');
});
