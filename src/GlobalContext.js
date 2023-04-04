import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Loading from "./Componets/Common/Loading";
import { api } from "./config";

const GlobalContext = createContext();

function GlobalProvider ({children}) {
     const [user , setUser] = useState(null);
     const [lording,setLording] =useState(true)

    
    useEffect(() => {

        const feachUser = async () => {

              try {
                 const result = await axios.get(`${api}/auth/me` ,
                  {withCredentials:true,})    
                  
                  setUser(result.data)
              } catch (error) {
                     
              }
              setLording(false);
        }

        feachUser();

    },[])
     return(
 
               <GlobalContext.Provider value={{user:user ,setUser:setUser}}>
                      

                      {lording ? <div>
                        <Loading height="100vh" />
                      </div> :
                      <div>
                          {children}
                     </div>}
                               

               </GlobalContext.Provider>
  
        );
}

export default GlobalProvider;

  export  function useGlobal (){
        return useContext(GlobalContext);
    }