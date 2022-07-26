<template>
    <keep-alive>
        <AppPopUp v-show="showModal" title="Oops! " @close-modal="showModal = false" text="Do you want to play again ?"
            buttonText="Resume">
            <button class="btn" ref="replayButton" @click="replay">Yup!</button>
            <button class="btn" @click="$emit('gameWon', true)">No, Skip</button>
        </AppPopUp>
    </keep-alive>
    <canvas ref="canvas" id="canvas"></canvas>
    <button @click="$emit('gameWon')" ref="finishGame" style="display:none;"></button>
</template>
<script setup>
import { ref, onMounted, onUpdated, watch } from 'vue';
import AppPopUp from '../../layout/AppPopUp.vue';
import Particle from './objects/Particle';
import Player from './objects/Player';
import Spawn from './objects/Spawn';
import Projectile from './objects/Projectile';
import gsap from 'gsap';
const gameWon = ref(true);
const finishGame = ref(null);
const showModal = ref(false);
const replayButton = ref(null);
const gameStateChanges = ref(0);
// eslint-disable-next-line no-undef
const emits = defineEmits(['gameWon'])

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

watch(gameStateChanges, (newValue, oldValue) => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    if (window.innerWidth < 750) {
        canvas.height = 500;
    } else {
        canvas.width = window.innerWidth * 0.8;
        canvas.height = window.innerHeight * 0.8;
    }

    context.fillStyle = '#655b49';
    context.fillRect(0, 0, canvas.width, canvas.height);

    var player = new Player(canvas.width / 2, canvas.height / 2, 10, 'white');
    var projectiles = [];
    var enemies = [];
    var particles = []
    var services = [];
    const serviceLabels = ["Maintenance", "Front-end", "Back-end", "Full-stack", "Design", 'Development'];

    replayButton.value.addEventListener('click', () => {
        showModal.value = false;
        gameStateChanges.value++;
    });

    let animationId;
    let numberOfServiceCollisions = 0;
    function animate() {
        animationId = requestAnimationFrame(animate);
        // clear the canvas
        context.fillStyle = 'rgba(22, 22, 29, 0.5)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        player.draw(context);
        // render and update the particles
        particles.forEach((particle, index) => {
            if (particle.alpha <= 0) {
                particles.splice(index, 1);
            } else {
                particle.update(context);
            }
        });

        // render and update the projectiles
        projectiles.forEach(projectile => {
            projectile.update(context);
            // check if the projectile has reached the edge of the screen
            if (projectile.x < 0 || projectile.x > canvas.width || projectile.y < 0 || projectile.y > canvas.height) {
                projectiles.splice(projectiles.indexOf(projectile), 1);
            }
        });

        services.forEach((service, index) => {
            service.update(context);
            // collision detection for the services and the player
            if (distance(player.x, player.y, service.x, service.y) < player.radius + 20) {
                services.splice(index, 1);
                particles.push(new Particle(service.x, service.y, 20, service.color, { x: 0, y: 0 }));
                numberOfServiceCollisions++;
                if (numberOfServiceCollisions === 6) {
                    gameWon.value = false;
                    finishGame.value.click();
                    cancelAnimationFrame(animationId);
                }
            }
        }
        );
        // render and update the enemies
        enemies.forEach(enemy => {
            enemy.update(context);

            const dist = Math.hypot(enemy.x - player.x, enemy.y - player.y);
            // check if the enemy has reached the player
            if (dist < enemy.radius + player.radius) {
                gameWon.value = false;
                cancelAnimationFrame(animationId);
                showModal.value = true;



            }
            // collision detection between the enemy and the projectiles
            projectiles.forEach(projectile => {
                if (
                    projectile.x + projectile.radius > enemy.x - enemy.radius &&
                    projectile.x - projectile.radius < enemy.x + enemy.radius &&
                    projectile.y + projectile.radius > enemy.y - enemy.radius &&
                    projectile.y - projectile.radius < enemy.y + enemy.radius
                ) {
                    // creare a particle when the enemy is hit (explosion depebding on the radius of the enemy) 
                    for (let i = 0; i < enemy.radius * 2; i++) {
                        particles.push(new Particle(projectile.x, projectile.y, Math.random() * 2 + 1, enemy.color, { x: (Math.random() - 0.5) * (Math.random() * 8), y: (Math.random() - 0.5) * (Math.random() * 8) }))
                    }
                    // gradually reduce the enemy's radius to 0 and remove it from the screen
                    if (enemy.radius - 10 > 10) {
                        gsap.to(enemy, {
                            duration: 0.5,
                            radius: enemy.radius - 10,
                            ease: 'power2.inOut'
                        });
                        setTimeout(() => {
                            projectiles.splice(projectiles.indexOf(projectile), 1);
                        }, 0);
                    } else {
                        setTimeout(() => {
                            enemies.splice(enemies.indexOf(enemy), 1);
                            projectiles.splice(projectiles.indexOf(projectile), 1);
                        }, 0);
                    }
                }
            });
        });
    }


    canvas.addEventListener('click', (e) => {
        const angle = Math.atan2(e.offsetY - canvas.height / 2, e.offsetX - canvas.width / 2);
        const velocity = {
            x: Math.cos(angle) * 10,
            y: Math.sin(angle) * 10
        };
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        projectiles.push(new Projectile(
            canvas.width / 2,
            canvas.height / 2,
            5, color,
            velocity));
    });

    animate()
    const spawn = new Spawn()
    spawn.spawnEnemy(canvas, enemies, serviceLabels, services);
})

//  onMounted ///////////////////// 
onMounted(() => {
    gameStateChanges.value++;
    // window.scrollBy(0, innerHeight);
});
</script>
<style lang="scss" scoped>
@import "../../../styles/general.scss";
</style>