import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios'

function App() {
  const [users, setUsers]=useState([])
  const [followers, setFollowers]=useState([])
  const [userText, setUserText]=useState('')

  // useEffect(() => {
  //   axios
  //   .get(`https://api.github.com/users/${userText}`)
  //   .then(res=>setUsers(res.data))
  // }, [])

  const fetchUsers =e=>{
    e.preventDefault()
    axios
    .get(`https://api.github.com/users/${userText}`)
    .then(res=>{
      setUsers(res.data)
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
       {users.login}
       <img src={users.avatar_url} style={{height:"100px"}}/>

      </div>
    </div>
  );
}

export default App;
