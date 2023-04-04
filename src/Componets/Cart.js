import "./Cart.css";
import CartItem from "./CartItem";
import axios from "axios";
import SubmitButton from "./Common/SubmitButton";
import { api } from "../config";
import {toast}  from 'react-hot-toast'


function Cart ({cartItems,setCartItems}){
   
   let total = 0;
      cartItems.forEach((item) =>{
      total += item.price * item.qty;
   })

    const handleAdd = (ItemId) =>{
       const newCartItems = cartItems.map((item)=>{
           if(ItemId === item.id){
            return{
               ...item,
               qty: item.qty + 1
            } 
          } 
              return item;
            
         })
   
         setCartItems(newCartItems);
      }
      

      const handleRemove = (ItemId) =>{

         const newCartItems = cartItems.map((item)=>{
             if(ItemId === item.id && item.qty > 1){
              return{
                 ...item,
                 qty: item.qty - 1
              } 
            } 
                return item;
              
           })
     
           setCartItems(newCartItems);
        }
   

      const handleDelete = (ItemId) =>{
         const newCartItems = cartItems.filter((item)=>{
            if(ItemId === item.id){
              return false;
           } 
               return true;
             
          })
    
          setCartItems(newCartItems);
       }


      
      
       const placeOrder = async() =>{
           
         try {
            
           await axios.post(`${api}/item/place-order`,{items:cartItems});
           toast.success("Order Placed Successfully")
           setCartItems([])

         } catch (error) {
             console.log(error)
             toast.error("Sameething went wrong")
         }
   

           

         
      }


   
    return(
     <div className="cart_container box_shadow"> 
        
        <h2>Your Oder</h2>
        
        <div className="cart_items">

            {cartItems.map((item) => ( 
            
              <CartItem key={item.id} item={item} 
              
              handleAdd = {() => handleAdd (item.id)}
              handleRemove ={() => handleRemove(item.id)}
              handleDelete ={() => handleDelete(item.id)}
              
              />
            
            ))}
 
         </div>


          {cartItems.length > 0 && (
            <>
            <div className="total">Total: {total}</div>
            <SubmitButton  text="Place Oder" className="place_oder_button" onClick={placeOrder}  />
            
           </>

          )} 
           
     </div>

    );
}

export default Cart;