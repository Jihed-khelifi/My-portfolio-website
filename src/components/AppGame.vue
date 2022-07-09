<template>
    <div class="wrapper">
        <div class="skills" ref="canvas">
        </div>
    </div>
</template>
<script>
import MySkills from '../constants/skills';
import { ref, onMounted } from 'vue';
export default {
    setup() {
        const skills = MySkills
        const canvas = ref(null);
        const displaySkills = () => {
            skills.forEach(skill => {
                const el = document.createElement('div');
                el.className = 'skill';
                el.innerText = skill.name;
                el.addEventListener('click', (e) => {
                    let skill = MySkills.find(mySkill => mySkill.name === e.target.innerText);
                    if (skill.available) {
                        e.target.classList.add('avaible');
                    } else {
                        e.target.classList.add('unavaible');
                    }
                })
                canvas.value.appendChild(el);
            })
        }
        onMounted(() => {
            displaySkills();
        })
        return {
            canvas,
            displaySkills
        }
    }
}
</script>
<style lang="scss">
@import '../styles/game.scss';
</style>