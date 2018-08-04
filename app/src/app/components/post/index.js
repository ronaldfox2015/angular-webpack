import angular from 'angular'

import PostCtrl from './post.controller'
import PostTpl from './post.template.html'

const MODULE_POST = 'post.component'

let PostComponent = {
  template: PostTpl,
  controller: PostCtrl,
  controllerAs: 'post',
  bindings: {
    home: '<'

  }
}

angular.module(MODULE_POST, [])
  .controller('PostCtrl', PostCtrl)
  .component('post', PostComponent)

export default MODULE_POST
