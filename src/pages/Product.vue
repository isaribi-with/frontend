<template>
    <div class="product">
      <Detail></Detail>
    </div>
</template>

<script>
import Detail from '@/components/ProductDetail.vue';

export default {
  name: 'MyEvent',
  components:{
    Detail
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.product{
  width:100%;
  height:100%;
}
</style>