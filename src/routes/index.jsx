import { Switch } from "react-router-dom";
import Route from "./route";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import InitialRegister from "../pages/InitialRegister";
import CompleteRegister from "../pages/CompleteRegister";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={InitialRegister} />
      <Route exact path="/completeregister" component={CompleteRegister} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
