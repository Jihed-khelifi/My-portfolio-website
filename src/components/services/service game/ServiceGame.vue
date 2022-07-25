<template>
    <keep-alive>
        <AppPopUp v-show="showModal" title="Oops! " @close-modal="showModal = false"
            text="Click on resume if you want to play again" buttonText="Resume">
            <button class="btn" ref="replayButton" @click="replay">Replay</button>
            <button class="btn" @click="$emit('gameWon', true)">Skip</button>
        </AppPopUp>
    </keep-alive>
    <canvas ref="canvas" id="canvas"></canvas>
    <button @click="$emit('gameWon')" ref="finishGame" style="display:none;"></button>
</template>
<script setup>
import { ref, onMounted, onUpdated } from 'vue';
import AppPopUp from '../../layout/AppPopUp.vue';
import Game from './Game.js';
import Enemy from './objects/Enemy.js';
const gameWon = ref(true);
const finishGame = ref(null);
const showModal = ref(false);
const replayButton = ref(null);
// eslint-disable-next-line no-undef
const emits = defineEmits(['gameWon'])

onUpdated(() => {
    console.log('updated');
})
onMounted(() => {
    // jihed listen, you have to only let the animate and spawnEnemy functions to be called inside the onMounted function,
    const game = new Game()
    const enemy = new Enemy()
    game.animate();
    enemy.spawn();
});
</script>
<style lang="scss" scoped>
@import "../../../styles/general.scss";
</style>