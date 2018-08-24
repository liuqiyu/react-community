import React, { Component } from 'react';
import { Input, Select, Button, Icon } from 'antd';
import Umeditor from './../../components/umeditor/umeditor';
import { hasClass } from "../../common/utils";
import overview from './../../api/overview';
import './create.less';
const Option = Select.Option;
class Create extends Component {
    state = {
        classOptions: [],
        tableData: [],
        art_name: '测试',
        class_id: '',
        tag_id: '',
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

    submit = () => {
        const form = {
            art_name: this.state.art_name,
            class_id: this.state.class_id,
            tag_id: this.state.tag_id,
            art_text: this.refs.Umeditor.state.content,
        };
        console.log(form);
        overview.createArticle(form).then((res) => {
            console.log(res);
        });
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
                            <Input placeholder="请输入标题" style={{ width: 400 }} onChange={this.onChangeTitle} />
                            <Select style={{ width: 120, marginLeft: 20 }} onChange={this.onChangeClass} >
                                <Option value="1">Jack</Option>
                                <Option value="2">Lucy</Option>
                            </Select>
                            <Select style={{ width: 120, marginLeft: 20  }} onChange={this.onChangeTag} >
                                <Option value="1">Jack</Option>
                                <Option value="2">Lucy</Option>
                            </Select>
                        </div>
                        <div className="centent">
                            <div className="areatxt">
                                <Umeditor ref="Umeditor"></Umeditor>
                            </div>
                            <footer>
                                <Button type="dashed" icon="plus" onClick={this.submit}>发表文章</Button>
                                <Button type="dashed">取消</Button>
                            </footer>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Create;