<template>
  <header class="header-wrapper">
    <nav ref="dropNav" class="container">
      <div class="link-wrapper first">
        <router-link class="first-" to="/">Home</router-link>
      </div>
      <div class="link-wrapper second">
        <router-link to="/articles">Articles</router-link>
      </div>
      <div class="link-wrapper third">
        <router-link to="/projects">Projects</router-link>
      </div>
      <div class="link-wrapper fourth">
        <router-link to="/contact">Contact</router-link>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
const dropNav = ref(null)

onMounted(() => {
  gsap.from('.header-wrapper', {
    duration: 1,
    y: -100,
    opacity: 0,
    stagger: 0.2,
    ease: "bounce.out"
  });
})

</script>
<style lang="scss" scoped>
@import '../../styles/header.scss';
</style> 