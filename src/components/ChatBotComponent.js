import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { render } from 'react-dom'

const textSize = 12;
const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

class PaperSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            msg: '',
            chat: [],
            chatTemp: [],
            width: '',
            height: ''
        }
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
            msg: event.target.value,
        });
    }
    calculateSize = (obj) => {
        const text = obj.text
        if (text.length > 25) {
            obj.width = (text.length) * (textSize - 5)
        } else {
            obj.width = (text.length) * (textSize) + 10
        }
        console.log(obj.text, obj.width, text.length, textSize)
    }
    update = () => {
        let newChat = this.state.chatTemp.concat(this.state.chat.shift());
        this.setState({ chatTemp: newChat })
        this.state.chatTemp.forEach(message => {
            message.y -= (message.height + 5)
        })
        //if(chatTemp[0].y < -100){
        //	chatTemp.shift()
        //}
        setTimeout(render, this.state.chatTemp[this.state.chatTemp.length - 1].pause)
    }

    createSampleData = () => {
        let obj = Object.assign({}, this.state.msg)
        // s
        // obj.pause = Math.random() * 2000 + 500
        obj.text = this.state.msg
        this.calculateSize(obj)
        if (Math.floor(Math.random() * 10) % 2) {
            obj.side = 0
            obj.x = obj.x + (localStyles.chatWindow.width - obj.width) - 20
        }
        let joined = this.state.chat.concat(obj);
        this.setState({ chat: joined })
        console.log('^^^^^^^^^', this.state.chat)
    }

    render() {
        return (<div>
            <Paper style={localStyles.chatScreen}>
                <div style={{ display: "inline-block", justifyContent: "center" }}>
                    <Paper style={localStyles.chatWindow}>

                    </Paper>
                    <TextField
                        id="outlined-full-width"
                        placeholder="Type something here..."
                        fullWidth
                        style={localStyles.messageDialog}
                        margin="normal"
                        value={this.state.multiline}
                        variant="outlined"
                        onChange={this.handleChange('multiline')}
                    />
                </div>
            </Paper>
        </div>)
    }
}

const localStyles = {
    chatScreen: {
        width: "696.5px",
        height: "408px",
        backgroundColor: "#171717",
        display: "inline-block",
        justifyContent: "center"
    },
    chatWindow: {
        width: "464px",
        height: "196px",
        borderRadius: "2px",
        marginLeft: "30px",
        marginBottom: "130px",
        marginTop: "40px",
        marginRight: "35px",
        boxShadow: "0 2px 4px 4px rgba(0, 0, 0, 0.08)",
        backgroundColor: "#1f1f1f",
        margin: "auto",
    },
    messageDialog: {
        width: "462px",
        height: "36px",
        borderRadius: "2px",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.08)",
        backgroundColor: "#1f1f1f",
        color: "#ffffff"
    }

}

export default PaperSheet;