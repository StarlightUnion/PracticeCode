// Created by wxc on 2020/01/15

function Sprite (option) {
    this.init(option);
}

Sprite.prototype = {
    init: function (option) {
        this.x = option.x === 0 ? 0 : (option.x || 10);
        this.y = option.y === 0 ? 0 : (option.y || 10);

        this.width = option.width || 40;// 绘制的宽
        this.height = option.height || 65;// 绘制的高
        this.cutWidth = option.cutWidth || 40;// 裁切的宽
        this.cutHeight = option.cutHeight || 65;// 裁切的高

        this.fps = option.fps || 10;
        this.dirIndex = 0;
        this.imgSrc = option.imgSrc || '';
    },
    render: function (ctx) {
        // 加载图片
        let img = new Image(),
            _this = this;

        img.src = this.imgSrc;
        img.onload = function () {
            let index = 0;
            setInterval(function () {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.drawImage(img,
                    index * _this.cutWidth,
                    _this.dirIndex * _this.cutHeight,
                    _this.cutWidth,
                    _this.cutHeight,
                    _this.x,
                    _this.y,
                    _this.width,
                    _this.height);
                index++;
                index %= 4;
            }, 1000 / _this.fps);
        }
    },
    changeDir: function (dir) {
        if (dir) {
            switch (dir) {
                case 'left':
                    this.dirIndex = 1;
                    break;
                case 'right':
                    this.dirIndex = 2;
                    break;
                case 'up':
                    this.dirIndex = 3;
                    break;
                case 'down':
                    this.dirIndex = 0;
                    break;
            }
        }
    }
}