import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import 'semantic-ui-css/semantic.min.css'
// 导入axios对象
import axios from 'axios'
// 把axios对象绑定到了React组件的原型上，将来所有的react组件都能访问到axios对象
React.Component.prototype.axios = axios
axios.defaults.baseURL = 'http://47.96.21.88:8086/'

// 给axios配置一个响应拦截器 直接把data中的数据返回
axios.interceptors.response.use(
  function (response) {
    // 拦截到axios所有的请求，直接返回了响应结果中的data数据
    return response.data
  },
  function (error) {
    return error
  }
)


ReactDOM.render(<App />, document.getElementById('root'));


