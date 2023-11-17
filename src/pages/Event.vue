<template>
    <div class="event">
      <EventDetailVue></EventDetailVue>
    </div>
</template>

<script>
import EventDetailVue from '@/components/EventDetail.vue';

export default {
  name: 'MyEvent',
  components:{
    EventDetailVue
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.event{
  width:100%;
  height:100%;
}
</style>