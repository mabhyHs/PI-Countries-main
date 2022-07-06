import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landing/Landing";
import Home from "./components/home/Home";
import CreateActivity from "./components/createActivity/CreateActivity";
import Details from "./components/countryDetails/Details";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route
            exact
            path="/countries/:id"
            render={({ match }) => <Details country={match.params.id} />}
          ></Route>
          <Route exact path="/countries" component={Home}></Route>
          <Route exact path="/activity" component={CreateActivity}></Route>
          <Route path="*" exact={true} component={NotFound}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
