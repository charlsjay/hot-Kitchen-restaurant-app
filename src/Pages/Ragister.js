import axios from "axios";
import { useState} from "react";
import{ useNavigate } from "react-router-dom";
import toast from "react-hot-toast"
import FormInput from "../Componets/Common/FormInput";
import SubmitButton from "../Componets/Common/SubmitButton";
import { api } from "../config";
import "./Register.css";



function Register () {
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [conformPassword,setConformPassword] = useState("");

    const navigate =useNavigate()
   
   const submitHandle = async () =>{

        try {
             if(conformPassword !== password){
              
              toast.error("password don't match");
              return;
             }
                 
             await axios.post(`${api}/auth/register`,{email:email,password:password})

             toast.success("Registration Successfull");
             setEmail("");
             setPassword("");
             setConformPassword("");
             navigate("/Login");
         } catch (error) {
            
              console.log(error);
              toast.error("User all ready access")
        }



}
   
   
   
return (
   <div className="center_div">
       
       <form className="register_container">
             
             <h2>Register</h2>
             
             <FormInput  lable="Email Address" type="email" value={email}  
             onChange={(e) => setEmail(e.target.value)}/>
             <FormInput  lable="Password" type="Password" value={password}  
             onChange={(e) => setPassword(e.target.value) }/>
             <FormInput  lable="Conform Password" type="Password" value={conformPassword} 
              onChange={(e) => setConformPassword (e.target.value)}  />
       
             <SubmitButton text="Submit"   onClick={submitHandle} />
       </form>
   </div>

    );
}

export default Register;