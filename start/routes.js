'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return 'Pai tá on!🚀';
});

Route.group(() => {
  Route.post('/login', 'UserController.login');
  Route.post('/register', 'UserController.store');

  Route.get('/todolist', 'TodoListController.index');
  Route.get('/todolist/:id', 'TodoListController.show');
  Route.post('/todolist', 'TodoListController.store');

  Route.post('task/:id', 'TaskController.store');
}).prefix('api/v1');
