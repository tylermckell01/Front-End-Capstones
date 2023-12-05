import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/app.scss";
import Header from "./components/navigation/Header";
import Routes from "./components/navigation/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Header}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
