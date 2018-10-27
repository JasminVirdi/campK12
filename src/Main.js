import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import color from '../node_modules/@material-ui/core/colors/amber';
import ChatBot from 'react-simple-chatbot';
import PaperSheet from './components/ChatBotComponent'
import { Paper } from '../node_modules/@material-ui/core';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';


function TabContainer(props) {
    return (
        <Typography component="div" style={localStyles.chatScreen}>
            {props.children}
        </Typography>
    );
}


TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '// type your code...',
            value: 0,
            tabCode: [],
            tabCounter: 0
        }
        // this.onChange = this.onChange.bind(this)
    }

    editorDidMount(editor, monaco) {
        console.log('editor: ', editor);
        // console.log('editorDidMount', editor.setModel());
        editor.focus();
    }
    onChange = (newValue, e) => {
        // console.log('onChange', newValue); // eslint-disable-line no-console
        this.setState({ code: newValue })
        // this.setState({ val: newValue })
    }

    handleChange = (event, value) => {
        console.log('value: ', value);
        console.log('event: ', event);
        this.setState({ value });
    };
    editorWillMount(monaco) {

        // console.log('monaco: ', monaco.editor.createModel("tyrp", 'javascript', new monaco.Uri().with({ path: "abcsds" })));

        // console.log('55555555', monaco.editor)

        // console.log("monaco 1*******", monaco.editor.getModel('abcs'), monaco)
        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            schemas: [{
                uri: "http://myserver/foo-schema.json",
                schema: {
                    type: "object",
                    properties: {
                        p1: {
                            enum: ["v1", "v2"]
                        },
                        p2: {
                            $ref: "http://myserver/bar-schema.json"
                        }
                    }
                }
            }]
        });
    }
    addTab = () => {
        console.log('iiiiiii))))))', this.state.tabCode)
        var joined = this.state.tabCode.concat(this.state.code);
        console.log('********', joined.length)
        this.setState({ tabCode: joined })
        console.log('iiiiiii', this.state.tabCode)

        console.log('::::', this.state.value)
        this.setState({ code: "" })
        // this.setState(prevState => ({
        //     tabCode: [...prevState.tabCode, this.state.val]
        // }))

        // var newStateArray = this.state.tabCode.slice();
        // newStateArray.push(this.state.val);
        // this.setState({ tabCode: newStateArray });
        // // this.setState({ tabCode: [...this.state.tabCode, val] })

        // console.log("$$$$$$$", this.state.tabCode)
        // this.setState({ val: '' })


        /*
         {this.state.tabCode.map((t, i) => {
                                return (<TabContainer>{this.state.tabCode[i]}</TabContainer>)
                            })}


                            {this.state.tabCode.map((t, i) => {
                                return (<TabContainer>
                                    {this.state.tabCode[i]}
                                </TabContainer>)
                            })}
        */

    }

    render() {
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true
        };
        return (
            <div>
                <AppBar position="static" color="#ffffff" style={localStyles.appBar}>
                    <Toolbar style={localStyles.aiPlayground}>
                        AI playground
                    </Toolbar>
                </AppBar>
                <div style={{ display: "flex" }}>
                    <div style={{ display: "inline-block", justifyContent: "center" }}>
                        <Paper style={localStyles.chatScreen}>
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                fullWidth >
                                {this.state.tabCode.map(tab => {
                                    return (< Tab label="Item One" style={{ color: "#ffffff", borderLeft: "#ffffff", borderRight: "#ffffff", borderTop: "#ffffff" }} />)
                                })}
                                <Button style={localStyles.addBtn} onClick={this.addTab} />
                            </Tabs>
                            {this.state.value === 0 && <TabContainer>Item One</TabContainer>}
                            {this.state.value === 1 && <TabContainer>Item Two</TabContainer>}
                            {this.state.value === 2 && <TabContainer>Item Three</TabContainer>}

                        </Paper>
                        <TabContainer>
                            <MonacoEditor
                                width="800"
                                height="600"
                                language="javascript"
                                theme="vs-dark"
                                value={code}
                                style={localStyles.editorWindow}
                                options={options}
                                onChange={this.onChange}
                                editorDidMount={this.editorDidMount}
                                editorWillMount={this.editorWillMount}
                            />
                        </TabContainer>
                    </div>
                    <PaperSheet />
                </div>
            </div>
        );
    }
}

const localStyles = {
    editorWindow: {
        width: '254px',
        height: '366px',
        backgroundColor: '#161616'
    },
    appBar: {
        backgroundColor: " #171717"
    },
    chatScreen: {
        width: "100%",
        backgroundColor: "#171717",
        display: "inline-block",
        justifyContent: "center"
    },
    aiPlayground: {
        width: "62.5px",
        height: "10.5px",
        opacity: "0.8",
        fontFamily: "AmericanTypewriter",
        fontSize: "9px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#ffffff"
    },
    applyChangesBtn: {
        width: "66px",
        height: "12px",
        borderRadius: "2px",
        backgroundColor: " #66d68d",
        marginRight: "0px"
    },
    addBtn: {
        width: "4px",
        height: "4px",
        objectFit: "contain",
        backgroundColor: " #c6c6c6",
    }
}

export default Main