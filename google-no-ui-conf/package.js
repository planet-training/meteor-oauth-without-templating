Package.describe({
  summary: "Google OAuth flow without conf ui",
  version: "0.0.8",
  name : "planettraining:google-no-ui-conf"
});

Package.onUse(function(api) {
  api.use('oauth2@1.1.10', ['client', 'server']);
  api.use('oauth@1.1.10', ['client', 'server']);
  api.use('http@1.1.8', ['server']);
  api.use(['underscore@1.0.9', 'service-configuration@1.0.10'], ['client', 'server']);
  api.use(['random@1.0.10'], 'client');

  api.export('Google');
  api.addFiles('../meteor/packages/google/google_server.js', 'server');
  api.addFiles('../meteor/packages/google/google_client.js', 'client');
});
