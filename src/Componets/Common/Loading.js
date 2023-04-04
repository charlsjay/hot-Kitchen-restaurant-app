import { Spinner } from '@chakra-ui/react'
import "./Loading.css"

function Loading({ height = "10vh" }){
    return(
        <div className="loading_container" style={{
            height:height,
        }}>
            <Spinner thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl' />
        </div>
    );
}

export default Loading;