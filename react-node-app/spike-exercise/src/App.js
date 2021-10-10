import React from "react";
import './App.css';
import Login from './Login';
import RenterHome from './RenterHome';
import CreateAccount from './CreateAccount';
import RenterApplication from './RenterApplication'
import RenterPayment from './RenterPayment'
import RenterRequests from './RenterRequests'
import AdminRequests from './AdminRequests'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>
    <div className="App">
      <header className="App-header">
          <Switch>
          <Route 
            exact path = "/" 
            render={() => (
              <Login data={data} />
            )}
          />
          <Route  exact path = "/Login" 
          render={() => (
            <Login data={data} />
          )}
          />
          <Route exact path = "/RenterHome" 
           render={() => (
            <RenterHome data={data} />
          )}
          />
          <Route exact path = "/CreateAccount" 
          render={() => (
            <CreateAccount data={data} />
          )}
          />
          <Route exact path = "/RenterApplication" 
          render={() => (
            <RenterApplication data={data} />
          )}
          />
          <Route exact path = "/RenterPayment" 
          render={() => (
            <RenterPayment data={data} />
          )}
          />
          <Route path = "/RenterRequests" 
          render={() => (
            <RenterRequests data={data} />
          )}
          />
          <Route path = "/AdminRequests" 
          render={() => (
            <AdminRequests data={data} />
          )}
          />
        </Switch> 
      </header>
    </div>
    </Router>
  );
}

export default App;