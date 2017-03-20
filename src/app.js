import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Router} from 'aurelia-router';
import {tokenIsExpired} from './utils/tokenHelper.js';

export class App {
  configureRouter(config, router) {
    config.title = 'Carmel';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
    ]);

    this.router = router;
  }
}
