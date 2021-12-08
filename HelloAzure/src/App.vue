<template>
  <div id="app">
    <!-- hellow azure -->
    <!-- <h1>{{msg}}</h1>
    <img src="./assets/logo.png">-->
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">about</router-link> -->
    <router-view/> 
    <!-- <el-button>aaa</el-button> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: '欢迎来到菜鸟教程！'
    }
  }
}
</script>

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
