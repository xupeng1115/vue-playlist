<!-- html模板结构 -->
<template>
  <div id="app">
    <Header></Header>
    <Users v-bind:users="users"
          v-bind:title="title"
          @titleChanged="updateTitle($event)">
    </Users>
    <Users v-bind:users="users"
          v-bind:title="title"
          @titleChanged="updateTitle($event)">
    </Users>
    <Footer></Footer>
  </div>
</template>

<!-- 行为逻辑处理 -->
<script>
//引入其他组件
import Users from './Users'
import Header from './Header'
import Footer from './Footer'


export default {
  name: 'App',
  //注册引入的组件
  components: {
    Users,
    Header,
    Footer
  },
  data(){
    return {
      users:[
        //   {name:'Henry',position:'Web开发',show:false},
        //   {name:'Jack',position:'Java开发',show:true},
        //   {name:'Andy',position:'.Net开发',show:true},
        //   {name:'AB',position:'Python开发',show:true},
        //   {name:'XiaoMing',position:'C开发',show:false},
        //   {name:'Peter',position:'C++开发',show:true},
        //   {name:'Ted',position:'Nodejs开发',show:false},
        //   {name:'Lee',position:'C#开发',show:true},
        //   {name:'HeHe',position:'Android开发',show:true},
        //   {name:'Alan',position:'IOS开发',show:true}
      ],
      title:"Hello Vue"
    }
  },
  methods:{
    updateTitle:function(title){
      this.title=title;
    }
  },
  created(){
      this.$http.get('http://jsonplaceholder.typicode.com/users').then((data)=>{
          this.users=data.body;
      }).catch(()=>{
          console.log('GET Error');
      })
  }
}
</script>

<!-- 样式渲染 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
