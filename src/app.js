/*
 * @Description: 
 * @Author: 李方强
 * @Date: 2019-08-01 14:53:15
 * @LastEditTime: 2019-08-01 17:45:44
 * @LastEditors: 李方强
 */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './views/login/login'
import Admin from './views/admin/admin'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <BrowserRouter>
            {/* 只匹配其中的某一个模块 */}
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/admin' component={Admin} />
                    <Route path="/" component={Login} exact />
                </Switch>
            </BrowserRouter>
        )
    }
}
 
export default App;