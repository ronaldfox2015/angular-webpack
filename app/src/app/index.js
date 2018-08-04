import angular from 'angular'
import angularGrid from 'angulargrid'
import ngRoute from 'angular-route'
import NavbarComponent from './components/navbar'
import NavigateComponent from './components/navigate'
import PostComponent from './components/post'

import MainCtrl from './controllers/MainCtrl'
import AuthComponent from './components/auth'
import HomeComponent from './components/home'
import PublishComponent from './components/publish'
import AuthService from './services/AuthService'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/home.css'

const MODULE_NAME = 'SocialApp'
angular
  .module(MODULE_NAME, [
    ngRoute,
    NavbarComponent,
    PostComponent,
    NavigateComponent,
    AuthComponent,
    HomeComponent,
    PublishComponent,
    angularGrid
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<home></home>'
      })

      .when('/login', {
        template: '<auth></auth>'
      })
  })
  .service('AuthService', AuthService)
  .controller('MainCtrl', MainCtrl)
  .run(function (AuthService) {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
      })
    })
  })
export default MODULE_NAME
