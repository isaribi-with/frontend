<template>
  <div class="home">
    <div class="logo">
      <img src="../assets/example.jpg" alt="">
    </div>
    <Projects></Projects>
  </div>
</template>

<script>
import Projects from './Projects.vue';

export default {
  name: 'MyHome',
  components:{
    Projects
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.home{
  width: 100%;
  height: 100%;
}
.logo{
  width: 50%;
  height: auto;
}
.logo img{
  width: 100%;
  height: 100%;
}
</style>