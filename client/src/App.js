import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/Landing"
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path='/countries' component={Home}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
