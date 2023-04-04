import { Link } from "react-router-dom";
import Logo from "../Componets/Logo";
import { Button} from '@chakra-ui/react'
import "./Home.css";
import MainMenu from "../Componets/MainMenu";
import Cart from "../Componets/Cart";
import { useState } from "react";
import { useGlobal } from "../GlobalContext";


function Home () {
    
   const [cartItems,setCartItems] = useState([]);
   const {user} = useGlobal();
   
   return (
       <div className="home-container" >
         
         
          <div className="home-nav">
             <Logo />
             <div>
               {user ? 
               
               (

               <Link to="/admin"> 
               <Button colorScheme="telegram" variant="ghost" >Go to Dashboard</Button>
               </Link>

               ):(

             <>    
                 <Link to="/Login"> 
                    <Button colorScheme="blue" variant="outline">Login</Button>
                 </Link>
                
                <Link to="/register"> 
                    <Button colorScheme="Yellow" variant="outline">Register</Button>
                </Link>

              </>

               )}
                
             </div>
          </div>
          
          
          <div className="home-inner-container">
              <MainMenu  cartItems={cartItems}  setCartItems={setCartItems}/>
              <Cart      cartItems={cartItems}  setCartItems={setCartItems}/>
          
          </div>
        
        </div>
    );
}

export default Home 