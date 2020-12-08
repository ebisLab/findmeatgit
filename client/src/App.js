import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios'
import User from './components/User';
import Pagination from './components/Pagination';

function App() {
  const [users, setUsers]=useState([])
  const [loading, setLoading]=useState(false)
  const [followers, setFollowers]=useState([])
  const [currentPage, setCurrentPage]=useState(1)
  const [usersPerPage, setUsersPerPage]=useState(10)
  const [userText, setUserText]=useState('')

  // useEffect(() => {
  //   axios
  //   .get(`https://api.github.com/users/${userText}`)
  //   .then(res=>setUsers(res.data))
  // }, [])

  const fetchUsers =e=>{
    e.preventDefault()
    setLoading(true)
    axios
    .get(`https://api.github.com/search/users?q=${userText}&per_page=100`)
    //https://api.github.com/search/users?q=${userText}&page=2&per_page=3
    // .get(`https://api.github.com/users/${userText}`)
    .then(res=>{
      setUsers(res.data.items)
      setLoading(false)
      console.log("res", res)
      }
    )
    .catch(err=>console.log(err))
    setUserText('')
  }

  const handleChange=e=>{
    setUserText(e.target.value)
  }

  //Get current posts
  const indexOfLastUser=currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentPosts = users.slice(indexOfFirstUser, indexOfLastUser)
console.log("user-->", users)

//change page
  const paginate= (pageNumber)=>setCurrentPage(pageNumber)
  return (
    <div className="App">
      <form onSubmit={fetchUsers}>
        <input
        placeholder="Search User..."
        type="text"
        value={userText}
        onChange={handleChange}
         />
         <button>Search</button>
      </form>

      <div>
        <div></div>
        <User users={currentPosts} loading={loading}/>
        <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
       {/* {users.login}
       <img src={users.avatar_url} style={{height:"100px"}}/> */}

      </div>
    </div>
  );
}

export default App;
