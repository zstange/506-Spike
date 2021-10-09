import React from "react";
import './App.css';
import Login from './Login';
import RenterHome from './RenterHome';
import CreateAccount from './CreateAccount';
import RenterApplication from './RenterApplication'
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
            path = "/" 
            render={() => (
              <Login data={data} />
            )}
          />
          <Route path = "/Login" exact component={Login} data={data}/>
          <Route path = "/RenterHome" exact component={RenterHome}/>
          <Route path = "/CreateAccount" exact component={CreateAccount}/>
          <Route path = "/RenterApplication" exact component={RenterApplication}/>
        </Switch> 
      </header>
    </div>
    </Router>
  );
}

export default App;