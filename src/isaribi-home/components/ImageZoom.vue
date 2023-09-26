<template>
    <div class="container">
      <div class="item"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyImageZoom', // コンポーネントの名前
    mounted() {
      // コンポーネントがマウントされた後、アニメーションを開始する
      this.startAnimation();
    },
    methods: {
      startAnimation() {
        // マウント後にアニメーションを開始
        const item = this.$el.querySelector('.item');
        item.style.animation = 'expansion-anim 5s linear infinite';
      },
    },
  };
  </script>
  
  <style>
  .container {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  
  .item {
    width: 100px;
    height: 100px;
    margin: 0;
    background: #fa8072;
    border-radius: 50%;
  }
  
  /* animation */
  @keyframes expansion-anim {
    0% {
      transform: scale(0);
    }
  
    100% {
      transform: scale(35);
    }
  }
  </style>  