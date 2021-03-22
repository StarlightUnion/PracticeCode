
export default class Food {
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById("food")!;
  }

  // 获取食物X轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  }

  // 获取食物Y轴坐标的方法
  get Y() {
    return this.element.offsetTop;
  }

  // 修改食物的位置
  change() {
    // 生成一个随机的位置 0-290
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;

    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
  }
}