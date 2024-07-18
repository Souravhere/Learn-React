import React from 'react'
import { useState, useContext} from 'react'
import UserContext from '../Context/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handlesubit = () => {
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div>
            <h2>Loging</h2>
            <input type="text"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder='User Name' />
            <input type="text"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder='Password' />
            <button onClick={handlesubit}>Sumbit</button>
        </div>
    )
}

export default Login;
