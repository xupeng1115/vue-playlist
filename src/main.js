import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Users from './components/Users'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'

Vue.config.productionTip = false

//全局注册组件(组件注册不能使用已有的组件或标签名)
// Vue.component('Users',Users);

Vue.use(VueRouter);
Vue.use(VueResource);   //此时所有组件中都可以使用http了

//配置路由
const router=new VueRouter({
  routes:[
    {path:'/',component:Home},
    {path:'/helloWorld',component:HelloWorld}
  ],
  //去掉#
  mode:'history'    
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})


//index.html -> main.js -> App.vue ->其他组件及嵌套组件

