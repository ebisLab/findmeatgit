import React,{useEffect, useState} from 'react';
import axios from 'axios'

const Followers = ({clickUser, followers, setFollowers}) => {

    useEffect(() => {
        axios
        .get(`https://api.github.com/users/${clickUser}/followers`)
        .then(res=>{
          setFollowers(res.data)
          }
        )
        .catch(err=>console.log(err))
    }, [clickUser])

    return (
        <div>
    {followers == undefined ? "":<h2>{clickUser}'s Followers</h2>}
            <ul>
    {followers && followers.map(item=><li key={item.id}>{item.login}</li>)}
            </ul>
            
        </div>
    )
}

export default Followers
