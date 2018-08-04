import angular from 'angular'

import HomeCtrl from './home.controller'
import AuthTpl from './home.template.html'
import './home.styles.css'

const HOME_MODULE = 'home.component'

let AuthComponent = {
  template: AuthTpl,
  controller: HomeCtrl,
  controllerAs: 'home',
  bindings: {
    data: '<'
  }
}

angular.module(HOME_MODULE, [])
  .controller('HomeCtrl', HomeCtrl)
  .component('home', AuthComponent)

export default HOME_MODULE
