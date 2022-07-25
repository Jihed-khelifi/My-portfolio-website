import Player from "./objects/Player.js";
import GameManager from "./objects/GameManager";
import Particle from "./objects/Particle";
import gsap from "gsap";

export default class Game {
    gameLost = false
    hasCollectedAllServices = false
    animationId = null;
    constructor() {
        this.gameManager = new GameManager();
        this.player = new Player(this.gameManager.canvas.width / 2, this.gameManager.canvas.height / 2, 10, 'white');
        this.projectiles = [];
        this.enemies = [];
        this.particles = []
        this.services = [];
        this.serviceLabels = ["Maintenance", "Front-end", "Back-end", "Full-stack", "Design", 'Development'];
    }

    animate() {
        console.log('jihed');
        this.animationId = requestAnimationFrame(this.animate());
        this.gameManager.clear();
        this.player.draw();

        // render and update particles
        this.particles.forEach((particle, index) => {
            if (particle.alpha <= 0) {
                this.particles.splice(index, 1);
            } else {
                particle.update(this.gameManager.context);
            }
        });

        // render and update projectiles
        this.projectiles.forEach(projectile => {
            projectile.update(this.gameManager.context);
            // check if the projectile has reached the edge of the screen
            if (projectile.x < 0 || projectile.x > this.gameManager.canvas.width || projectile.y < 0 || projectile.y > this.gameManager.canvas.height) {
                this.projectiles.splice(this.projectiles.indexOf(projectile), 1);
            }
        });

        // render and update services
        this.services.forEach((service, index) => {
            service.update(this.gameManager.context);
            // collision detection for the services and the player
            if (this.gameManager.distance(this.player.x, this.player.y, service.x, service.y) < this.player.radius + 20) {
                this.services.splice(index, 1);
                this.particles.push(new Particle(service.x, service.y, 20, service.color, { x: 0, y: 0 }));
                this.gameManager.numberOfServiceCollisions++;
                // check if the player has collected all the services
                if (this.gameManager.numberOfServiceCollisions === 6) {
                    this.hasCollectedAllServices = true;
                    cancelAnimationFrame(this.animationId);
                }
            }
        });

        // render and update enemies and check for collisions
        this.enemies.forEach(enemy => {
            enemy.update(this.gameManager.context);

            const dist = Math.hypot(enemy.x - this.player.x, enemy.y - this.player.y);
            // check if the enemy has reached the player
            if (dist < enemy.radius + this.player.radius) {
                this.gameLost = false;
                cancelAnimationFrame(this.animationId)

            }
            // collision detection between the enemy and the projectiles
            this.projectiles.forEach(projectile => {
                if (
                    projectile.x + projectile.radius > enemy.x - enemy.radius &&
                    projectile.x - projectile.radius < enemy.x + enemy.radius &&
                    projectile.y + projectile.radius > enemy.y - enemy.radius &&
                    projectile.y - projectile.radius < enemy.y + enemy.radius
                ) {
                    // create a particle when the enemy is hit (explosion depebding on the radius of the enemy) 
                    for (let i = 0; i < enemy.radius * 2; i++) {
                        this.particles.push(new Particle(projectile.x, projectile.y, Math.random() * 2 + 1, enemy.color, { x: (Math.random() - 0.5) * (Math.random() * 8), y: (Math.random() - 0.5) * (Math.random() * 8) }))
                    }
                    // gradually reduce the enemy's radius to 0 and remove it from the screen
                    if (enemy.radius - 10 > 10) {
                        gsap.to(enemy, {
                            duration: 0.5,
                            radius: enemy.radius - 10,
                            ease: 'power2.inOut'
                        });
                        setTimeout(() => {
                            this.projectiles.splice(this.projectiles.indexOf(projectile), 1);
                        }, 0);
                    } else {
                        setTimeout(() => {
                            this.enemies.splice(this.enemies.indexOf(enemy), 1);
                            this.projectiles.splice(this.projectiles.indexOf(projectile), 1);
                        }, 0);
                    }
                }
            });
        });
    }


}