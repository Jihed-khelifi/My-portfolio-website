import Service from "./Service";
export default class Enemy {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.enemies = [];
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
    update(ctx) {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw(ctx);
    }
    spawn() {
        setInterval(() => {
            const radius = Math.random() * 20 + 15;
            let x
            let y
            if (Math.random() < 0.5) {
                x = Math.random() < 0.5 ? -radius : this.canvas.width + radius;
                y = Math.random() * this.canvas.height;
            } else {
                x = Math.random() * this.canvas.width;
                y = Math.random() < 0.5 ? -radius : this.canvas.height + radius;

            }
            const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            const angle = Math.atan2(this.gameManagercanvas.height / 2 - y, this.gameManagercanvas.width / 2 - x);
            const velocity = {
                x: -Math.cos(angle) * (-1.5),
                y: -Math.sin(angle) * (-1.5)
            };
            if (this.game.serviceLabels.length > 0) {
                if (radius > 25) {
                    const serviceIndex = Math.floor(Math.random() * this.game.serviceLabels.length);
                    const service = new Service(x, y, this.game.serviceLabels[serviceIndex], velocity, 'white');
                    this.game.services.push(service);
                    this.game.serviceLabels.splice(serviceIndex, 1);
                } else {
                    const enemy = new Enemy(x, y, radius, color, velocity);
                    this.game.enemies.push(enemy);
                }
            } else {
                const enemy = new Enemy(x, y, radius, color, velocity);
                this.game.enemies.push(enemy);
            }

        }, 2000);
    }
}