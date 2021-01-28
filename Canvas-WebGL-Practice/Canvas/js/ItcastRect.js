// Created by wxc on 2020/01/19
// 1.封装属性： X, Y, W, H, fillStyle, strokeStyle, rotation, opactiy
// 2.render

function ItcastRect (option) {
    this.init(option);
}

ItcastRect.prototype = {
    init (option) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.h = option.h || 0;
        this.w = option.w || 0;
        this.rotation = option.rotation || 0;
        this.opacity = option.opacity === 0 ? 0 : option.opacity || 1;

        this.scaleX = option.scaleX || 1;
        this.scaleY = option.scaleY || 1;
        this.strokeStyle = option.strokeStyle || 'red';
        this.fillStyle = option.fillStyle || 'blue';
    },
    render (context) {
        context.save();

        context.rotate(this.rotation * Math.PI / 180);
        context.globalAlpha = this.opacity;
        context.scale(this.scaleX, this.scaleY);
        context.rect(this.x, this.y, this.w, this.h);
        context.fillStyle = this.fillStyle;
        context.fill();
        context.strokeStyle = this.strokeStyle;
        context.stroke();

        context.restore();
    }
}