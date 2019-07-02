import React from 'react'
//导入路由
import { HashRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'

class App extends React.Component{
  render(){
    return (
      <Router>
        {/* <ul>
          <li>
            <Link to="/login">登录</Link>
          </li>
          <li>
            <Link to="/home">首页</Link>
          </li>
        </ul> */}
        <Switch>
          <Redirect exact path="/" to="/home" />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App