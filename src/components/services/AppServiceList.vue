<template>
    <div class="service-wrapper">
        <h1 v-if="hasSkipped">
            Here is a brief overview of my services.
        </h1>
        <h1 v-else>
            Good job! here is a brief overview of my services.
        </h1>
        <div class="services-container">
            <div v-for="(service, index) in services" :key="index" class="service ">
                <div class="service-label">
                    <span class="label">{{ service.label }}</span>

                    <i :class="service.logo" id="service-logo"></i>
                </div>
                <div class="service-content-description">
                    <p>{{ service.description }}
                    </p>
                </div>
            </div>
        </div>
        <a :href="`${publicPath}resume.pdf`" download="Khelifi's resume" class="btn resume">Download my
            resume</a>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import gsap from "gsap";
import { services } from '../../constants/services';

// eslint-disable-next-line no-undef
const props = defineProps(['hasSkipped'])
const publicPath = process.env.BASE_URL
onMounted(() => {

    gsap.from(".service", {
        duration: 1,
        y: -100,
        opacity: 0,
        stagger: 0.2,
        ease: "power1.out"
    });
});

</script>
<style lang="scss" scoped>
@import '../../styles/general.scss';
@import '../../styles/services.scss';
</style>