import React from "react";
import "./App.css";
import {Container, Row} from 'react-bootstrap'
import Axios from 'axios';
import AppInfo from "./AppInfo";

class AdminRentalApplication extends React.Component {
    constructor(props){
        super(props);
        this.data = [];
    }


    getData() {
        Axios.post("http://localhost:3001/getAll",{
            }).then((response) => {
                if(response.data.err) {
                    alert(response.data.err);
                }
                else if (response.data.message) {
                    alert(response.data.message);
                } else {
                    this.data = response.data;  
                }
        });
    }


    render() {
        return (
        <>
            <div>
                <Container fluid style={{ width: 'calc(80vw - 10px)', height: 'calc(100vh - 10px)', marginTop: '40px', background: 'white', overflowY: 'scroll'}}>
                    <Row>
                        <AppInfo data={this.data}/>
                    </Row>
                </Container>
            </div>
            
            
        </>
        );
    }
}

export default AdminRentalApplication;