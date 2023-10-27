<template>
    <div class="projects">
      <router-link to="/event" class="event">
      </router-link>
      <router-link to="/product" class="product">
      </router-link>
    </div>
  </template>

<script>
export default {
  name: 'MyProjects',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.projects {
  width: 100%;
  height: 100%;
}

.event,
.product {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  text-align: center;
  position: absolute;
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