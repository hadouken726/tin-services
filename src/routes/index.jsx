import { Switch, Route } from "react-router-dom";
import {PrivateRoute} from "./route"
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import CompleteRegister from "../pages/CompleteRegister";
import NotFound from "../pages/NotFound";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={AboutUs}/>
            <Route exact path="/login" component={Login}/>
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/completeregister" component={CompleteRegister}/>
            <Route component={NotFound}/>
        </Switch>
    );
};

export default Routes;
