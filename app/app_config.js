require.config({
  baseUrl: "",
  paths: {
    'angular' : 'bower_components/angular/angular',
    'lodash' : 'bower_components/lodash/lodash.min',
    'ui.router' : 'bower_components/angular-ui-router/release/angular-ui-router.min',
    'oclazyload' : 'bower_components/oclazyload/dist/ocLazyLoad.require.min',
    'ui.bootstrap' : 'bower_components/angular-bootstrap/ui-bootstrap.min',
    'jquery' : 'bower_components/jquery/dist/jquery.min',
    'domReady': 'vendor/requirejs/domReady'
  },
  shim : {
    'angular' : {
      exports: 'angular',
      deps: ['jquery']
    },
    'oclazyload': ['angular'],
    'jquery' : {
      exports: 'jQuery'
    },
    'lodash' : {
      exports: '_'
    },
    'ui.router' : ['angular'],
    'ui.bootstrap' : ['angular']
  },
  deps: [
    'bootstrap'
  ]
});

require(['bootstrap']);
