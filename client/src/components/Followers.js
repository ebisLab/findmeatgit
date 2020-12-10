import React,{useEffect, useState} from 'react';
import axios from 'axios'
import { motion } from "framer-motion"

const Followers = ({clickUser, followers, setFollowers, setIsOpen}) => {

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
    className="followers"
    style={{width:"30%"}}>
<div className="exitbutton">
        <button onClick={()=>setIsOpen(false)}
        type="button" className="close" aria-label="Close">
  <span aria-hidden="true" style={{color:"red"}}>&times;</span>
</button>
</div>
    {followers == undefined ? "":<h2>{clickUser}'s Followers</h2>}
    <div className="scrolldiv" style={{overflow:"scroll", height:"550px"}}>
            <ul>
    {followers && followers.map(item=><motion.li 
    className="followerContainer"
      layoutTransition={spring}
    key={item.id}>
                            <div className="followercardcontainer" >
    
    <img src={item.avatar_url} alt={item.login} className="followerprofileImage" />
    <div className="followercushion">
        <h2>{item.login}</h2>
        <div className="followerprofileBorder">
        <a href={`${item.html_url}`} className="followervisitGithub">Visit Github</a>
 
        </div>
    </div>
 </div>

    </motion.li>)}

        {followers && followers.length ==0  && (<><div style={{padding:"20px", color:"darksalmon"}}>Oh no! {clickUser} has no followers, be the first one</div><button className="followervisitGithub followerprofileBorder">Visit Github</button></>)}
            </ul>
            </div>
            
        </motion.div>
    )
}

export default Followers
