import React from "react";
import "./App.css";
import SideBar from "./SideBar";
import PropertiesArea from "./PropertiesArea";
import MyUserAccount from "./MyUserAccount"
import { Tab, Tabs } from "react-bootstrap";

class RenterHome extends React.Component {

  render() {
    return (
      <>
        <SideBar />
        <Tabs
            defaultActiveKey = "search"
        >
           <Tab
            eventKey="search" title="Search"
           >
           <div style={{ marginLeft: "20vw" }}>
                <PropertiesArea/>
            </div>
           </Tab>
           <Tab
            eventKey="account" title="My Account"
           >
           <div style={{ marginLeft: "20vw" }}>
                <MyUserAccount/>
            </div>
           </Tab>
             
        </Tabs>
        
      </>
    );
  }
}

export default RenterHome;
