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
var count = 0
const GameOn = ref(true)

const scrollAndOpenComp = () => {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
    openPopUp.value = false
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
var skillCollection = []
const checkLang = (lang) => {
    let skill = mySkills.find(mySkill => lang.target.innerText.includes(mySkill.name));
    if (skill.available) {
        if (count === numberOfAvailableSkills) {
            popUpText.value = "In the next game only let service's label get closer to the white dot"
            popUpTitle.value = 'Hurray! you figured them out!'
            document.querySelectorAll('.skill:not(.available)').forEach(skill => {
                skill.remove()
            })
            openPopUp.value = true;
            GameOn.value = false;
            return
        }
        if (!skillCollection.includes(skill)) {
            skillCollection.push(skill)
            lang.target.classList.add('available');
            const levelIndicator = document.createElement('span');
            levelIndicator.classList.add('level-indicator');
            levelIndicator.innerText = skill.level;
            lang.target.appendChild(levelIndicator);
            levelIndicator.classList.add('show-level');
            lang.target.removeEventListener('click', checkLang)
            count++;
        }
    } else {
        explode(lang.clientX, lang.clientY, lang.target);
        lang.target.classList.add('unavailable');
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
            el.removeEventListener('click', checkLang(e))
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