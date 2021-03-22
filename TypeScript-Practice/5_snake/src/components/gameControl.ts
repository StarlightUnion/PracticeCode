import Snake from "./snake";
import Food from "./food";
import ScorePanel from "./scorePanel";

// 游戏控制器，控制其他的所有类
export default class GameControl {
  snake: Snake; // 蛇
  food: Food; // 食物
  scorePanel: ScorePanel; // 记分牌
  direction: string = ''; //存储蛇的移动方向（也就是按键的方向）
  isLive = true; // 记录游戏是否结束

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 1);

    this.init();
  }

  // 游戏的初始化方法，调用后游戏即开始
  init() {
    // 绑定键盘按键按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    // 调用run方法，使蛇移动
    this.run();
  }

  /*
      Chrome       IE
      ArrowUp      Up
      ArrowDown    Down
      ArrowLeft    Left
      ArrowRight   Right
  */

  // 创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    // 需要检查event.key的值是否合法（用户是否按了正确的按键）
    // 修改direction属性
    this.direction = event.key;
  }

  // 创建一个控制蛇移动的方法
  run() {
    /*
    *   根据方向（this.direction）来使蛇的位置改变
    *       向上 top  减少
    *       向下 top  增加
    *       向左 left 减少
    *       向右 left 增加
    */
    // 获取蛇现在坐标
    let X = this.snake.X;
    let Y = this.snake.Y;

    // 根据按键方向来计算X值和Y值（未更新）
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;// 向上移动 top 减少
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;// 向下移动 top 增加
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;// 向左移动 left 减少
        break;
      case "ArrowRight":
      case "Right":
        X += 10;// 向右移动 left 增加
        break;
    }

    // 检查蛇是否吃到了食物
    this.checkEat(X, Y);

    //修改蛇的X和Y值
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e) {
      // 进入到catch，说明出现了异常，游戏结束，弹出一个提示信息
      alert(e.message + ' GAME OVER!');
      // 将isLive设置为false
      this.isLive = false;
    }

    // 开启一个定时调用（定时器调用自身）
    // 会再次创建一个定时器
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  // 定义一个方法，用来检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change();// 食物的位置要进行重置
      this.scorePanel.addScore();// 分数增加
      this.snake.addBody();// 蛇要增加一节
    }
  }
}