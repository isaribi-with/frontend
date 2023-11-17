<template>
  <div class="home">
    <div class="logo-container">
      <img 
        src="../assets/logo.jpg" 
        alt="" 
        class="logo"
        @click="showProjects"
      >
    </div>
    <div class="projects" v-if="projects">
      <router-link to="/event" class="event">
      </router-link>
      <router-link to="/product" class="product">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHome',
  data() {
    return {
      projects: false,
    };
  },
  methods: {
    showProjects() {
      this.projects = !this.projects;
    },
  },
};
</script>

<style scoped>
.home{
  width: 100%;
  height: 100%;
}
.logo-container{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 80%;
  height: auto;
  transition: transform 0.5s ease; 
}

.projects {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.event,.product {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  z-index: 5;
}
.event {
  left: 20%;
  background-color: chartreuse;
}
.product {
  left: 60%;
  background-color: aquamarine;
}
</style>