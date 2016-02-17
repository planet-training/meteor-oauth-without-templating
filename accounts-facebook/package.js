Package.describe({
  summary: "Login service for Facebook accounts",
  version: "0.0.5",
  name : "planettraining:accounts-facebook"
});

Package.onUse(function(api) {
  api.use('accounts-base@1.2.2', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base@1.2.2', ['client', 'server']);
  api.use('accounts-oauth@1.1.8', ['client', 'server']);
  api.use('planettraining:facebook-no-ui-conf@0.0.5', ['client', 'server']);

  api.addFiles('../meteor/packages/accounts-facebook/facebook_login_button.css', 'client');

  api.addFiles("../meteor/packages/accounts-facebook/facebook.js");
});
