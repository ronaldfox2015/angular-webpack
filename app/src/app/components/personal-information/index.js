import angular from 'angular'

import personalInformationCtrl from './personal-information.controller'
import personalInformationTpl from './personal-information.template.html'
const MODULE_INFORMATION = 'personal-information.component'

let personalInformationComponent = {
  template: personalInformationTpl,
  controller: personalInformationCtrl,
  controllerAs: 'personalInformation',
  bindings: {
    home: '<'

  }
}

angular.module(MODULE_INFORMATION, [])
  .controller('personalInformationCtrl', personalInformationCtrl)
  .component('personalInformation', personalInformationComponent)

export default MODULE_INFORMATION
