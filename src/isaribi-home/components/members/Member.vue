<template>
    <div class="member" @mouseenter="showTexts" @mouseleave="hideTexts">
      <img :src="require(`../../../assets/home/members/${img}.jpg`)">
      <div class="texts" :class="{ 'show-texts': isTextVisible }">
        <p>{{ name }}</p>
        <div class="about">
          <div class="statuses">
            <div class="status">position :  </div>
            <div class="value">{{ position }}</div>
          </div>
          <div class="statuses">
            <div class="status">interest : </div>
            <div class="value">{{ interest }}</div>
          </div>
          <div class="statuses">
            <div class="status">appeal : </div>
            <div class="value">{{ appeal }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyMember',
    props: {
      name: String,
      position: String,
      interest: String,
      appeal: String,
      img: String
    },
    data() {
      return {
        isTextVisible: false, // テキスト表示状態を管理
      };
    },
    methods: {
      showTexts() {
        this.isTextVisible = true;
      },
      hideTexts() {
        this.isTextVisible = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .member {
    width: 200px;
    height: 300px;
    position: relative; 
    overflow: hidden; 
    border-radius: 20px;
  }
  
  .member img {
    width: 100%;
    height: 100%;
  }
  
  .texts {
    width: 100%;
    max-height: 0; 
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    color: aliceblue;
    overflow: hidden; 
    transition: max-height 0.5s ease; 
  }
  .texts p{
    position: absolute;
    top: 0;
  }
  
  .show-texts {
    max-height: 80%; 
  }
  .show-texts p{
    position: absolute;
    top: 0;
  }

  .about{
    width: 100%;
    display: block;
    margin-top: 30%;
  }
  .statuses{
    width: 100%;
    margin-bottom: 10px;
  }
  .status{
    width: 50%;
    color: darkgray;
  }
  .value{
    width: 100%;
  }
  </style>