import {createContext,useState} from 'react'
export const StoreContext=createContext();
import axios from "axios";
function StoreProvider(props){
const url="http://localhost:4000";
const [token,setToken]=useState(()=>localStorage.getItem("token")||"");
const contextValue={
    url,token,setToken
}
return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
)
}
export default StoreProvider