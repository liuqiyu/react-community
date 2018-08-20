import React, { Component } from 'react';
import { Form, Button, Input, message } from "antd";
import user from '../../api/user';
const FormItem = Form.Item;

class Register extends Component {
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
                {
                    label: '确认密码',
                    id: 'password1',
                    dom: 'input',
                    type: 'password',
                    rules: [{ required: true, message: '请确认密码!' }],
                }
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
                user.register(form).then((res) => {
                    if (res.data.code === 200) {
                        message.info(res.data.message);
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
                        注册
                    </Button>
                </FormItem>
            </Form>
        );
    }
};

const RegisterWrap = Form.create()(Register);

export default RegisterWrap;