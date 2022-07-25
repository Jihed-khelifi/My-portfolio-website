<template>
  <section class="app-service">

    <ServiceGame v-if="toggle" @game-won="(e) => SwitchView(e)" />

    <AppServiceList v-else :hasSkipped="hasSkipped" />
  </section>

</template>
<script setup>
import { ref, onMounted } from 'vue'
import AppServiceList from './AppServiceList.vue';
import ServiceGame from './service game/ServiceGame.vue';
import gsap from 'gsap';
const toggle = ref(true)
const hasSkipped = ref(false)
const SwitchView = (e) => {
  hasSkipped.value = e
  toggle.value = false
}
onMounted(() => {
  // scroll to the card
  gsap.from('.app-service', {
    duration: 1,
    opacity: 0,
    y: -100,
    ease: 'power3.out',
    stagger: {
      amount: 0.5
    }
  })
  window.scrollBy(0, 650)
})

</script>
<style>
@import '../../styles/services.scss';
</style>