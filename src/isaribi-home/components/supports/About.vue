<template>
  <div class="about-all">
    <div class="text-container">
      <div class="job-content">
        <div class="job">{{ job }}</div>
      </div>
      <div class="texts">
        <div class="name-content">
          <div class="name">{{ name }}</div>
        </div>
        <div class="about-content">
          <div class="about">{{ about }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAbout',
  props: {
    job: String,
    name: String,
    about: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.about-all {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 900;
}

.image-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
}

.support-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-container{
  position: absolute;
  width: 80%;
  height: 100%;
  justify-content: center;
}

.job{
  width: 100%;
  height: fit-content;
  margin: 20% 0 20% 0;
  color: aliceblue;
  text-align: center;
}

.texts {
  width: 100%;
  height: 50%;
  color: black;
  display: block;
  background-color: aliceblue;
  opacity: 0.9;
}

.name-content{
  width: 100%;
  height: 20%;
}
.name{
width: 100%;
height: fit-content;
}

.about-content{
  width: 100%;
  height: 80%;
}
.about{
  width: 100%;
  height: fit-content;
}
</style>