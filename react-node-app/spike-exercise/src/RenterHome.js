import React from "react";
import "./App.css";
import SideBar from "./SideBar";
import PropertiesArea from "./PropertiesArea";
import MyUserAccount from "./MyUserAccount"
import { Tab, Tabs } from "react-bootstrap";
import RenterApplication from "./RenterApplication";

class RenterHome extends React.Component {

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
                  <MyUserAccount/>
              </div>
            </Tab>
            <Tab
              eventKey="search" title="Search"
            >
              <div>
                  <PropertiesArea/>
              </div>
            </Tab>

            <Tab
              eventKey="apply" title="Apply Here!"
            >
              <div>
                  <RenterApplication/>
              </div>
            </Tab>
              
          </Tabs>
        </div>
        
        
      </>
    );
  }
}

export default RenterHome;
