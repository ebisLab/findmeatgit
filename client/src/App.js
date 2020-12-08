import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios'
import User from './components/User';

function App() {
  const [users, setUsers]=useState([])
  const [loading, setLoading]=useState(false)
  const [followers, setFollowers]=useState([])
  const [currentPage, setCurrentPage]=useState(1)
  const [postsPerPage, setPostsPerPage]=useState(10)
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
    .get(`https://api.github.com/search/users?q=${userText}`)
    //https://api.github.com/search/users?q=${userText}&page=2&per_page=3
    // .get(`https://api.github.com/users/${userText}`)
    .then(res=>{
      setUsers(res.data)
      setLoading(false)
      console.log("res", res)}
    )
    .catch(err=>console.log(err))
  }

  const handleChange=e=>{
    setUserText(e.target.value)
  }

  console.log("SET USERS", users)

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
        {/* {users.items && users.items.map(item=><div>{item.login}</div>)} */}

        <div></div>
        <User users={users} loading={loading}/>
       {/* {users.login}
       <img src={users.avatar_url} style={{height:"100px"}}/> */}

      </div>
    </div>
  );
}

export default App;
