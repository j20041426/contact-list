import reqwest from 'reqwest';
// reqwest,一个封装了promise的异步请求插件
// 需要cnpm install reqwest --save

export const fun = ({ commit }) => {
    var msg = "hehe";
    /*reqwest({
      url: `url地址`,
      method: 'post',
      contentType: 'application/json',
      crossOrigin: true,
      data: 参数,
      dataType: 'json',
    }).then(msg => {*/
        commit({
            type:'getMsg', // 这个type很重要，vue会自动去找mutations.js中名为getMsg的方法
            msg, // 成功后把得到的数据通过commit传入mutations
        });
    /*})*/
};