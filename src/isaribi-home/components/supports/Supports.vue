<template>
  <div class="supports">
    <div class="supports-content">
      <h1 class="title">Supports</h1>
      <div class="gallerly">
        <support
          v-for="(support, index) in supports"
          :key="index"
          :name="support.name"
          :img="support.img"
          :changeToBackground="changeToBackground"
          @click="showAboutInfo(support)"
        >
        </support>
      </div>
    </div>
    <transition name="slide-up">
      <About v-if="showAbout" :name="selectedSupport.name" :job="selectedSupport.job" :about="selectedSupport.about" :img="selectedSupport.img" @close="closeAbout"></About>
    </transition>
    <div class="close-button" v-if="showAbout" @click="closeAbout"></div>
  </div>
</template>

<script>
import Support from './Support.vue';
import About from './About.vue';

export default {
  name: 'MyMembers',
  components: {
    Support,
    About
  },
  data() {
    return {
      supports: [
        { name: 'kokubonao', job: 'student', about: 'texttexttexttexttext', img: 'example' },
        { name: 'kokubonao', job: 'student', about: 'texttexttexttexttext', img: 'example' },
        { name: 'kokubonao', job: 'student', about: 'texttexttexttexttext', img: 'example' },
      ],
      showAbout: false,
      selectedSupport: null,
      changeToBackground: false,
    };
  },
  methods: {
    showAboutInfo(support) {
      this.selectedSupport = support;
      this.showAbout = true;
      this.changeToBackground = !this.changeToBackground;
    },
    closeAbout() {
      this.selectedSupport = null;
      this.showAbout = false;
    },
  },
};
</script>

<style scoped>
.supports {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.supports-content {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.title {
  width: 100%;
  height: 15%;
  font-size: 3rem;
  text-align: center;
}

.gallerly {
  width: 100%;
  height: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  gap: 50px;
}

.close-button{
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: aqua;
  margin: 20px; 
  cursor: pointer;
  z-index: 999;
  top: 0;
  right: 0;
}
</style>