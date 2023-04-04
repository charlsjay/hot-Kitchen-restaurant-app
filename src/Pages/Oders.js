import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../config";
import "./Oders.css";
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
    Badge,
    
  } from '@chakra-ui/react'





function Oders() {
   
   const[oders,setOders] =useState([]);
   
  
   const fetchOders = async () =>{

    const result = await axios.get(`${api}/item/orders`);
    setOders(result.data);
   };
   
  
useEffect(() => {
         
         fetchOders();
        
 },[]) 



    const handlComplete =  async(oderId) => {

         await axios.post(`${api}/item/order-complete/${oderId}`,{})
         fetchOders();
    }
  
  
return(

        <div className="oders_container">
             <h2 className="subtitle">Orders</h2>
          
<TableContainer>
  <Table variant='simple'>
   
   <Thead>
      <Tr>
        <Th>Order Code</Th>
        <Th>Items</Th>
        <Th isNumeric>Total</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
   
    <Tbody>

      {oders.map((oder) => (

     <Tr key={oder.id}>
        <Td>{oder.code}</Td>

        <Td>
            {oder.items.map((item) => (
               <div key={item.name}>
                    {item.name} ({item.qty})
               </div>
            ))}
        </Td>
        <Td isNumeric>{oder.total}</Td>
        <Td>
            {oder.complete ?(
                <Badge colorScheme="green"> Completed</Badge>
            ) :(
                <Button colorScheme="green" onClick={() => handlComplete(oder.id)}>
                     Complete
                </Button>
            )} 
          </Td>
      </Tr>
          
          ))}  
    
    </Tbody>

 </Table>
</TableContainer>



        </div>
    );
}

export default Oders;