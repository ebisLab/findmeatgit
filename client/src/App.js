import './App.css';
import React,{useState} from 'react';
import axios from 'axios'
import User from './components/User';
import Pagination from './components/Pagination';
import "bootstrap/dist/css/bootstrap.min.css";
import Followers from './components/Followers';

import { motion } from "framer-motion"

function App() {
  const [users, setUsers]=useState([])
  const [loading, setLoading]=useState(false)
  const [isOpen, setIsOpen]=useState(false)
  const [isSubmitted, setIsSubmitted]=useState(false)
  const [currentPage, setCurrentPage]=useState(1)
  const [usersPerPage, setUsersPerPage]=useState(10)
  const [userText, setUserText]=useState('')
  const [clickUser, setClickUser]=useState()
  const [followers, setFollowers]=useState()



  const fetchUsers =e=>{
    e.preventDefault()
    setLoading(true)
    setIsSubmitted(true)
    axios
    .get(`https://api.github.com/search/users?q=${userText}&per_page=100`)
    .then(res=>{
      setUsers(res.data.items)
      setLoading(false)
      console.log("res", res)
      }
    )
    .catch(err=>console.log(err))
    setUserText('')
    setIsOpen(false)
    setFollowers(undefined)
  }

  const handleChange=e=>{
    setUserText(e.target.value)
  }

  //Get current posts
  const indexOfLastUser=currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentPosts = users.slice(indexOfFirstUser, indexOfLastUser)

//change page
  const paginate= (pageNumber)=>(setCurrentPage(pageNumber), setIsOpen(false))

  const variants = {
    hidden: {
      width:"100%"
     },
    visible: { 
      width:"70%",
        transition: { duration: 0.4 },
    },
    forminitial:{
      height: "100vh",
      background: "red",
      position: "relative"
    },
    formanimate:{
      height: "15vh",
    }
  }
  
  return (
    <div className="App">
      <motion.div
      variants={variants}
      initial="forminitial" 
      animate={`${isSubmitted? "formanimate":"forminitial"}`}
      >
      <form onSubmit={fetchUsers} className="form">
        <input
        placeholder="Search User..."
        type="text"
        value={userText}
        onChange={handleChange}
         />
         <button>Search</button>
      </form>
      </motion.div>

      <div style={{display:`${isSubmitted?"inline-flex":"none"}`, width:"100%"}}>
        <motion.div 
                initial="hidden"
                animate={`${isOpen? "visible":"hidden"}`}
                variants={variants}
        className="user" style={{width:"100%"}}>
        <User setIsOpen={setIsOpen} setClickUser={setClickUser} users={currentPosts} loading={loading} isSubmitted={isSubmitted}/>
        <Pagination usersPerPage={usersPerPage} totalUsers={users.length} users={users} paginate={paginate} />
        </motion.div>
        {isOpen && <Followers setIsOpen={setIsOpen} clickUser={clickUser} followers={followers} setFollowers={setFollowers} />}
      </div>
    </div>
  );
}

export default App;
