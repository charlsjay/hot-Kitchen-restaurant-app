import { Navigate } from "react-router-dom";
import { useGlobal } from "../../GlobalContext";

function RequirAuth ({ children }) {
   
   const {user} = useGlobal();
   
   if(!user){
    return <Navigate  to="/Login" />
   } 
   
   return(
        <div>
            {children}
        </div>
    );

}

export default RequirAuth; 