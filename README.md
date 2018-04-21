
# 说明
依赖于 [Express'](https://www.npmjs.com/package/express) application generator.    
参考flask-appbuilder框架，进行开发。自动生成包含CURD的应用。    
# 功能
2018/04/21: express-generator重构版本

# 时间节点
2018/04/21:  项目启动，导出AOP函数到utils里面，更新readme，发布到npmjs
# 如何开发

```
1、 git@github.com:hfuuss/xiatiya.git
2、 cd xiatiya && npm install
3、 npm link # 进行本地全局安装测试
4、 xiatiya [options]
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

