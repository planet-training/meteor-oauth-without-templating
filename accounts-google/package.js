Package.describe({
  summary: "Login service for Google accounts",
  version: "0.0.5",
  name : "planettraining:accounts-google"
});

Package.onUse(function(api) {
  api.use(['underscore@1.0.4', 'random@1.0.3']);
  api.use('accounts-base@1.2.2', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base@1.2.2', ['client', 'server']);
  api.use('accounts-oauth@1.1.8', ['client', 'server']);
  api.use('planettraining:google-no-ui-conf@0.0.5', ['client', 'server']);

  api.addFiles('../meteor/packages/accounts-google/google_login_button.css', 'client');

  api.addFiles("../meteor/packages/accounts-google/google.js");
});
