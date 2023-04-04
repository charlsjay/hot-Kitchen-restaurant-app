import{IconButton} from "@chakra-ui/react";
import{AddIcon,CloseIcon,DeleteIcon} from "@chakra-ui/icons";
import { api } from "../config";


function CartItem({ item ,handleAdd ,handleRemove,handleDelete}){
    return(
        <div className="cart_item_container">
               
        < img src={`${api}${item.image}`}  alt=""  />

            <div className="cart_item_details">

              <h3 className="cart_item_title"> {item.name} </h3>
              <h5 className="cart_item_price"> {item.price} x {item.qty} </h5>

              <div className="add_delet_button">
              
              <IconButton 
                size="sm"
                colorScheme="blue"
                icon={<AddIcon  w={3} h={3} />}
                onClick={handleAdd}
             
             />

              <IconButton 
                size="sm"
                colorScheme="yellow"
                icon={<CloseIcon  w={3} h={3} />}
                onClick={handleRemove}
              />


             </div>
           
            </div>
            
              <IconButton  colorScheme="red" icon={<DeleteIcon />}  onClick={handleDelete}/>
        </div>
    );
}

export default CartItem;