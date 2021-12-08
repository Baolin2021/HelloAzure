<template>
  <!-- <div>
        <img src="@/assets/logo.png" alt="">
        <HelloWorld msg='asdfasfd'/>
    </div> -->

  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
