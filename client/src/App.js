import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/Landing";
import Home from "./components/Home";
import CreateActivity from "./components/CreateActivity";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Route exact path="/" component={LandingPage}></Route>
          <Route
            exact path="/countries/:id"
            render={({ match }) => <Details country={match.params.id} />}
          ></Route>
          <Route exact path="/countries" component={Home}></Route>
          <Route exact path="/activity" component={CreateActivity}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
