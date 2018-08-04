import angular from 'angular'

import AuthCtrl from './auth.controller'
import AuthTpl from './auth.template.html'
import AuthService from './../../services/AuthService'
import './styles.css'

const MODULE_NAME = 'auth.component'

let AuthComponent = {
  template: AuthTpl,
  controller: AuthCtrl,
  controllerAs: 'auth',
  bindings: {

  }
}

angular.module(MODULE_NAME, [])
  .controller('AuthCtrl', AuthCtrl)
  .service('AuthService', AuthService)
  .component('auth', AuthComponent)

export default MODULE_NAME
