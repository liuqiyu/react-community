import React, { Component } from 'react';
import { Modal } from 'antd';

class Mmodal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    };

    /**
     * 弹窗控制
     */
    modalControl = () => {
        if (this.state.visible) {
            this.setState({
                visible: false,
            });
        } else {
            this.setState({
                visible: true,
            });
        }
    };

    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    render() {
        const { visible } = this.state;
        return (
            <div>
                <Modal title={this.props.children.props.modalTitle}
                       visible={visible}
                       onOk={this.handleOk}
                       onCancel={this.modalControl}
                       footer={null}
                >
                    <div>
                        {this.props.children}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Mmodal;