import React from 'react'
import { motion } from "framer-motion"

const User = ({users, isSubmitted, loading, setClickUser, setIsOpen}) => {
    if(loading)return <h2>Loading...</h2>
    else if(isSubmitted && loading===false && users.length===0)return"no user found with this name"

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
                {users && users.map(item=><li key={item.id} onClick={()=>(setClickUser(item.login), setIsOpen(true))}>{item.login}</li>)}
            </ul>
            
        </motion.div>
    )
}

export default User
