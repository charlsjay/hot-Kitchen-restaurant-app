import { ChakraProvider } from '@chakra-ui/react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import './App.css';
import {Toaster} from 'react-hot-toast';
import Register from './Pages/Ragister';
import Login from './Pages/Login';
import Dashbord from './Pages/Dashbord';
import GlobalProvider from './GlobalContext';
import AdminLayout from './Componets/Layouts/AdminLayout';
import Items from './Pages/Items';
import ItemForm from './Pages/ItemForm';
import Oders from './Pages/Oders';


function App() {
  return (
    <ChakraProvider>
      
      <BrowserRouter>
          
        <GlobalProvider>

          <Routes>
                 
                  <Route path="/" element={<Home/>} />
                  <Route path="/Login" element={<Login/>} />
                  <Route path="/Register" element={<Register/>} />
                  <Route path="/admin" element={
                       <AdminLayout>
                              <Dashbord />
                       </AdminLayout>
                  } />
                  
                  <Route path="/admin/items" element={
                       <AdminLayout>
                              <Items />
                       </AdminLayout>
                  } />

                   <Route path="/admin/item-form" element={
                       <AdminLayout>
                             <ItemForm />
                       </AdminLayout>
                  } />
                  
                  <Route path="/admin/item-form/:id" element={
                       <AdminLayout>
                             <ItemForm />
                       </AdminLayout>
                  } />

                   <Route path="/admin/orders" element={
                       <AdminLayout>
                              <Oders />
                       </AdminLayout>
                  } />


           </Routes>
                  
        </GlobalProvider>
      
      </BrowserRouter>

      <Toaster  position='bottom-right'/>
        
    </ChakraProvider>
  );
}

export default App;
