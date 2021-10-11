import React from "react";
import './App.css';
import Login from './Login';
import RenterHome from './RenterHome';
import CreateAccount from './CreateAccount';
import RenterApplication from './RenterApplication'
import RenterPayment from './RenterPayment'
import RenterRequests from './RenterRequests'
import AdminRequests from './AdminRequests'
import AdminHome from './AdminHome'
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 0,
    };
  }
  // const [data, setData] = React.useState(null);
  

  // React.useEffect(() => {
  //   fetch("/")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  setID(id) {
    this.setState({ userID: id });
  }

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
            <Switch>
            <Route 
              exact path = "/" 
              render={() => (
                <Login setID={(id) => this.setID(id)}/>
              )}
            />
            <Route  exact path = "/Login" 
            render={() => (
              <Login setID={(id) => this.setID(id)}/>
            )}
            />
            <Route exact path = "/RenterHome" 
              render={() => (
              <RenterHome userID={this.state.userID} />
            )}
            />
            <Route exact path = "/AdminHome" 
              render={() => (
              <AdminHome userID={this.state.userID} />
            )}
            />
            <Route exact path = "/CreateAccount" 
            render={() => (
              <CreateAccount  />
            )}
            />
            <Route exact path = "/RenterApplication" 
            render={() => (
              <RenterApplication  />
            )}
            />
            <Route exact path = "/RenterPayment" 
            render={() => (
              <RenterPayment  />
            )}
            />
            <Route path = "/RenterRequests" 
            render={() => (
              <RenterRequests  />
            )}
            />
            <Route path = "/AdminRequests" 
            render={() => (
              <AdminRequests  />
            )}
            />
          </Switch> 
        </header>
      </div>
      </Router>
    );
  }
}

export default App;