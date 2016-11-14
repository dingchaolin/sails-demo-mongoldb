/**
 * Created by dingchaolin on 16/11/13.
 */
module.exports = {
  tableName: 'user',
  adapter: 'sails-mongo',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id:{},email:{},pwd:{},nicheng:{},updtime:{},createtime:{},
  }
}; 
