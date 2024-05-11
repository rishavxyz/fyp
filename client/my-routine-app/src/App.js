import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RoutineForm from "./pages/RoutineForm";
import Routine_Display from "./pages/Routine_Display";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import Navbar from "./components/Navbar";
import Devs from "./pages/Devs";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/instructions" component={Instructions} />
          <Route path="/form" component={RoutineForm} />
          <Route path="/display" component={Routine_Display} />
          <Route path="/developers" component={Devs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
