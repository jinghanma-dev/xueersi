import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import toubu from '@/components/toubu'
import content from '@/components/content'
import footer from '@/components/footer'
import setup from '@/components/setup'
// import setup from '@/components/setup'
import myorder from '@/components/myorder'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'toubu',
      component: toubu
    },
    {
      path: '/content',
      name: 'content',
      component: content
    },
    {
      path: '/footer',
      name: 'fooer',
      component: footer
    },
    {
      path: '/setup',
      name: 'setup',
      component: setup
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: myorder
    }
  ]
})
