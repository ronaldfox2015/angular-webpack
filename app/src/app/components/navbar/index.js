import angular from 'angular'

import NavbarCtrl from './navbar.controller'
import NavbarTpl from './navbar.template.html'

const MODULE_NAVBAR = 'navbar.component'

let NavbarComponent = {
  template: NavbarTpl,
  controller: NavbarCtrl,
  controllerAs: 'navbar',
  bindings: {
    home: '<'

  }
}

angular.module(MODULE_NAVBAR, [])
  .controller('NavbarCtrl', NavbarCtrl)
  .component('navbar', NavbarComponent)

export default MODULE_NAVBAR
