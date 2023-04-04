import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./MainMenu.css"
import { api } from "../config";
import MenuItem from "./MenuItem";
import {toast}  from 'react-hot-toast'

function MainMenu ({cartItems,setCartItems}){
    
  const [items,setItems] = useState([]);
  const mountRef = useRef(true);


    useEffect(() =>{
     
      
      if(mountRef.current){

        mountRef.current =false;


        const fetchItems = async() =>{
             
            const result = await axios.get(`${api}/item/all`);
            setItems(result.data);
            
              
           
            }
          fetchItems(); 


      }
       
  
    },[])

 
    
    const handlClick = (clickedItem) => {
     
       const itemFound = cartItems.find((item) => {
          
         if(item.id === clickedItem.id){
                   return true;
           }else{
                  return false;
           }
       })

        if(itemFound){
   
           toast.error("Item All Ready Added");
           return;
       
       }
      
      
      
      const newCartItmes = [...cartItems];
      const newItem = {  
            ...clickedItem,
            qty: 1  
        }

        newCartItmes.push(newItem);
        
        setCartItems(newCartItmes);
 
     
     
     
     
     
      

      
      
     
       
    
    };


    
    return(
     <div className="main_menu_container">  
           {items.map((item) => {
              
              return   <MenuItem  key={item.id} item={item} onClick={()=>{
                 handlClick(item);
              }}/>
                     
           })}
     </div>

    );
}

export default MainMenu