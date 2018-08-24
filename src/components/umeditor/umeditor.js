import React, { Component } from 'react';
import Editor from 'react-umeditor';
import './umeditor.less';

class Umeditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: ""
        }
    }

    handleChange(content){
        this.setState({
            content: content
        });
    }

    getIcons(){
        const icons = [
            "source | undo redo | bold italic underline strikethrough fontborder emphasis | ",
            "paragraph fontfamily fontsize | superscript subscript | ",
            "forecolor backcolor | removeformat | insertorderedlist insertunorderedlist | selectall | ",
            "cleardoc  | indent outdent | justifyleft justifycenter justifyright | touppercase tolowercase | ",
            "horizontal date time  | image emotion spechars | inserttable"
        ];
        return icons;
    }

    getPlugins(){
        return {
            "image": {
                "uploader": {
                    "name":"file",
                    "url": "/api/upload"
                },
            },
        };
    }

    render(){
        const icons = this.getIcons();
        const plugins = this.getPlugins();
        return (<Editor ref="editor"
                        className="editor-wrap"
                        icons={icons}
                        value={this.state.content} defaultValue="<p>React Umeditor</p>"
                        onChange={this.handleChange.bind(this)}
                        plugins={plugins} />)
    }
}

export default Umeditor;