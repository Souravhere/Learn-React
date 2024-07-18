import { useState } from "react";
import UserContext from "./Context/UserContext";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
function App(){
    return(
        <UserContextProvider>
        <h1>Hello I am sourav</h1>
        <Login/>
        <Profile/>
        </UserContextProvider>
    )
}
export default App  