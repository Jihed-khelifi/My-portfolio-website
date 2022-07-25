<template>
    <div class="game-wrapper">
        <AppPopUp v-show="openPopUp" :text="popUpText" :title="popUpTitle" @close-Modal="$emit('nextComp')">
            <button class="btn" @click="() => {
                $emit('nextComp')
                scrollAndOpenComp()
            }">Alright</button>
        </AppPopUp>
        <h2 v-if="GameOn">Try to guess which technology I use </h2>
        <h2 v-else>Technologies I use: </h2>
        <div class="skills" ref="container">
        </div>
    </div>
</template>
<script setup>
import { mySkills, numberOfAvailableSkills } from '../../constants/skills';
import { ref, onMounted } from 'vue';
import AppPopUp from '../layout/AppPopUp.vue';
import gsap from 'gsap';

const skills = mySkills
const container = ref(null);
const openPopUp = ref(false)
const popUpText = ref('')
const popUpTitle = ref('')
const count = ref(0);
const GameOn = ref(true)
const scrollAndOpenComp = () => {
    openPopUp.value = false
    window.scrollBy(0, 650)

}

const explode = (x, y, target) => {
    var particles = 14
    const explosion = document.createElement('div')
    explosion.classList.add('explosion')
    target.appendChild(explosion)
    explosion.style.left = x - explosion.offsetWidth / 2
    explosion.style.top = y - explosion.offsetHeight / 2
    for (let i = 0; i < particles; i++) {
        let x = explosion.offsetWidth / 2 + rand(80, 160) * Math.cos((2 * Math.PI * i) / rand(particles - 10, particles + 10))

        let y = explosion.offsetHeight / 2 + rand(80, 160) * Math.cos((2 * Math.PI * i) / rand(particles - 10, particles + 10))

        let color = '#' + Math.floor(Math.random() * 16777215).toString(16)

        const particle = document.createElement('div')
        particle.classList.add('particle')
        particle.style.backgroundColor = color
        particle.style.left = x + 'px'
        particle.style.top = y + 'px'
        if (i === 0) {
            particle.addEventListener('animationend', () => {
                target.removeChild(explosion)
            })
        }
        explosion.appendChild(particle)
    }
}
const checkLang = (lang) => {
    let skill = mySkills.find(mySkill => mySkill.name === lang.target.innerText);
    if (skill.available) {
        count.value++;
        if (count.value === numberOfAvailableSkills) {
            popUpText.value = "In the next game only let service's label to get closer to the dot in the center"
            popUpTitle.value = 'Hurray! you figured them out!'
            openPopUp.value = true;
            GameOn.value = false;
        }
        lang.target.classList.add('avaible');
        const levelIndicator = document.createElement('span');
        levelIndicator.classList.add('level-indicator');
        levelIndicator.innerText = skill.level;
        lang.target.appendChild(levelIndicator);
        levelIndicator.classList.add('show-level');
        lang.target.removeEventListener('click', checkLang)
    } else {
        explode(lang.clientX, lang.clientY, lang.target);
        lang.target.classList.add('unavaible');
        setTimeout(() => {
            lang.target.remove();
        }, 700);
    }
}
const displaySkills = () => {
    skills.forEach(skill => {
        const el = document.createElement('div');
        el.className = 'skill';
        el.innerText = skill.name;

        el.addEventListener('click', (e) => {
            checkLang(e)
            el.removeEventListener('click', checkLang)
        });
        container.value.appendChild(el);
    })
}
const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
onMounted(() => {
    displaySkills();
})
</script>
<style lang="scss">
@import '../../styles/game.scss';
@import '../../styles/general.scss';
</style>