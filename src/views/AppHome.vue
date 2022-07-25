<template>
  <section class="home-wrapper">
    <div class="greeting-and-pic">
      <div class="img">
        <img class="picture" src="../assets/my-image.png" alt="My image">
      </div>
      <div class="greeting">
        <p>Welcome to my realm</p>
      </div>
    </div>
    <div ref="starter" class="about-me-starter">
      <p>Click to dive into my world</p>
      <button @click="startInteraction" class="btn start-interaction-btn">let's do it</button>
    </div>
  </section>
  <keep-alive>
    <AppAbout v-if="showAbout" @trigger-comp="scrollAndShowServices" />
  </keep-alive>
  <keep-alive>
    <AppServices v-if="showServices" />
  </keep-alive>

</template>
<script setup>
import AppAbout from '@/components/about/AppAbout.vue';
import AppServices from '@/components/services/AppServices.vue';
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
const showAbout = ref()
const showServices = ref(false);
const scrollAndShowServices = () => {
  showServices.value = true;
}
const startInteraction = () => {
  showAbout.value = true;
}
onMounted(() => {
  // create a gsap animation to show the cards
  gsap.from('.greeting-and-pic', {
    duration: 1,
    opacity: 0,
    y: -100,
    ease: 'power3.out',
    stagger: {
      amount: 0.5
    }
  })
  gsap.from('.about-me-starter', {
    duration: 1,
    opacity: 0,
    y: -100,
    ease: 'power3.out',
    stagger: {
      amount: 0.5
    }
  })
})
</script>
<style lang="scss" scoped>
@import '../styles/home.scss';
@import '../styles/general.scss';
</style>