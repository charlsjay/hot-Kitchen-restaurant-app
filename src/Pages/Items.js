import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../config";
import "./Items.css";
import { Link } from "react-router-dom";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    
  } from '@chakra-ui/react'


  import { AddIcon } from "@chakra-ui/icons";


function Items() {
   
   const[items,setItems] =useState([]);
   
    useEffect(() => {
         
        const fetchItems = async () =>{

            const result = await axios.get(`${api}/item/all`);
            setItems(result.data);
        }
             fetchItems();

    },[]) 

  
  
   return(

        <div className="items_container">
             <h2 className="subtitle">Menu Items</h2>
          
             
         <Link to= "/admin/item-form" >
             <Button colorScheme="blue" variant="outline" leftIcon={<AddIcon  w={4} h={4}/>}>Add items</Button>
         </Link>
              
<TableContainer>
  <Table variant='simple'>
   
   <Thead>
      <Tr>
        <Th>Name</Th>
        <Th isNumeric>Price</Th>
        <Th>Image</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
   
    <Tbody>

      {items.map((item) => (

     <Tr key={item.id}>
        <Td>{item.name}</Td>
        <Td isNumeric>{item.price}</Td>
        <Td>
            <img src = {`${api}${item.image}`}  alt=" " /> 
        </Td>
        <Td>
           
        <Link to = {`/admin/item-form/${item.id}`} >
           
               <Button colorScheme="orange" variant="outline">Edit</Button>
           
           </Link>

        </Td>
      </Tr>
          
          ))}  
    
    </Tbody>

 </Table>
</TableContainer>



        </div>
    );
}

export default Items;