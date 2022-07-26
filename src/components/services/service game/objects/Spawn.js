import Enemy from "./Enemy";
import Service from "./Service";

export default class Spawn {
    constructor() { }

    spawnEnemy(canvas, enemies, serviceLabels, services,) {
        setInterval(() => {
            const radius = Math.random() * 20 + 15;
            let x
            let y
            if (Math.random() < 0.5) {
                x = Math.random() < 0.5 ? -radius : canvas.width + radius;
                y = Math.random() * canvas.height;
            } else {
                x = Math.random() * canvas.width;
                y = Math.random() < 0.5 ? -radius : canvas.height + radius;

            }
            const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
            const velocity = {
                x: -Math.cos(angle) * (-1.5),
                y: -Math.sin(angle) * (-1.5)
            };
            if (serviceLabels.length > 0) {
                if (radius > 25) {
                    const serviceIndex = Math.floor(Math.random() * serviceLabels.length);
                    const service = new Service(x, y, serviceLabels[serviceIndex], velocity, 'white');
                    services.push(service);
                    serviceLabels.splice(serviceIndex, 1);
                } else {
                    const enemy = new Enemy(x, y, radius, color, velocity);
                    enemies.push(enemy);
                }
            } else {
                const enemy = new Enemy(x, y, radius, color, velocity);
                enemies.push(enemy);
            }

        }, 2000);
    }

}