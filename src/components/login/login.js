import React, { Component } from 'react';
import { Form, Button, Input, message } from "antd";
import user from '../../api/user';
import {login} from "../../store/loginStatus/action";
import {connect} from "react-redux";
const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: [
                {
                    label: '用户名',
                    id: 'username',
                    dom: 'input',
                    type: 'input',
                    rules: [{ required: true, message: '请输入用户名!' }],
                },
                {
                    label: '密码',
                    id: 'password',
                    dom: 'input',
                    type: 'password',
                    rules: [{ required: true, message: '请输入密码!' }],
                },
            ],
            loading: false,
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({
                    loading: true,
                });
                const form = {
                    username: values.username,
                    password: values.password,
                };
                user.login(form).then((res) => {
                    if (res.data.code === 200) {
                        message.info(res.data.message);
                        window.localStorage.setItem('userInfo', JSON.stringify(res.data.data));
                        this.props.login(res.data.data);
                    } else {
                        message.error(res.data.message);
                    }
                    this.setState({
                        loading: false,
                    });
                    this.props.Submit();
                });
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const listItems = this.state.form.map((item, index) =>
            <FormItem
                key={index}
                label={item.label}
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 17 }}
            >
                {getFieldDecorator(item.id, {
                    rules: item.rules,
                })(
                    <Input  type={item.type} />
                )}
            </FormItem>
        );
        return (
            <Form onSubmit={this.handleSubmit}>
                { listItems }
                <FormItem
                    wrapperCol={{ span: 12, offset: 5 }}
                >
                    <Button type="primary" htmlType="submit" loading={this.state.loading}>
                        登录
                    </Button>
                </FormItem>
            </Form>
        );
    }
};

const LoginWrap = Form.create()(Login);

export default connect(state => ({
    loginStatus: state,
}), {
    login,
})(LoginWrap);