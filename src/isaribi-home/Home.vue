<template>
  <div class="home">
    <div class="component-view">
      <Projects></Projects>
    </div>
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
.home,.component-view{
  width: 100%;
  height: 100%;
}
</style>