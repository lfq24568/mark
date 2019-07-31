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
                    <Route path='/' component={Login}></Route>
                    <Route path='/admin' component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
 
export default App;