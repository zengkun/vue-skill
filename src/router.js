import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import RenderJsx from '@/views/RenderJsx.vue'
import ProvideInject from '@/views/ProvideInject.vue'
import ExtendsMixins from '@/views/ExtendsMixins.vue'
import Vmodel from '@/views/Vmodel.vue'
import SyncBind from '@/views/SyncBind.vue'
import HookLifeCycle from '@/views/HookLifeCycle.vue'
import AttrsProps from '@/views/AttrsProps.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[{
        path: '/renderjsx',
        name: 'renderjsx',
        component: RenderJsx
      },{
        path: '/provideinject',
        name: 'provideinject',
        component: ProvideInject
      },{
        path: '/extendsmixins',
        name: 'extendsmixins',
        component: ExtendsMixins
      },{
        path: '/vmodel',
        name: 'vmodel',
        component: Vmodel
      },{
        path: '/syncbind',
        name: 'syncbind',
        component: SyncBind
      },{
        path: '/hooklifecycle',
        name: 'hooklifecycle',
        component: HookLifeCycle
      },{
        path: '/attrsprops',
        name: 'attrsprops',
        component: AttrsProps
      }]
    }
  ]
})
