<template>
  <div class="support">
      <div class="img-container" :class="{ 'background': showAbout }">
        <img :src="require(`../../../assets/home/supports/${img}.jpg`)" class="support-img">
      </div>
      <div class="name-content" :class="{ 'about-content': showAbout}">
        <div class="job" :class="{ 'job-about': showAbout}">
          {{ job }}
        </div>
        <div class="name" v-if="showAbout">
          {{ name }}
        </div>
        <div class="about" v-if="showAbout">
          {{ about }}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MySupport',
  props: {
    job: String,
    name: String,
    img: String,
    about: String,
    showAbout: Boolean
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.support {
  width: 300px;
  height: 300px;
  position: relative; 
}

.img-container{
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
}

.support-img {
  width: 100%;
  height: 100%;
  transition: transform 0.2s; 
}

.img-container:hover .support-img {
  transform: scale(1.2);
}

.name-content{
  width: 100%;
}

.job {
  position: absolute; 
  bottom: 10px; 
  left: 10px; 
  background-color: rgba(255, 255, 255, 0.7); 
  padding: 5px; 
  border-radius: 5px; 
  font-weight: bold;
}

.background {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0%;
  z-index: 2;
}

.background:hover .support-img {
  transform: scale(1.0);
}

.about-content{
  position: fixed; 
  width: 70%;
  top: 20%;
  bottom: 0;
  left: 15%;
  opacity: 0.7;
  z-index: 3;
}

.name{
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 80%;
  text-align: center;
  color: aliceblue;
  font-size: 6rem;
}

.job-about{
  position: absolute;
  bottom: 80%;
  left: 0%;
  text-align: center;
  z-index: 4;
}

.about{
  position: absolute; 
  width: 100%;
  top: 20%;
  bottom: 0;
  text-align: center;
  background-color: aliceblue;
}
</style>