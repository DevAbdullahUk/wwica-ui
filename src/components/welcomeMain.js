import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'

import '../styles/welcomeMain.css';
import { welcomeBoxText } from '../assets/texts'


class WelcomeMain extends Component {


    constructor(props) {
        super(props);

        this.welcomeBox = this.welcomeBox.bind(this);
        this.btClick = this.btClick.bind(this);
        this.state = {
            welcomeText: '',
        }
    }

    componentDidMount() {
        this.setState({ welcomeText: welcomeBoxText[0] })
    }

    btClick(textIndex) {
        this.setState({ welcomeText: welcomeBoxText[textIndex] })
    }

    welcomeBox() {
        const { welcomeText } = this.state

        return (
            <div className="welcome-box">
                <div className="welcome-box-text">{welcomeText}</div>
                <div className="welcome-box-bt">

                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button variant="success" onClick={() => this.btClick(0)}>1</Button>
                            <Button variant="success" onClick={() => this.btClick(1)}>2</Button>
                        </ButtonGroup>

                    </ButtonToolbar>

                </div>
            </div>
        )
    }

    render() {

        return (
            <this.welcomeBox></this.welcomeBox>
        )
    }
}


export default WelcomeMain;