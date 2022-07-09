<template>
    <section class="about-wrapper">
        <AppPopUp v-show="openPopUp" :text="popUpText" :title="popUpTitle" />
        <div ref="starter" class="about-me-starter">
            <p>Click to start the interactive experience</p>
            <button @click="startInteraction()" class="btn start-interaction-btn">Start</button>
        </div>
        <div ref="cards" class="about-me-container">
            <div ref="card" class="card greeting">
                <h2 class="">
                    Hello, I'm
                    I am a full-stack web developer.
                </h2>
                <p>I develop websites with love, integrity and art in mind</p>
                <button @click="showCard(1)" class="btn next">Get to Know me</button>
            </div>
            <div ref="card" class="card basic-info">
                <h2 class="know-me">Get to know me</h2>
                <ul class="infos-container">
                    <li>
                        <span class="label">My Name is</span>
                        <span class="value">Jihed KHELIFI</span>
                    </li>
                    <li>
                        <span class="label">I am </span>
                        <span class="value">23</span>
                        <span>years old</span>
                    </li>
                    <li>
                        <span class="label">I am currently in:</span>
                        <span class="value">Sousse, Tunisia</span>
                    </li>
                    <li>
                        <span class="label">My Email:</span>
                        <span class="value">
                            <a href="mailto:">Jihedalkhelifi@gmail.com</a>
                        </span>
                    </li>
                    <li>
                        <span class="label">Phone:</span>
                        <span class="value">
                            <a href="tel:"></a>
                        </span>
                    </li>
                </ul>
                <button @click="StartGame()" class="btn next">What are My skills ?</button>
            </div>

            <div ref="card" class="card game">
                <Game />
            </div>
        </div>
    </section>
</template>
<script>
import Game from './AppGame.vue'
import { ref, onMounted } from 'vue'
import AppPopUp from './AppPopUp.vue'
export default {
    components: {
        Game,
        AppPopUp
    },
    setup() {
        const openPopUp = ref(false)
        const starter = ref(null)
        const card = ref(null);
        const cards = ref(null);
        const popUpText = ref('')
        const popUpTitle = ref('')
        const hideCards = () => {
            cards.value.childNodes.forEach(card => {
                card.classList.add('hide');
            })
        }
        const StartGame = () => {
            popUpTitle.value = 'What are My skills ?'
            popUpText.value = 'Try to guess my skills by clicking on them'
            openPopUp.value = true
            setTimeout(() => {
                openPopUp.value = false
                showCard(2);
            }, 3000)
        }
        const showCard = (index) => {
            cards.value.childNodes[index].classList.remove('hide');
            window.scrollBy(0, 150 + index * 50) // scroll to the card

        }
        const startInteraction = () => {
            starter.value.style.display = 'none' // hide the starter;
            showCard(0);
        }
        onMounted(() => {
            hideCards()
        })
        return {
            card,
            cards,
            starter,
            openPopUp,
            popUpText,
            popUpTitle,
            showCard,
            startInteraction,
            StartGame
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/general.scss';
@import '../styles/about.scss';
</style>