import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useAuth } from "../providers/Auth";
const Route = ({ isPrivate = false, component: Component, ...rest }) => {
    const { auth } = useAuth();

    return (
        <ReactDOMRoute
            {...rest}
            render={() => {
                return isPrivate === !!auth.token ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: isPrivate ? "/login" : "/dashboard",
                        }}
                    />
                );
            }}
        />
    );
};

export default Route;
