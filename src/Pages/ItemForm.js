import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import FormInput from "../Componets/Common/FormInput";
import SubmitButton from "../Componets/Common/SubmitButton";
import { api } from "../config";
import "./ItemForm.css"
import { useNavigate, useParams } from "react-router-dom";

function ItemForm(){

     const [name,setName] = useState("");
     const [price,setPrice] = useState("");
     const [image,setImage] = useState("");
     const Navigate = useNavigate();
     const parms = useParams();
     

     useEffect(()=> {
           const feachItem = async() =>{
             
             const result = await axios.get(`${api}/item/${parms.id}`)
             const item =result.data; 
              
             setName(item.name)
             setPrice(item.price)
             setImage(item.image)
           }
       
          if(parms.id) {
                feachItem();
          }
            
     },[parms.id])
      
   const handlUplord = async(e) => {

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image",file);

    const result = await axios.post(`${api}/upload`, formData);
     setImage(result.data.path);

   }  
    

   const hanldSubmit = async () =>{
   
      try {

        if(parms.id){

          await axios.put(`${api}/item/edit/${parms.id}` ,
        {
           name,
           price,
           image,
        })

        toast.success("Item Update Successfully");
       
     
      } else{

        await axios.post(`${api}/item/add` ,
        {
           name,
           price,
           image,
        })

        toast.success("Item Added Successfully");
        
        
      }
      
      Navigate("/admin/items");
        

      } catch (error) {
          console.log(error)
          toast.error("Something wrong with uplord");
      }
   }
    
    return(
         
        <div className="item_form_container">
             <h2 className="subtitle">{parms.id ? "Edit" : "Add"} Item</h2>
             <form>
                <FormInput lable="Name" value={name} onChange={(e) => (setName(e.target.value))}/>
                <FormInput lable="Price" type="number" value={price} onChange={(e) => (setPrice(e.target.value))}/>
                <FormInput lable="Image" type="file"  onChange={handlUplord}/>
                  {image && (
                    <img src={`${api}${image}`} alt="" width="100px" height="100px"  />
                  )}

                  <SubmitButton  text={parms.id? "Update" : "Add"}  className="Submit_button" onClick={hanldSubmit}/>
             </form>
        </div>
    );
}

export default ItemForm;