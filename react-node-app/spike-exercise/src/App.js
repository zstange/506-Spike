import React from "react";
import './App.css';
import Login from './Login';
import RenterHome from './RenterHome';
import CreateAccount from './CreateAccount';
import RenterApplication from './RenterApplication'
import RenterPayment from './RenterPayment'
import RenterRequests from './RenterRequests'
import AdminRequests from './AdminRequests'
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';



function App() {
  const [data, setData] = React.useState(null);
  let history = useHistory();

  // React.useEffect(() => {
  //   fetch("/")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <Router>
    <div className="App">
      <header className="App-header">
          <Switch>
          <Route 
            exact path = "/" 
            render={() => (
              <Login  history={history}/>
            )}
          />
          <Route  exact path = "/Login" 
          render={() => (
            <Login history={history}/>
          )}
          />
          <Route exact path = "/RenterHome" 
           render={() => (
            <RenterHome  />
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

export default App;