<template>
  <div class="users">
    <h1 @click="changeTitle">{{title}}</h1>
    <ul>
        <li v-for="(user,index) in users" 
            v-bind:key="index"
            @click="user.show=!user.show">
            <h2>{{user.name}}</h2>
            <h3>{{user.email}}</h3>
        </li>
    </ul>
  </div>
</template>

<script>

//传值：string number boolean
//传引用：array object 传引用时如果一个父组件传了多个同一个子组件的数据源，一个子组件数据源变化，其他也会变化
export default {
  name: 'Users',
  props:{
      users:{
          //传入的值得类型是Array
          type:Array,
          //是否一定按照type里的规格来传递
          required:true
      },
      title:{
          type:String,
          required:true
      }
  },
  data () {
    return {
      
    }
  },
  methods:{
      deleteUser:function(){
          this.users.pop();
      },
      changeTitle:function(){
        //   this.title="User Changed";
        this.$emit("titleChanged","子向父传值");
      }
  }
  
}
</script>

<style scoped>
ul{
    display:flex;
    flex-wrap:wrap;
    list-style:none;
    padding:0;
}
ul li{
    flex-grow:1;
    flex-basis:200px;
    color:#ff6060;
    text-align:center;
    padding:0;
    margin:10px;
    border:1px solid #222;
}
.users{
    width:100%;
    margin:40px auto;
    padding:0 20px;
    box-sizing:border-box;
}
</style>
