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

## 编译选项

* 自动编译文件

  * 添加指令`-w`，TS编译器监听文件变化并重新编译。

  * 示例：

    ```shell
      tsc xxx.ts -w
    ```

* 自动编译整个项目

  * 使用`tsc`命令，自动当前目录下所有`.ts`文件。

  * 使用`tsc`需要TS配置文件`tsconfig.json`。

  * 配置选项：

    * `include`：定义希望被编译文件所在目录。

      * 默认值：`["**/*"]` `**表示任意目录，*表示任意文件`

      * 示例：

        编译`src`和`tests`目录下的所有TS文件

        ```shell
        "include": ["src/**/*", "tests/**/*"]
        ```

    * `exclude`：定义希望被排除编译的文件所在的目录。

      * 默认值`["node_modules", "bower_components", "jspm_packages"]`

      * 示例：

        ```json
        "exclude": ["./src/hello/**/*"]
        ```

    * `extends`：定义被继承的配置文件。

      * 示例：

        当前配置文件中会自动包含`config`目录下的`base.json`中的所有配置信息。

        ```json
        "extends": "./config/base"
        ```

    * `files`：指定被编译文件的列表，只有需要编译的文件少时才会用到。

      * 示例：

        该列表里的所有文件都会被编译
        
        ```json
        "files": [
          "core.ts",
          "xxx.ts"
        ]
        ```
      
    * `compilerOptions`：编译选项
    
      * 项目选项
    
        * `target`：设置TS代码编译的目标版本
    
          * 可选值：
    
            `ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext`
    
        * `module`

