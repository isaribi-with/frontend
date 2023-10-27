<template>
    <div class="product">
      <router-link to="/" class="to-root"></router-link>
      <div class="title-container">
        <div class="title">{{ title }}</div>
      </div>
      <div class="item-container">
        <Item :itemClass="className"></Item>
      </div>
      <div class="bar">
        <div 
        class="bar-item"
        v-for="(bar, index) in bars"
        :key="index"
        @click="updateName(bar.class, bar.title)"
        >
          {{ bar.title }}
        </div>
      </div>
    </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: 'MyProduct',
  components:{
    Item
  },
  data() {
    return {
      bars:[
        {class: "members", title: "メンバー"},
        {class: "products", title: "商品"},
        {class: "supports", title: "協賛"}
      ],
      className: "products",
      title: "商品",
    };
  },
  methods: {
    updateName(item1,item2) {
      this.className = item1;
      this.title = item2 
    }
  }
};
</script>

<style scoped>
.product{
  width: 100%;
  height: 100%;
  display: block;
}
.product :hover{
  cursor:default;
}

.to-root{
  width: 10%;
  height: 10%;
  background-color: aqua;
  position: absolute;
}

.title-container{
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title{
  width: fit-content;
  height: fit-content;
  text-align: center;
  font-size: 6rem;
  border: 1px solid;
}

.item-container{
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bar{
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bar-item{
  width: fit-content;
  height: fit-content;
  text-align: center;
  font-size: 2rem;
  padding: 2%;
  margin: 0 2% 0 2%;
  border: 1px solid;
}
</style>