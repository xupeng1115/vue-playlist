<template>
  <footer>
      <h1>{{copyright}}</h1>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      copyright:'Copyright 2018 Vue Demo'
    }
  }
}
</script>

<style scoped>
footer{
    background:#222;
    padding:6px;
}
h1{
    color:lightgreen;
    text-align:center;
}
</style>
