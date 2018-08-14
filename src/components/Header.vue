<template>
  <header>
      <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title:'Vue.js Demo'
    }
  },
  beforeCreate:function(){
    // alert("组件实例化之前执行的函数");
  },
  created:function(){
    // alert('组件实例化完毕，但页面还没显示');
  },
  beforeMount:function(){
    // alert('组件挂载前，页面未显示，但虚拟Dom已经配置');
  },
  mounted:function(){
    // alert('组件挂载后，方法执行，页面显示');
  },
  beforeUpdate:function(){
    // alert('组件更新前，页面仍未更新，但虚拟DOM已经配置')
  },
  updated:function(){
    // alert("组件更新，方法执行，页面显示")
  },
  beforeDestory:function(){
    // alert('组件销毁前');
  },
  destoryed:function(){
    // alert("组件销毁了");
  }
}
</script>

<style scoped>
header{
    background:lightgreen;
    padding:10px;
}
h1{
    color:#222;
    text-align:center;
}
</style>
