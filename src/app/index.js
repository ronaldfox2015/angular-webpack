import angular from 'angular'
import angularGrid from 'angulargrid'
import ngRoute from 'angular-route'

import MainCtrl from './controllers/MainCtrl'
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthComponent from './components/auth'
import HomeComponent from './components/home'

const MODULE_NAME = 'SocialApp'
angular
  .module(MODULE_NAME, [
    ngRoute,
    AuthComponent,
    HomeComponent,
    angularGrid
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', { template: '<auth></auth>' })
      .when('/home', { template: '<home></home>' })
  })
  .controller('MainCtrl', MainCtrl)
  .run()

export default MODULE_NAME
