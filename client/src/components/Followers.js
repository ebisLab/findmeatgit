import React,{useEffect, useState} from 'react';
import axios from 'axios'
import { motion } from "framer-motion"

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


    const variants = {
        hidden: { opacity: 0,
            transform: "translate(350px,0)"
         },
        visible: { 
            opacity: 1,
            transition: { duration: 0.4 },
            transform: "translate(0px,0)"
        },
      }

    return (
        <motion.div 
        initial="hidden"
    animate="visible"
    variants={variants}
        className="followers" style={{width:"30%"}}>
            {/* <h2>{clickUser}'s Profile</h2> */}
    {followers == undefined ? "":<h2>{clickUser}'s Followers</h2>}
            <ul>
    {followers && followers.map(item=><li key={item.id}>{item.login}</li>)}
            </ul>
            
        </motion.div>
    )
}

export default Followers
