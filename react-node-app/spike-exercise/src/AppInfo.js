import React from "react";
import "./App.css";
import {Container, Row} from 'react-bootstrap'
import Axios from 'axios';
import Button from 'react-bootstrap/Button'

class AppInfo extends React.Component {



    render() {
        return (
        <>
            <div>
                {this.props.data}
                <Button>Accept</Button>
            </div>
            
            
        </>
        );
    }
}

export default AppInfo;