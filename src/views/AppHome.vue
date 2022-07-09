<template>
  <section class="home-wrapper">
    <div class="greeting-and-pic">
      <div class="img">
        <img class="picture" src="../assets/my-image.png" alt="My image">
      </div>
      <div class="greeting">
        <p>Hi there! I hope you're having a wonderful day</p>
      </div>
    </div>
  </section>
  <AppAbout />
  <AppServices />
</template>
<script scoped>
import AppAbout from '@/components/AppAbout.vue';
import AppServices from '@/components/AppServices.vue';
export default {
  components: { AppAbout, AppServices }
};
</script>
<style lang="scss" scoped>
@import '../styles/home.scss';
</style>