<template>
    <div class="members">
      <div class="member-content">
        <div class="title">Members</div>
      <div class="gallerly">
        <Member 
        v-for="(member, index) in members" 
        :key="index"
        :name="member.name"
        :position="member.position"
        :interest="member.interest"
        :appeal="member.appeal"
        :img="member.img"
        >
        </Member>
      </div>
      </div>
    </div>
  </template>

<script>
import Member from './Member.vue';

export default {
  name: 'MyMembers',
  components: {
    Member,
  },
  data() {
    return {
      members : [
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
        {name: 'sukekawa masaharu', position: 'product team leader', interest: 'all of the world', appeal: 'a',img: 'masaharu'},
      ],
    };
  },
};
</script>

<style scoped> 
.members{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.member-content{
  width: 70%;
  height: 100%;
}

.title{
  width: 100%;
  height: 15%;
  font-size: 3rem;
}

.gallerly{
  width: 100%;
  height: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  gap: 30px;
}
.gallerly::-webkit-scrollbar {
  width: 0; 
}
</style>