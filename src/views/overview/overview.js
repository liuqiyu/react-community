import React, { Component } from 'react';
import { Select, Button, Table, Divider, Tag } from 'antd';
import Create from './create';
import overview from './../../api/overview'
import './overview.less';

const { Option } = Select;

const columns = [{
    title: '主题',
    dataIndex: 'art_name',
    key: 'art_name',
}, {
    title: '分类',
    dataIndex: 'class_name',
    key: 'class_name',
}, {
    title: '标签',
    dataIndex: 'tag_name',
    key: 'tag_name',
}, {
    title: '创建日期',
    dataIndex: 'create_date',
    key: 'create_date',
}, {
    title: '更新日期',
    dataIndex: 'update_date',
    key: 'update_date',
}];

class Overview extends Component {
    state = {
        classOptions: [],
        tableData: [],
    };

    handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    componentDidMount() {
        this.getClass();
        this.getArtList();
    }

    getClass = () => {
        overview.getClass().then((res) => {
            if (res.data.code === 200) {
                this.setState({
                    classOptions: res.data.data,
                });
            }
        });
    };

    getArtList = () => {
        overview.getArtList().then((res) => {
            if (res.data.code === 200) {
                if (res.data.data.length > 0) {
                    const tableData = [];
                    res.data.data.forEach((value) => {
                        tableData.push({
                            key: value.art_id,
                            art_name: value.art_name,
                            class_id: value.class_id,
                            class_name: value.class_name,
                            tag_id: value.tag_id,
                            tag_name: value.tag_name,
                            update_date: value.update_date,
                            create_date: value.create_date,
                        });
                        this.setState({
                            tableData: tableData,
                        });
                    });
                }
            }
        });
    };

    render() {
        const classOptions = this.state.classOptions.map((value, index) => {
            return <Option key={value.id}>{value.name}</Option>;
        });
        return (
            <div className="overvierw">
                <header className="flex-row o-header">
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="选择分类"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                    >
                        { classOptions }
                    </Select>
                    <Button type="dashed" icon="plus">发表文章</Button>
                </header>
                <section className="o-section">
                    <Table columns={columns} dataSource={this.state.tableData} />
                </section>
                <Create></Create>
            </div>
        );
    }
}

export default Overview;
