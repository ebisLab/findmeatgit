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
        // spring :{
        //     type: "spring",
        //     damping: 30,
        //     stiffness: 300
        //   }
          
      }

      const spring = {
        type: "spring",
        damping: 30,
        stiffness: 300
      };



    return (
        <motion.div 
        initial="hidden"
    animate="visible"
    variants={variants}
  
        className="followers" style={{width:"30%"}}>
    {followers == undefined ? "":<h2>{clickUser}'s Followers</h2>}
            <ul>
    {followers && followers.map(item=><motion.li 
      layoutTransition={spring}
    key={item.id}>{item.login}</motion.li>)}
    {followers && followers.length ==0  && `Oh no! ${clickUser} has no followers, be the first one`}
            </ul>
            
        </motion.div>
    )
}

export default Followers
