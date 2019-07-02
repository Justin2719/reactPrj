import React from 'react'
//导入路由
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'

class App extends React.Component{
  render(){
    return (
      <Router>
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