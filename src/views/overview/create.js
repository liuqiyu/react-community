import React, { Component } from 'react';
import { Input, Select, Button } from 'antd';
import './create.less';
const Option = Select.Option;
class Create extends Component {
    state = {
        classOptions: [],
        tableData: [],
    };

    render() {
        return (
            <div className="create_modal">
                <div className="wrap m-auto body">
                    <header>
                        <h2>创建新的主题</h2>
                    </header>
                    <section className="article">
                        <div className="header">
                            <Input placeholder="请输入标题" style={{ width: 400 }} />
                            <Select defaultValue="lucy" style={{ width: 120, marginLeft: 20 }}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                            </Select>
                            <Select defaultValue="lucy" style={{ width: 120, marginLeft: 20  }}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                            </Select>
                        </div>
                        <div className="centent">
                            <div className="areatxt"></div>
                            <footer>
                                <Button type="dashed" icon="plus">发表文章</Button>
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