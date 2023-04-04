import RequirAuth from "../Common/RequirAuth";
import "./AdminLayout.css";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";


function AdminLayout ({ children  }) {

    return(
       
       <RequirAuth>  

     <div className="layout_container">
         <AdminNavbar />
           <div className="inner_layout">
           <Sidebar />
           { children }
           

           </div>
           
        </div>
      
       </RequirAuth>
    );

}

export default AdminLayout