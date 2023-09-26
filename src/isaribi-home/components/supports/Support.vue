<template>
  <div class="support" :class="{ 'background': changeToBackground }">
    <div class="img-container">
      <img :src="require(`../../../assets/home/supports/${img}.jpg`)" class="support-img">
    </div>
    <div class="name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: 'MySupport',
  props: {
    name: String,
    img: String,
    changeToBackground: Boolean
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
  overflow: hidden;
  border-radius: 20px;
}

.img-container{
  width: 100%;
  height: 100%;
}
.background{
  width: 100%;
  height: 100%;
}

.support-img {
  width: 100%;
  height: 100%;
  transition: transform 0.2s; 
}

.support:hover .support-img {
  transform: scale(1.2);
}

.name {
  position: absolute; 
  bottom: 10px; 
  left: 10px; 
  background-color: rgba(255, 255, 255, 0.7); 
  padding: 5px; 
  border-radius: 5px; 
  font-weight: bold;
}
</style>