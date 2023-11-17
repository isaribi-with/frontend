<template>
    <div class="event-detail">
      <router-link to="/" class="to-root"></router-link>
      <div class="title-container">
        <div class="title">{{ title }}</div>
      </div>
      <div class="item-container">
        <EventItemVue :itemClass="className"></EventItemVue>
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
import EventItemVue from './EventItem.vue';

export default {
  name: 'MyEventDetail',
  components:{
    EventItemVue
  },
  data() {
    return {
      bars:[
        {class: "members", title: "メンバー"},
        {class: "events", title: "イベント"},
        {class: "supporters", title: "サポーター"}
      ],
      className: "events",
      title: "イベント",
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
.event-detail{
  width: 100%;
  height: 100%;
  display: block;
}
.event-detail :hover{
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
  font-size: 5rem;
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
  width: 25%;
  height: fit-content;
  text-align: center;
  font-size: 1.5rem;
  margin: 0 2% 0 2%;
  border: 1px solid;
}
</style>