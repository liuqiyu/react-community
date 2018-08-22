import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import Mmodal  from './../modal/modal';
import RegisterModal  from './../register/register';
import LoginModal  from './../login/login';
import user from './../../api/user';
import './topbar.less';
import { login, logout, getStatus } from "../../store/loginStatus/action";
import { connect } from "react-redux";

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: null,
        };
    }

    componentDidMount() {
        this.props.getStatus();
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
            if (res.data.code === 200) {
                window.localStorage.removeItem('userInfo');
                this.props.logout();
            }
        });
    };

    submit = () => {
        this.refs.Mmodal.modalControl();
    };

    render() {
        let Mform = null;
        let loginModal = null;
        if (this.state.type === 'register') {
            Mform = <RegisterModal Submit={this.submit} modalTitle="创建新账号" />;
        } else {
            Mform = <LoginModal Submit={this.submit} modalTitle="登录" />;
        }

        if (!this.props.loginStatus) {
            loginModal = (
                <div className="right-bar">
                    <Button type="primary" onClick={this.register}>注册</Button>
                    <Button type="primary" icon="user" onClick={this.login}>登录</Button>
                </div>
            )
        } else {
            loginModal = (
                <div className="right-bar">
                    <Button type="primary" icon="user" onClick={this.logout}>注销</Button>
                </div>
            )
        }
        return (
            <header className="App-header">
                <div className="wrap m-auto app-top flex-row">
                    <h1><Icon type="cloud-download-o" />我的社区</h1>
                    { loginModal }
                </div>

                <Mmodal ref="Mmodal">
                    { Mform }
                </Mmodal>
            </header>
        )
    }
}

export default connect(state => ({
    loginStatus: state.loginStatus,
    userInfo: state.userInfo,
}), {
    login,
    logout,
    getStatus,
})(Topbar);
