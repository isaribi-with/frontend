<template>
  <div class="supports">
    <div class="supports-content">
      <h1 class="title">Supports</h1>
      <div class="gallerly">
            <support
            v-for="(support, index) in supports"
            :key="index"
            :job="support.job"
            :name="support.name"
            :about="support.about"
            :img="support.img"
            :showAbout="support === selectedSupport" 
            @click="showAboutInfo(support)"
          >
          </support>
      </div>
    </div>
    <div class="close-button" v-if="showAbout" @click="closeAbout">
      <div class="close-icon">
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
  </div>
</template>


<script>
import Support from './Support.vue';

export default {
  name: 'MyMembers',
  components: {
    Support,
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
      this.changeToBackground = false;
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

.close-button {
  position: absolute;
  width: 40px; /* ボタンの幅 */
  height: 40px; /* ボタンの高さ */
  background-color: transparent;
  margin: 20px; 
  cursor: pointer;
  z-index: 999;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}

.close-icon {
  position: relative;
  width: 100%;
  height: 100%;
}
.bar {
  position: absolute;
  width: 100%;
  height: 4px; /* バツ記号の線の幅 */
  background-color:dimgrey;
  transform: rotate(45deg);
  transform-origin: center;
  transition: background-color 0.2s;
}

.bar:first-child {
  transform: rotate(-45deg);
}

.close-button:hover .bar {
  background-color:darkgrey /* ホバー時の色 */
}
</style>