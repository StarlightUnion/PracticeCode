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

            `es3（默认）、es5、es6/es2015、es7/es2016、es2017、es2018、es2019、es2020、esnext`

        * `module`：指定要使用的模块化规范

          * 可选值：

            `none、commonjs、amd、system、umd、es6、es2015、es2020、esnext`

        * `lib`：指定项目中要用到的库

          * 可选值：

            * `es5、es6/es2015、es7/es2016、es2017、es2018、es2019、es2020、esnext、dom、webworker、scripthost ......`

          * 示例：

            ```json
            "compilerOptions": {
                "target": "ES6",
                "lib": ["ES6", "DOM"],
                "outDir": "dist",
                "outFile": "dist/aa.js"
            }
            ```

        * `outDir`：用来指定编译后文件所在的目录。默认情况下，编译后的js文件会和ts文件位于相同的目录，设置outDir后可以改变编译后文件的位置

          * 示例：

            ```json
            "compilerOptions": {
                "outDir": "dist"
            }
            ```

        * `outFile`：将所有的文件编译为一个js文件，默认会将所有的编写在全局作用域中的代码合并为一个js文件，如果module制定了None、System或AMD则会将模块一起合并到文件之中

          * 示例：

            ```json
            "compilerOptions": {
                "outFile": "dist/app.js"
            }
            ```

        * `rootDir`：指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过rootDir可以手动指定根目录

          * 示例：

            ```json
            "compilerOptions": {
                "rootDir": "./src"
            }
            ```

        * `allowJs`：是否对js文件编译。`true/false`

        * `checkJs`：是否对js文件进行检查。`true/false`

        * `removeComments`：是否删除注释。默认值：false

        * `noEmit`：不对代码进行编译。默认值：false

        * `sourceMap`：是否生成sourceMap。默认值：false

        * 严格检查

          - `strict`：启用所有的严格检查，默认值为true，设置后相当于开启了所有的严格检查
          - `alwaysStrict`：总是以严格模式对代码进行编译
          - `noImplicitAny`：禁止隐式的any类型
          - `noImplicitThis`：禁止类型不明确的this
          - `strictBindCallApply`：严格检查bind、call和apply的参数列表
          - `strictFunctionTypes`：严格检查函数的类型
          - `strictNullChecks`：严格的空值检查
          - `strictPropertyInitialization`：严格检查属性是否初始化

        * 额外检查

          - `noFallthroughCasesInSwitch`：检查switch语句包含正确的break
          - `noImplicitReturns`：检查函数没有隐式的返回值
          - `noUnusedLocals`：检查未使用的局部变量
          - `noUnusedParameters`：检查未使用的参数

        * 高级

          - `allowUnreachableCode`：检查不可达代码
            - 可选值：
              - true，忽略不可达代码
              - false，不可达代码将引起错误
          - `noEmitOnError`：有错误的情况下不进行编译。默认值：false
