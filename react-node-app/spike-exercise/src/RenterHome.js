import React from "react";
import "./App.css";
import SideBar from "./SideBar";
import PropertiesArea from "./PropertiesArea";
import MyUserAccount from "./MyUserAccount"
import { Tab, Tabs } from "react-bootstrap";
import RenterApplication from "./RenterApplication";
import RenterPayment from "./RenterPayment";
import RenterRequests from "./RenterRequests";
import {Route, withRouter} from 'react-router-dom'

class RenterHome extends React.Component {

  getUserID() {
    const search = this.props.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    return params.get('id'); 
  }

  render() {
    return (
      <>
        <div className="sidebar">
          <SideBar admin={false}/>
        </div>
        <div className="tabArea">
          <Tabs
              defaultActiveKey = "account"
              style={{
                position: "fixed",
                zIndex: 1,
                width: "100%",
                backgroundColor: "white",
              }} 
          >
            <Tab
              eventKey="account" title="My Account"
            >
              <div>
                  <MyUserAccount userID={this.getUserID()}/>
              </div>
            </Tab>
            <Tab
              eventKey="search" title="Search"
            >
              <div>
                  <PropertiesArea userID={this.getUserID()}/>
              </div>
            </Tab>

            <Tab
              eventKey="apply" title="Apply Here!"
            >
              <div>
                  <RenterApplication userID={this.getUserID()}/>
              </div>
            </Tab>
            <Tab
              eventKey="payments" title="Make Payment"
            >
              <div>
                  <RenterPayment userID={this.getUserID()}/>
              </div>
            </Tab>
            <Tab
              eventKey="requests" title="Maintenance Request"
            >
              <div>
                  <RenterRequests userID={this.getUserID()}/>
              </div>
            </Tab>
              
          </Tabs>
        </div>
        
        
      </>
    );
  }
}

export default withRouter(RenterHome);
