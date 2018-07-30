import angular from 'angular'
import angularGrid from 'angulargrid'
import ngRoute from 'angular-route'

import MainCtrl from './controllers/MainCtrl'
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthComponent from './components/auth'
import HomeComponent from './components/home'
import NavbarComponent from './components/navbar'
// import './css/styles.css'
const MODULE_NAME = 'SocialApp'
angular
  .module(MODULE_NAME, [
    ngRoute,
    AuthComponent,
    HomeComponent,
    NavbarComponent,
    angularGrid
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', { template: '<home></home>' })
      .when('/', { template: '<auth></auth>' })
  })
  .controller('MainCtrl', MainCtrl)
  .run()

export default MODULE_NAME
