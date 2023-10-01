function initCanvas() {
    var ctx = document.getElementById('my_canvas').getContext('2d');
    var backgroundImage = new Image();
    var naveImage = new Image();
    var enemigosImage1 = new Image();
    var enemigosImage2 = new Image();

    backgroundImage.src = "";
    naveImage.src = "img/cohete1.png";

    enemigosImage1.src = "img/nave.png";
    enemigosImage2.src = "img/nave2.png";

    var cW = ctx.canvas.width;
    var cH = ctx.canvas.height;

    var enemyTemplate = function (options) {
        return {
            id: options.id || '',
            x: options.x || '',
            y: options.y || '',
            w: options.w || '',
            h: options.h || '',
            image: options.image || enemigosImage1
        }
    }

    var enemigos = [
        new enemyTemplate({ id: "enemy1", x: 350, y: 50, w: 80, h: 30 }),
        new enemyTemplate({ id: "enemy2", x: 100, y: -20, w: 50, h: 30 }),
        new enemyTemplate({ id: "enemy3", x: 225, y: -20, w: 50, h: 30 }),
        new enemyTemplate({ id: "enemy4", x: 350, y: -20, w: 80, h: 30 }),
        new enemyTemplate({ id: "enemy5", x: 100, y: -70, w: 80, h: 30 }),
        new enemyTemplate({ id: "enemy6", x: 225, y: -70, w: 50, h: 30 }),
        new enemyTemplate({ id: "enemy7", x: 350, y: -70, w: 50, h: 30 }),
        new enemyTemplate({ id: "enemy8", x: 475, y: -70, w: 50, h: 30 }),
        new enemyTemplate({ id: "enemy9", x: 600, y: -70, w: 80, h: 30 }),
        new enemyTemplate({ id: "enemy10", x: 475, y: -20, w: 50, h: 30 }),
        new enemyTemplate({ id: "enemy11", x: 600, y: -20, w: 50, h: 30 }),

        // Segundo grupo de enemigos
        new enemyTemplate({ id: "enemy12", x: 100, y: -220, w: 50, h: 30, image: enemigosImage2 }),
        new enemyTemplate({ id: "enemy13", x: 225, y: -220, w: 50, h: 30, image: enemigosImage2 }),
        new enemyTemplate({ id: "enemy14", x: 350, y: -220, w: 80, h: 50, image: enemigosImage2 }),
        new enemyTemplate({ id: "enemy15", x: 100, y: -270, w: 80, h: 50, image: enemigosImage2 }),
        new enemyTemplate({ id: "enemy16", x: 225, y: -270, w: 50, h: 30, image: enemigosImage2 }),
        new enemyTemplate({ id: "enemy17", x: 350, y: -270, w: 50, h: 30, image: enemigosImage2 }),
        new enemyTemplate({ id: "enemy18", x: 475, y: -270, w: 50, h: 30, image: enemigosImage2 }),
        new enemyTemplate({ id: "enemy19", x: 600, y: -270, w: 80, h: 50, image: enemigosImage2 }),
        new enemyTemplate({ id: "enemy10", x: 475, y: -200, w: 50, h: 30, image: enemigosImage2 }),
        new enemyTemplate({ id: "enemy21", x: 600, y: -200, w: 50, h: 30, image: enemigosImage2 })
    ];

    var renderEnemigos = function (enemyList) {
        for (var i = 0; i < enemyList.length; i++) {
            var enemy = enemyList[i];
            ctx.drawImage(enemy.image, enemy.x, enemy.y += .5, enemy.w, enemy.h);
            launcher.hitDetectLowerlevel(enemy);
        }
    }

    function Launcher() {
        this.y = 500,
            this.x = cW * .5 - 25,
            this.w = 100,
            this.h = 100,
            this.direccion,
            this.bg = 'white',
            this.misils = [];

        this.gameStatus = {
            over: false,
            message: "",
            fillStyle: "red",
            font: "italic bold 36px Arial, sans-serif",
        }

        this.render = function () {
            if (this.direccion === 'left') {
                this.x -= 5;
            }
            else if (this.direccion === 'right') {
                this.x += 5;
            }
            else if (this.direccion === 'downArrow') {
                this.y += 5;
            }
            else if (this.direccion === 'upArrow') {
                this.y -= 5;
            }
            ctx.fillStyle = this.bg;
            ctx.drawImage(backgroundImage, 0, 0);
            ctx.drawImage(naveImage, this.x, this.y, 50, 90);

            for (var i = 0; i < this.misils.length; i++) {
                var m = this.misils[i];
                ctx.fillRect(m.x, m.y -= 5, m.w, m.h);

                this.hitDetect(m, i);

                if (m.y <= 0) {
                    this.misils.splice(i, 1);
                }
            }
            if (enemigos.length === 0) {
                clearInterval(animateInterval);
                ctx.fillStyle = 'Yellow';
                ctx.font = this.gameStatus.font;
                ctx.fillText('Ganaste', cW * .5 - 80, 50);
            }

        }
        this.hitDetect = function (m, mi) {
            for (var i = 0; i < enemigos.length; i++) {
                var e = enemigos[i];

                if (m.x <= e.x + e.w && m.x + m.w >= e.x &&
                    m.y >= e.y && m.y <= e.y + e.h) {
                    enemigos.splice(i, 1);
                    document.querySelector('.barra').innerHTML = "Destruido" + e.id;
                }
            }
        }
        this.hitDetectLowerlevel = function (enemy) {
            if (enemy.y > 550) {
                this.gameStatus.over = true;
                this.gameStatus.message = 'Todos los enemigos Destruidos';
            }

            if ((enemy.y < this.y + 25 && enemy.y > this.y - 25) &&
                (enemy.x < this.x + 45 && enemy.x > this.x - 45)) {
                this.gameStatus.over = true;
                this.gameStatus.message = 'Perdiste el Juego';
            }

            if (this.gameStatus.over === true) {
                clearInterval(animateInterval);
                ctx.fillStyle = this.gameStatus.fillStyle;
                ctx.font = this.gameStatus.font;

                ctx.fillText(this.gameStatus.message, cW * .5 - 80, 50);
            }
        }
    }
    var launcher = new Launcher();
    function animate() {
        ctx.clearRect(0, 0, cW, cH);
        launcher.render();
        renderEnemigos(enemigos);
    }

    var animateInterval = setInterval(animate, 6);

    var left_btn = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');
    var fire_btn = document.getElementById('fire_btn');

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 37) {
            launcher.direccion = 'left';
            if (launcher.x < cW * .2 - 130) {
                launcher.x += 0;
                launcher.direccion = '';
            }
        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.keyCode === 37) {
            launcher.x += 0;
            launcher.direccion = '';
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 39) {
            launcher.direccion = 'right';
            if (launcher.x > cW - 110) {
                launcher.x -= 0;
                launcher.direccion = '';
            }
        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.keyCode === 39) {
            launcher.x -= 0;
            launcher.direccion = '';
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 38) {
            launcher.direccion = 'right';
            launcher.direccion = 'upArrow';
            if (launcher.y < cH * .2 - 80) {
                launcher.y += 0;
                launcher.direccion = '';
            }
        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.keyCode === 38) {
            launcher.y -= 0;
            launcher.direccion = '';
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 40) {
            launcher.direccion = 'downArrow'
            if (launcher.y > cH - 110) {
                launcher.y -= 0;
                launcher.direccion = '';
            }
        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.keyCode === 40) {
            launcher.y += 0;
            launcher.direccion = '';
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 80) {
            this.location.reload();
        }
    });

    left_btn.addEventListener('mousedown', function (event) {
        launcher.direccion = 'left';
    });

    left_btn.addEventListener('mouseup', function (event) {
        launcher.direccion = '';
    });

    right_btn.addEventListener('mousedown', function (event) {
        launcher.direccion = 'right';
    });
    right_btn.addEventListener('mouseup', function (event) {
        launcher.direccion = '';
    });

    fire_btn.addEventListener('mousedown', function (event) {
        launcher.misils.push({
            x: launcher.x + launcher.w * .5,
            y: launcher.y,
            w: 5,
            h: 10
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 32) {
            launcher.misils.push({
                x: launcher.x + launcher.w * .5,
                y: launcher.y,
                w: 5,
                h: 10
            });
        }
    });
}
window.addEventListener('load', function (event) {
    initCanvas();
})