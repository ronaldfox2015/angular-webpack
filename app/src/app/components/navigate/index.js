import angular from 'angular'

import NavigateCtrl from './navigate.controller'
import NavigateTpl from './navigate.template.html'

const MODULE_NAVIGATE = 'navigate.component'

let NavigateComponent = {
  template: NavigateTpl,
  controller: NavigateCtrl,
  controllerAs: 'navigate',
  bindings: {
    home: '<'

  }
}

angular.module(MODULE_NAVIGATE, [])
  .controller('NavbarCtrl', NavigateCtrl)
  .component('navigate', NavigateComponent)

export default MODULE_NAVIGATE
