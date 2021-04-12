import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
