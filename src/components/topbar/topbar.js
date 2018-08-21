import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import Mmodal  from './../modal/modal';
import RegisterModal  from './../register/register';
import LoginModal  from './../login/login';
import user from './../../api/user';
import './topbar.less';

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: null,
        };
    }

    register = () => {
        this.setState({
            type: 'register',
        });
        this.refs.Mmodal.modalControl();
    };

    login = () => {
        this.setState({
            type: 'login',
        });
        this.refs.Mmodal.modalControl();
    };

    logout = () => {
        user.logout().then((res) => {
            console.log(res);
        });
    };

    submit = () => {
        this.refs.Mmodal.modalControl();
    };

    render() {
        let Mform = null;
        if (this.state.type === 'register') {
            Mform = <RegisterModal Submit={this.submit} modalTitle="创建新账号" />;
        } else {
            Mform = <LoginModal Submit={this.submit} modalTitle="登录" />;
        }
        return (
            <header className="App-header">
                <div className="wrap m-auto app-top flex-row">
                    <h1><Icon type="cloud-download-o" />我的社区</h1>
                    <div className="right-bar">
                        <Button type="primary" onClick={this.register}>注册</Button>
                        <Button type="primary" icon="user" onClick={this.login}>登录</Button>
                        <Button type="primary" icon="user" onClick={this.logout}>注销</Button>
                    </div>
                </div>
                <Mmodal ref="Mmodal">
                    { Mform }
                </Mmodal>
            </header>
        )
    }
}

export default Topbar;