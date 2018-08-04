import angular from 'angular'
import PublishCtrl from './publish.controller'
import PublishTpl from './publish.template.html'

const MODULE_NAME = 'publish.component'

let PublishComponent = {
  template: PublishTpl,
  controller: PublishCtrl,
  controllerAs: 'publish',
  bindings: {}
}

angular.module(MODULE_NAME, [])
  .controller('PublishCtrl', PublishCtrl)
  .component('publish', PublishComponent)

export default MODULE_NAME
