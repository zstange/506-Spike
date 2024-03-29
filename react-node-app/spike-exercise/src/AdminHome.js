import React from "react";
import "./App.css";
import SideBar from "./SideBar";
import MyUserAccount from "./MyUserAccount"
import { Tab, Tabs } from "react-bootstrap";
import AdminRequests from "./AdminRequests";
import AdminPayment from "./AdminPayment";
import {Route, withRouter} from 'react-router-dom'
import AdminRentalApplication from "./AdminRentalApplication";

class AdminHome extends React.Component {

  getUserID() {
    const search = this.props.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    return params.get('id'); 
  }

  render() {
    return (
      <>
        <div className="sidebar">
          <SideBar admin={true}/>
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
              eventKey="applications" title="View Applications"
            >
              <div>
                  <AdminRentalApplication userID={this.getUserID()}/>
              </div>
            </Tab>
            <Tab
              eventKey="requests" title="Maintenance Requests"
            >
              <div>
                  <AdminRequests/>
              </div>
            </Tab>
            <Tab
              eventKey="payments" title="Payments"
            >
              <div>
                  <AdminPayment/>
              </div>
            </Tab>
             <Tab
              eventKey="payments" title="Handle Payments"
              >
              <div>
                  <AdminPayment/>
              </div>
            </Tab>
          </Tabs>
        </div>
        
        
      </>
    );
  }
}

export default withRouter(AdminHome);