import Projectile from "./Projectile";

export default class GameManager {
    numberOfServiceCollisions = 0;
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        if (window.innerWidth < 750) {
            this.canvas.height = 500;
        } else {
            this.canvas.width = window.innerWidth * 0.8;
            this.canvas.height = window.innerHeight * 0.8;
        }
        this.context.fillStyle = '#655b49';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.addEventListener('click', (e) => {
            // create a new projectile on click 
            const angle = Math.atan2(e.offsetY - this.canvas.height / 2, e.offsetX - this.canvas.width / 2);
            const velocity = {
                x: Math.cos(angle) * 10,
                y: Math.sin(angle) * 10
            };
            const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            this.projectiles.push(new Projectile(
                this.canvas.width / 2,
                this.canvas.height / 2,
                5, color,
                velocity));
        });
    }
    distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }
    clear() {
        this.context.fillStyle = 'rgb(22, 22, 29, 0.5)';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}