<template>
  <div>
    <div class="component-view">
      <component :is="currentPage"></component>
    </div>
    <div class="bar">
      <button
        v-for="(state, index) in states"
        :key="index"
        :class="{ 'bar-link': true, 'now': state.active }"
        @click="changePage(index)"
      >
        {{ state.item }}
      </button>
    </div>
  </div>
</template>

<script>
import Projects from './components/Projects.vue';
import About from './components/About.vue';
import Members from './components/members/Members.vue';
import Supports from './components/supports/Supports.vue';

export default {
  name: 'MyHome',
  data() {
    return {
      states: [
        { item: "Projects", component: Projects, active: true },
        { item: "About us", component: About, active: false },
        { item: "Members", component: Members, active: false },
        { item: "Supports", component: Supports, active: false },
      ],
      currentPage: Projects, // 初期ページを設定
    };
  },
  methods: {
    changePage(index) {
      this.states.forEach((state, i) => {
        state.active = i === index;
      });
      this.currentPage = this.states[index].component;
    },
  },
};
</script>

<style>
.bar {
  width: 100%;
  top: 80%;
  display: flex;
  position: absolute;
  justify-content: center; 
}

.bar-link {
  margin: 0px 30px 0px 30px;
  padding: 10px 30px 10px 30px;
  text-decoration: none;
  transition: font-size 0.3s;
  color: white;
  background-color: dimgray;
  border-radius: 20px;
  opacity: 0.5;
}
.bar-link:hover {
  cursor: pointer;
}
.now {
  color: white;
  background-color: darkgray;
}

.component-view{
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>