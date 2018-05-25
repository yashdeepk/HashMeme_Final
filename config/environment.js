'use strict';

module.exports = function(environment) {
  let ENV = {
    torii: {
      sessionServiceName: 'session'
    },
    modulePrefix: 'hash-meme',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyCHx6Pbxxp4-kfxfK8oeBpnUM1LOX4p55o",
      authDomain: "hash-meme.firebaseapp.com",
      databaseURL: "https://hash-meme.firebaseio.com",
      projectId: "hash-meme",
      storageBucket: "hash-meme.appspot.com",
      messagingSenderId: "915932022711"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    // YASH: maybe include a second script-src, connect-src, etc for database. This is for websocket
    contentSecurityPolicy: {
             'default-src': "'none'",
             'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
             'font-src': "'self'",
             'connect-src': "'self' ws://localhost:7000 localhost:7000",
             'img-src': "'self'",
             'report-uri':"'localhost'",
             'style-src': "'self' 'unsafe-inline'",
             'frame-src': "'none'"
           }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
