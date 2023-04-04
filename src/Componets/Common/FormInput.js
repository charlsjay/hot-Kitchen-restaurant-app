import {FormControl,FormLabel,Input} from "@chakra-ui/react";

function FormInput({ lable , type="text" , onChange , value }){
    return(

    <FormControl>
         
         <FormLabel>{lable}</FormLabel>

            <Input type={type}  value={value}  onChange={onChange} width ="100%" />

    </FormControl>


    );

}

export default FormInput;