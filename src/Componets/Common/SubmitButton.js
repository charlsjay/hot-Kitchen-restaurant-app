import { Button } from "@chakra-ui/react";


function SubmitButton ({text,onClick ,colorScheme="blue" ,className= ""}){
    return <Button className={className}colorScheme={colorScheme} onClick={onClick}>{text}</Button>
}

export default SubmitButton;