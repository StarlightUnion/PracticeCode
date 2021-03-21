
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
}