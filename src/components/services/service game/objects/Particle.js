export default class Particle {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.alpha = 1
        this.friction = 0.95;
    }
    draw(ctx) {
        ctx.save()
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
    update(ctx) {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw(ctx);
        this.alpha -= 0.01;
        this.radius *= this.friction;
        this.velocity.x *= this.friction;
        this.velocity.y *= this.friction;
    }
}