import EmberRouter from '@ember/routing/router';
import config from 'todolist1/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

/*Router.map(function () {
  this.route('list', function() {
    this.route('add');
    this.route('edit');
  });
});*/


Router.map(function() {
  this.route('list', function() {
    this.route('add',{ path: 'list/add' })
    this.route('edit');
  });
  ;
  
  });
