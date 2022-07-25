<template>
  <section class="contact-wrapper">
    <div class="explanation">
      <h1>Don't hesitate to contact me, I don't bite</h1>
      <p class="">
        Hey there, thanks for visiting my website. you might be wondering why I chose to make my personal website this
        way?
        well I wanted to create something that reflects who I really am and emits my real vibes.
      </p>
    </div>
    <div class="get-in-touch">
      <p>If you here to get in touch with me please do so below. I am actively looking for new
        interesting projects and
        opportunities to work on.
      </p>
      <div>
        <button class="btn" @click="sendEmail">Send Email</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const sendEmail = () => {
  location.href = "mailto:jihedalkhelifi@gmail.com?subject=NOT SPECIFIED&body=";
}
onMounted(() => {
  gsap.from('.contact-wrapper', {
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

<style lang="scss">
.contact-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  color: #35353C;
  max-width: 1000px;
  padding: 10px;
  gap: 20px;

  .explanation {
    background-color: beige;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    max-width: 500px;
  }

  .get-in-touch {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    background-color: beige;
    max-width: 500px;
    gap: 20px;

  }
}

@media screen and (max-width : 1000px) {
  .contact-wrapper {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 220px;
  }
}
</style>