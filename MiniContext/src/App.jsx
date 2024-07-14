import { useState } from "react";
import UserContext from "./Context/UserContext";
function App(){
    return(
        <UserContextProvider>
        <h1>Hello I am sourav from pu</h1>
        </UserContextProvider>
    )
}
export default App