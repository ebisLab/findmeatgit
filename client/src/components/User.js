import React,{useEffect,useState} from 'react'
import { motion } from "framer-motion"
import axios from 'axios'

const User = ({users, isSubmitted, loading, setClickUser, setIsOpen}) => {
    const [followNum, setFollowNum]=useState()
    const [usrNum, setUsrNum]=useState(0)
    if(loading)return <h2>Loading...</h2>
    else if(isSubmitted && loading===false && users.length===0)return <div style={{color:"darksalmon", margin:"20px"}}>No user found with this name. Try again</div>





    //   const followMe=(infologin)=>{
    //     axios.get(`https://api.github.com/users/${infologin}/followers`)
    //     .then(res=>{
    //         setUsrNum(res.data.length)
    //     })
    //     .catch(err=>console.log(err))
    //     return usrNum
    //   }

    return (
        <motion.div>
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
       {/* <div className="userInfo">
                <div className="userInfoLeft">Followers</div>
           <div className="userInfoRight">Stars</div>
       </div> */}
   </div>
</div>
                    </li>)}
            </ul>
            
        </motion.div>
    )
}

export default User
