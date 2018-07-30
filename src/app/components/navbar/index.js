import angular from 'angular'

import NavbarCtrl from './navbar.controller'
import NavbarTpl from './navbar.template.html'

const MODULE_NAME = 'navbar.component'

let NavbarComponent = {
  template: NavbarTpl,
  controller: NavbarCtrl,
  controllerAs: 'navbar',
  bindings: {

  }
}

angular.module(MODULE_NAME, [])
  .controller('NavbarCtrl', NavbarCtrl)
  .component('navbar', NavbarComponent)

export default MODULE_NAME
