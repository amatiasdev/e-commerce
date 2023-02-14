import { Navigate } from "react-router-dom";

function PrivateRoute({isLogged, children}: any) {

    if(!isLogged) return <Navigate to="/"/>
    return children;
}

export default PrivateRoute;

