<template>
  <section class="home-wrapper initial-responsive-container ">
    <div class="greeting-and-pic">
      <div class="img">
        <img class="picture" src="../assets/myself.jpg" alt="My image">
      </div>
      <div class="greeting">
        <p>Welcome to my realm</p>
      </div>
    </div>
    <div ref="starter" class="about-me-starter">
      <p>Click to dive into my world</p>
      <button @click="startInteraction" class="btn start-interaction-btn">Show me what you got!</button>
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
var buttonPulse
const scrollAndShowServices = () => {
  showServices.value = true;
}
const startInteraction = () => {
  showAbout.value = true;
  buttonPulse.pause();
  document.querySelector('.home-wrapper').classList.remove('initial-responsive-container')
}

onMounted(() => {

  // create a gsap pulsing animation for the button
  buttonPulse = gsap.fromTo('.start-interaction-btn', {
    scale: 0.9,
  }, {
    repeat: -1,
    scale: 1.1,
    ease: 'power3.out',
  })
  buttonPulse.play()

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