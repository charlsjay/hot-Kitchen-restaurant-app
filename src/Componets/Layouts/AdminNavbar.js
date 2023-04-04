import { Avatar, Button } from "@chakra-ui/react";
import {useGlobal} from "../../GlobalContext";
import axios from "axios";
import { api } from "../../config";
import { useNavigate } from "react-router-dom";

function AdminNavbar(){
   const {user,setUser} = useGlobal();
   const  navigate =useNavigate();
    
    const handlLogout = async() =>{
        
        await axios.post(`${api}/auth/logout` , {} , {withCredentials:true});
        setUser(null);
        navigate("/");
    };
 
 
    return(

      <div className="adimin_navbar">
          
          <h2>Admin Dashboard</h2>

          <div className="admin_navbar_button">
         {user &&(
            <div className="admin_navbar_avatar">
                  <Avatar  size="sm" name={user.email} />
                  {user.email}
            </div>
         )}

            <Button colorScheme="red" variant="outline" onClick={handlLogout} >
                  Logout  
            </Button>
          </div>

      </div>
  );


}
   
export default AdminNavbar;