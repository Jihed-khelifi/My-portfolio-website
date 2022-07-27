<template>
  <section class="article-wrapper">
    <div class="information">
      <p class="information-text">This section is under construction,
        please come back later, something pleasing is being coded.
      </p>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
onMounted(() => {
  gsap.from('.article-wrapper', {
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
.article-wrapper {
  display: grid;
  place-items: center;
  max-width: 1000px;
  padding: 10px;
  height: 80vh;
  padding: 10px;

  .information {
    padding: 10px;
    max-width: 500px;
    text-align: center;
    border-radius: 10px;
    background-color: beige;

    .information-text {
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
      color: #35353C;
    }
  }
}
</style>