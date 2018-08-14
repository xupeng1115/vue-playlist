<!-- html模板结构 -->
<template>
  <div id="app">
    <ul>
      <!-- <li><a href="/">Home</a></li>
      <li><a href="/helloworld">HelloWorld</a></li> -->
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/helloworld">HelloWorld</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<!-- 行为逻辑处理 -->
<script>

export default {
  name: 'App',
  //注册引入的组件
  
  data(){
    return {
      
    }
  },
  methods:{
    
  }
}
</script>

<!-- 样式渲染 -->
<style>

</style>
