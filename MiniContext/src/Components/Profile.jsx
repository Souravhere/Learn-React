import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const { user } = useContext(UserContext);  // Note the lowercase 'user'
    if (!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
