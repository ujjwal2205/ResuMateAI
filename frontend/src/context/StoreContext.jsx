import {createContext} from 'react'
export const StoreContext=createContext();
import axios from "axios";
function StoreProvider(props){
const url="http://localhost:4000"
const contextValue={
    url
}
return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
)
}
export default StoreProvider