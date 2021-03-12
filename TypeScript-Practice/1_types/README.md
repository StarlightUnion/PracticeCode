## TypeScript变量类型

* 类型：

  | 类型      | 例                   | 描述                         |
  | --------- | -------------------- | ---------------------------- |
  | `number`  | `1,-33,2.5`          | 任意数字                     |
  | `string`  | `"hi"`               | 任意字符串                   |
  | `boolean` | `true,false`         | 布尔值                       |
  | `字面量`  | 其本身               | 限制变量的值就是该字面量的值 |
  | `any`     | *                    | 任意类型                     |
  | `unknown` | *                    | 类型安全的any                |
  | `void`    | 空值（`undefined`）  | 没有值                       |
  | `never`   | 没有值               | 不能是任何值                 |
  | `object`  | `{name: "zhangsan"}` | 任意JS对象                   |
  | `array`   | `[1, 2, 3]`          | 任意JS数组                   |
  | `tuple`   | `[1, 2]`             | TS新类型，固定长度数组       |
  | `enum`    | `enum{A, B}`         | TS新类型，枚举               |