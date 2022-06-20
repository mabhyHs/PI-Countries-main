<<<<<<< Updated upstream
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
    </div>
=======
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/Landing";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <Route path='/countries' component={Home}></Route>
        </Switch>
      </div>
    </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;
