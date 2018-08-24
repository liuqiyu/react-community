import React, { Component } from 'react';
import { Input, Select, Button, Icon, Alert, message } from 'antd';
import Umeditor from './../../components/umeditor/umeditor';
import { hasClass } from "../../common/utils";
import overview from './../../api/overview';
import './create.less';
const Option = Select.Option;
class Create extends Component {
    state = {
        classOptions: [],
        tableData: [],
        art_name: '',
        class_id: '',
        tag_id: '',
        createLoading: false,
    };

    closeCreate = () => {
        const createModal = document.querySelector('.create_modal');
        if (hasClass(createModal, '_height_400')) {
            createModal.classList.remove('_height_400');
        }
    };

    onChangeTitle = (event) => {
        this.setState({
            art_name: event.target.value,
        });
    };

    onChangeClass = (value) => {
        this.setState({
            class_id: value,
        });
    };

    onChangeTag = (value) => {
        this.setState({
            tag_id: value,
        });
    };

    focusArtName = () => {
        if (hasClass(this.refs.artNameAlert, 'show')) {
            this.refs.artNameAlert.classList.remove('show');
        }
    };

    focusClass = () => {
        if (hasClass(this.refs.classAlert, 'show')) {
            this.refs.classAlert.classList.remove('show');
        }
    };

    focusTag = () => {
        if (hasClass(this.refs.tagAlert, 'show')) {
            this.refs.tagAlert.classList.remove('show');
        }
    };

    submit = () => {
        const form = {
            art_name: this.state.art_name,
            class_id: this.state.class_id,
            tag_id: this.state.tag_id,
            art_text: this.refs.Umeditor.state.content,
        };
        let num = 0;
        if (!form.art_name) {
            if (!hasClass(this.refs.artNameAlert, 'show')) {
                this.refs.artNameAlert.classList.add('show');
            }
            num += 1;
        }
        if (!form.class_id) {
            if (!hasClass(this.refs.classAlert, 'show')) {
                this.refs.classAlert.classList.add('show');
            }
            num += 1;
        }
        if (!form.tag_id) {
            if (!hasClass(this.refs.tagAlert, 'show')) {
                this.refs.tagAlert.classList.add('show');
            }
            num += 1;
        }
        if (!form.art_text) {
            if (!hasClass(this.refs.contentAlert, 'show')) {
                this.refs.contentAlert.classList.add('show');
            }
            num += 1;
        }
        if (num > 0 ) {
            return false;
        }
        this.setState({
            createLoading: true,
        });
        overview.createArticle(form).then((res) => {
            if (res.data.code === 200) {
                const createModal = document.querySelector('.create_modal');
                createModal.classList.remove('_height_400');
                message.success('创建帖子成功！');
                this.setState({
                    createLoading: false,
                });
            }
        });
    };

    onClose = (class1) => {
        console.log(class1);
    };

    render() {
        return (
            <div className="create_modal">
                <div className="wrap m-auto body">
                    <header>
                        <h2>创建新的主题</h2>
                        <span className="toggler" onClick={this.closeCreate}><Icon type="down" /></span>
                    </header>
                    <section className="article">
                        <div className="header">
                            <Input placeholder="请输入标题" style={{ width: 400 }}
                                   onFocus={this.focusArtName}
                                   onChange={this.onChangeTitle} />
                            <Select style={{ width: 120, marginLeft: 20 }}
                                    onFocus={this.focusClass}
                                    onChange={this.onChangeClass} >
                                <Option value="1">Jack</Option>
                                <Option value="2">Lucy</Option>
                            </Select>
                            <Select style={{ width: 120, marginLeft: 20  }}
                                    onFocus={this.focusTag}
                                    onChange={this.onChangeTag} >
                                <Option value="1">Jack</Option>
                                <Option value="2">Lucy</Option>
                            </Select>
                        </div>
                        <div className="centent">
                            <div className="areatxt">
                                <Umeditor ref="Umeditor"></Umeditor>
                            </div>
                            <footer>
                                <Button type="primary" icon="plus" onClick={this.submit} loading={this.state.createLoading}>发表文章</Button>
                            </footer>
                        </div>
                        <div ref="artNameAlert" className="art-name-alert">
                            <Alert closable message="请输入标题" type="error" afterClose={this.onClose('artNameAlert')}
                                   style={{color: 'red', width: 200}}/>
                        </div>
                        <div ref="classAlert" className="class-alert">
                            <Alert closable message="请选择类型" type="error" afterClose={this.onClose('classAlert')}
                                   style={{color: 'red', width: 150}} />
                        </div>
                        <div ref="tagAlert" className="tag-alert">
                            <Alert closable message="请选择类型" type="error" afterClose={this.onClose('tagAlert')}
                                   style={{color: 'red', width: 150}} />
                        </div>
                        <div ref="contentAlert" className="content-alert">
                            <Alert closable message="帖子不能为空" type="error" afterClose={this.onClose('contentAlert')}
                                   style={{color: 'red', width: 200}} />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Create;