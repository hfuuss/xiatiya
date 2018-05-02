
# 说明
依赖于 [Express'](https://www.npmjs.com/package/express) application generator.    
改装成自动生成包含CURD的应用。    
# 如何使用
`1、 npm install xiatiya -g`    
`2、 xiatiya app`    
`3、 cd app && npm install`    
`4、 node mock.js #前提要开启mogon数据库`    
`5、 npm start`    
`6、 访问http://localhost:3000/students?keyword=张` 

# 运行截图
生成项目截图：
![](http://images.hfuusec.cn/18-5-2/75238005.jpg)
浏览器访问截图：
![](http://images.hfuusec.cn/18-5-2/41254235.jpg)   

# 时间节点
2018/04/21:  项目启动，导出AOP函数到utils的aop.js里面，更新readme，发布到npmjs       
2018/04/24:  重构代码，导出其它功能函数到utils的funs.js里面。更新readme。增加config文件夹和db文件，之后写数据库配置吧(mongo)。    
2018/05/02:  增加了config/db文件；增加了mock/mock.js文件。增加models和controllers文件夹和例子。

# 如何开发

```
1、 git clone git@github.com:hfuuss/xiatiya.git
2、 cd xiatiya && npm install
3、 npm link # 进行本地全局安装测试
4、 xiatiya [appName]
```
代码里面写了很多中文注释，看完整体逻辑之后，就可以进行开发啦。
# 文件说明
```
-- bin 存放主函数
-- doc 将来存放使用文档
-- lib 存放函数库
-- templates 存放模板文件# express-generate自带
-- test 测试用例
-- utils 工具类
```
## License

[MIT](LICENSE)

