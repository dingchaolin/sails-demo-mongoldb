/**
 * Created by dingchaolin on 16/11/13.
 */
function formatDate(date) {
  return date.toLocaleDateString()+' '+date.toLocaleTimeString();
}
module.exports = {
  /**
   * `UsersController.zhuce()`
   */
  zhuce: function (req, res) {
    var user = {id:2,email:'cc',pwd:'cc',nicheng:'王五'};
    user.createtime=formatDate(new Date());
    User.create(user).exec(function (err,created){
      if(err){
        var errStr = err.message;
        res.send(errStr);
        return;
      }
      res.send("注册成功");
    })
  },
  login: function (req, res) {
    // 不用使用query
    /*
     User.find({email:'aa',pwd:'aa'},function(err,rs){／／多个查询 返回［］
     console.log(rs);
     res.send('查到:'+rs);
     });
     */
    User.findOne({email:'cc',pwd:'cc'},function(err,rs){//单个查询 返回对象
      console.log(rs);
      res.send(rs);
    });
  }
};
