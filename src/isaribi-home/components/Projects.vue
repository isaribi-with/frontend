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

<style>
.projects {
  width: 100%;
  height: 100%;
}

.event,
.product {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  text-align: center;
}

.event {
  background-color: chartreuse;
  top: 30%;
  left: 50%;
}

.product {
  background-color: aquamarine;
}
</style>