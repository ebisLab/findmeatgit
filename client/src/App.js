import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import axios from 'axios'
import User from './components/User';
import Pagination from './components/Pagination';
import "bootstrap/dist/css/bootstrap.min.css";
import Followers from './components/Followers';

function App() {
  const [users, setUsers]=useState([])
  const [loading, setLoading]=useState(false)
  const [currentPage, setCurrentPage]=useState(1)
  const [usersPerPage, setUsersPerPage]=useState(10)
  const [userText, setUserText]=useState('')
  const [clickUser, setClickUser]=useState()
  const [followers, setFollowers]=useState()



  const fetchUsers =e=>{
    e.preventDefault()
    setLoading(true)
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

      <div style={{display:"inline-flex"}}>
        <div className="user">
        <User setClickUser={setClickUser} users={currentPosts} loading={loading}/>
        <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
        </div>
        {clickUser && <Followers clickUser={clickUser} followers={followers} setFollowers={setFollowers} />}
      </div>
    </div>
  );
}

export default App;
