<template>
  <div class="about">
    <div class="title">
      <i @mouseenter="showTexts">About us</i>
    </div>
    <div class="textContent" :class="textContentClass">
      <div>{{ textContent }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyBar',
  data() {
    return {
      textContent: '', 
      textContentClass: '',
      texts: 'texttexttext...', 
    };
  },
  methods: {
    showTexts() {
      this.textContentClass = 'texts';
      this.textContent = this.texts;
    },
  },
};
</script>
  
  <style>
  .about {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  
  .title,.texts {
    width: 30%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title i{
    height: fit-content;
    text-align: center;
  }

  .texts div{
    height: fit-content;
    width: 50%;
    word-break: break-word;
    text-align: center;
  }
  </style>  