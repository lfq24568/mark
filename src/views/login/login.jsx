import React, { Component } from 'react'
import './login.less'
import logo from './images/login.png'

class Login extends Component{
    render () {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt=""/>
                    <h1>React后台管理系统</h1>
                </header>
                <div className="login-main">
                    <h2>用户登录</h2>
                </div>
            </div>
        )
    }
}

export default Login