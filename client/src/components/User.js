import React from 'react'
import { motion } from "framer-motion"

const User = ({users, isSubmitted, loading, setClickUser, setIsOpen}) => {
    if(loading)return <h2>Loading...</h2>
    else if(isSubmitted && loading===false && users.length===0)return <div style={{color:"darksalmon", margin:"20px"}}>No user found with this name. Try again</div>

    const variants = {
        hidden: { 
            // opacity: 0,
            // transform: "translate(350px,0)"
         },
        visible: { 
            // opacity: 1,
            // transition: { duration: 0.4 },
            // transform: "translate(0px,0)"
        },
        exit:{
            transform: "translate(-350px,0)"
        }
      }

    return (
        <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        exit="exit"
        >
            <ul>
                {users && users.map(item=><li 
                className="userContainer"
                key={item.id} 
                onClick={()=>(setClickUser(item.login), setIsOpen(true))}>
                    
                    <div className="usercardcontainer" >
    
   <img src={item.avatar_url} alt={item.login} className="profileImage" />
   <div className="cushion">
       <h2>{item.login}</h2>
       <div className="profileBorder">
       <a href={`${item.html_url}`} className="visitGithub">Visit Github</a>

       </div>
   </div>
</div>
                    </li>)}
            </ul>
            
        </motion.div>
    )
}

export default User
