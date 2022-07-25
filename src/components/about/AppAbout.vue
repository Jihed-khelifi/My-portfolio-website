<template>
    <section class="about-wrapper">
        <keep-alive>
            <AppPopUp v-show="openPopUp" :text="popUpText" :title="popUpTitle" @click="openPopUp = !openPopUp"
                buttonText="Let's see">
                <button class="btn" @click="$emit('closeModal')">Let's see</button>
            </AppPopUp>
        </keep-alive>
        <div ref="cards" class="about-me-container">
            <div ref="card" class="card greeting">
                <h2 class="">
                    Hello, I'm
                    I am a full-stack web developer.
                </h2>
                <p>I develop websites with love, integrity and art in mind</p>
                <button ref="getToKnowMeBtnVisible" @click="() => {
                    getToKnowMeBtnVisible.style.display = 'none';
                    showCard(1)
                }" class="btn next">Get to Know me</button>
            </div>
            <div ref="card" class="card basic-info">
                <h2 class="know-me">Get to know me</h2>
                <p>
                    my name is <span class="my-name">Jihed Khelifi</span> and I am a full-stack web developer based in
                    Sousse Tunisia, I have a
                    passion for creating beautiful and functional websites.
                    I am currently working as a freelancer in web development.

                </p>
                <button ref="mySkillsBtnVisible" @click="() => {
                    mySkillsBtnVisible.style.display = 'none';
                    StartGame()
                }" class="btn next">What are my skills ?</button>
            </div>

            <div ref="card" class="card game">
                <Game @next-comp="$emit('triggerComp')" />

            </div>
        </div>
    </section>
</template>
<script setup>
import Game from './AppGame.vue'
import { ref, onMounted } from 'vue'
import AppPopUp from '../layout/AppPopUp.vue'
import gsap from 'gsap'


const openPopUp = ref(false)
const starter = ref(null)
const card = ref(null);
const cards = ref(null);
const popUpText = ref('')
const popUpTitle = ref('')
const getToKnowMeBtnVisible = ref(null)
const mySkillsBtnVisible = ref(null)
const hideCards = () => {
    cards.value.childNodes[1].classList.add('hide')
    cards.value.childNodes[2].classList.add('hide')
}
const StartGame = () => {
    popUpTitle.value = 'What are My skills ?'
    popUpText.value = 'Try to guess my skills by clicking on them'
    openPopUp.value = true
    showCard(2);
    cards.value.childNodes[2].style.transform = 'none'
}
const showCard = (index) => {
    // location.href = "mailto:jihedalkhelifi@gmail.com?cc=demande&subject=stage&body=";
    cards.value.childNodes[index].classList.remove('hide');
    window.scrollBy(0, 150 + index * 50) // scroll to the card

}
const startInteraction = () => {
    starter.value.style.display = 'none' // hide the starter;
    showCard(0);
}
onMounted(() => {
    hideCards()// scroll to the card
    window.scrollBy(0, 200) // scroll to the card
})
</script>
<style lang="scss" scoped>
@import '../../styles/general.scss';
@import '../../styles/about.scss';
</style>