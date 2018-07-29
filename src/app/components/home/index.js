import angular from 'angular'

import HomeCtrl from './home.controller'
import AuthTpl from './home.template.html'
// import AuthService from './../../services/AuthService'
// import './styles.css'

const MODULE_NAME = 'home.component'

let AuthComponent = {
  template: AuthTpl,
  controller: HomeCtrl,
  controllerAs: 'home',
  bindings: {

  }
}

angular.module(MODULE_NAME, [])
  .controller('HomeCtrl', HomeCtrl)
  .component('home', AuthComponent)

export default MODULE_NAME
