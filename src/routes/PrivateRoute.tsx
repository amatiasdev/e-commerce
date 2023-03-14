import { Navigate } from "react-router-dom";

function PrivateRoute({ children}: any) {
    const isLogged = window.localStorage.getItem('token');
    if(!isLogged) return <Navigate to="/"/>
    return children;
}

export default PrivateRoute;

