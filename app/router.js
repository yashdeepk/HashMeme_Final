import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tutorial');
  this.route('play');
  this.route('contacts');
  this.route('scoreboard');
  this.route('posts');
  this.route('user');
  this.route('nav-bar');
});

export default Router;
