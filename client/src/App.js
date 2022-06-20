import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/Landing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LandingPage></LandingPage>
      </div>
    </BrowserRouter>
  );
}

export default App;
