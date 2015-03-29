Package.describe({
  summary: "Login service for Google accounts",
  version: "0.0.1",
  name : "planettraining:accounts-google"
});

Package.onUse(function(api) {
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('google-no-ui-conf', ['client', 'server']);

  api.addFiles('../meteor/packages/google/google_login_button.css', 'client');

  api.addFiles("../meteor/packages/google/google.js");
});
