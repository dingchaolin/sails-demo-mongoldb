# blog

a [Sails](http://sailsjs.org) application

##安装mongodb驱动
- yarn add sails-mongo --dev
##数据源配置
localDiskDb: {
   adapter: 'sails-disk'
  },
- 先把上述代码注释掉
- 上面的数据数据源默认指文件型数据库
## 配置mongodb数据源
someMongodbServer: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    //user: 'username', //optional
    //password: 'password', //optional
    database: 'blog' //optional
  },
- 因为没有用户名密码 所有都可以注释掉 不要了
- models.js  connection:'someMongodbServer',
- 设置安全模式  migrate: 'safe'
- 创建usermodels
module.exports = { 
  tableName: 'user', 
  adapter: 'sails-mongo', 
  autoCreatedAt: false, 
  autoUpdatedAt: false, 
  attributes: { 
    id:{},email:{},pwd:{},nicheng:{},updtime:{},createtime:{}, 
  } 
}; 
- 数据操作 根mysql的操作代码基本完全一样
- 不能使用User.query（）；因为mongo不支持sql查询

