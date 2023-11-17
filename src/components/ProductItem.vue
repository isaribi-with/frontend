<template>
  <div class="item">
    <div :class="itemClass">
      <div class="left" @click="decreaseIndex(itemClass)"></div>
      <div class="about-container" :class="{ 'about': about}">
        <div class="to-summury" v-if="about" @click="closeAbout()"></div>
        <div class="name">{{ items[itemClass][itemIndex[itemClass]].name }}</div>
        <div class="img" @click="showAbout()"></div>
      </div>
      <div class="right" @click="increaseIndex(itemClass)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyItem',
  props: {
    itemClass: String,
  },
  data() {
    return {
      items:{
        products:[
          {name: "サラダフィッシュ1", img: "example"},
        ],
        supporters:[
          {name: "紺野さん1", img: "example"},
          {name: "紺野さん2", img: "example"},
          {name: "紺野さん3", img: "example"},
        ],
        members:[
          {name: "小久保尚1", img: "example"},
          {name: "小久保尚2", img: "example"},
          {name: "小久保尚3", img: "example"},
        ],
      },
      itemIndex:{
        products:0,
        supporters:0,
        members:0
      },
      about: false,
    };
  },
  methods: {
    getCurrentItem() {
      return this.items[this.itemClass][this.itemIndex[this.itemClass]];
    },
    decreaseIndex() {
      if (this.itemIndex[this.itemClass] > 0) {
        this.itemIndex[this.itemClass]--;
      } else {
        this.itemIndex[this.itemClass] = this.items[this.itemClass].length - 1;
      }
    },
    showAbout() {
      this.about = true
    },
    closeAbout() {
      this.about = false
    },
    increaseIndex() {
      if (this.itemIndex[this.itemClass] < this.items[this.itemClass].length - 1) {
        this.itemIndex[this.itemClass]++;
      } else {
        this.itemIndex[this.itemClass] = 0;
      }
    },
  },
};
</script>

<style scoped>
.item{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.to-summury{
  position: absolute;
  top: 0;
  left: 0;
  width: 10%;
  height: 10%;
  background-color: aqua;
}
.products, .members, .supporters{
  width: 90%;
  height: 100%;
  border: 1px solid;
  display: flex;
  align-items: center;
}
.about-container{
  width: 90%;
  height: 100%;
  display: block;
}
.about {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
}

.name{
  width: 100%;
  height: 15%;
  text-align: center;
  font-size: 2.8rem;
}

.left{
  width: 5%;
  height: 10%;
  border: 1px solid;
}
.img{
  width: 100%;
  height: 80%;
  border: 1px solid;
}
.right{
  width: 5%;
  height: 10%;
  border: 1px solid;
}
</style>