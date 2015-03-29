Package.describe({
  summary: "Login service for Facebook accounts",
  version: "0.0.1",
  name : "planettraining:accounts-facebook"
});

Package.onUse(function(api) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('facebook-no-ui-conf', ['client', 'server']);

  api.addFiles('../meteor/packages/google/facebook_login_button.css', 'client');

  api.addFiles("../meteor/packages/google/facebook.js");
});
