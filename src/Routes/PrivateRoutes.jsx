import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    //console.log(location);

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>
};

export default PrivateRoutes;