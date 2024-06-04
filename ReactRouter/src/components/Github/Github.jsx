import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setdata] = useState([])
    // useEffect(()=>{
    // const data = fetch(`https://api.github.com/users/hiteshchoudhary`)
    // .then(res=> res.json())
    // .then((data)=>{
    //     setdata(data)
    // })
    // },[])
    const data = useLoaderData()
    return (
        <div className='bg-orange-500 text-white font-bold text-center'>
            <p>GitHub</p>
            <div>
                <h1>Followers Cout : {data.followers}</h1>
            </div>
        </div>
    )
}

export default Github
export const githubdata  = async () => {
    const response = await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return response.json()
}
