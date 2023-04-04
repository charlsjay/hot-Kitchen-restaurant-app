import axios from "axios";
import { useState} from "react";
import{ useNavigate } from "react-router-dom";
import toast from "react-hot-toast"
import FormInput from "../Componets/Common/FormInput";
import SubmitButton from "../Componets/Common/SubmitButton";
import { api } from "../config";
import "./Login.css";
import { useGlobal } from "../GlobalContext";



function Login () {
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate =useNavigate()
    const {user ,setUser} =useGlobal();
   
   
    const submitHandle = async () =>{

        try {
             
             
            const result = await axios.post(`${api}/auth/login`,
            {email:email,password:password},
            {withCredentials:true})

            setUser(result.data)

             toast.success("Login Successfull");
            setEmail("");
            setPassword("");
            navigate("/admin");
         } catch (error) {
            
              console.log(error);
              toast.error("Invalid Creadentals")
        }



}
   
   
   
return (
   <div className="center_div">
       
       <form className="Login_container">
             
             <h2>Login</h2>
             
             <FormInput  lable="Email Address" type="email" value={email}  
             onChange={(e) => setEmail(e.target.value)}/>
             <FormInput  lable="Password" type="Password" value={password}  
             onChange={(e) => setPassword(e.target.value) }/>
             
       
             <SubmitButton text="Submit"   onClick={submitHandle} />
       </form>
       
   </div>

    );
}

export default Login;