export default class Service {
    constructor(x, y, label, velocity, color) {
        this.x = x;
        this.y = y;
        this.label = label;
        this.velocity = velocity;
        this.color = color;
    }
    draw(ctx) {
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.font = "20px Arial";
        ctx.fillStyle = this.color;
        ctx.fillText(this.label, this.x - 5, this.y + 5);
    }
    update(ctx) {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw(ctx);
    }
}