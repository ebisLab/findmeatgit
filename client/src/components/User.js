import React from 'react'

const User = ({users, loading, setClickUser}) => {
    if(loading){
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <ul>
                {/* {users.items.map(item=><li key={item.id}>{item.login}</li>)} */}
                {/* {users.items.map(item=><div>{item.login}</div>)} */}
                {users && users.map(item=><li key={item.id} onClick={()=>setClickUser(item.login)}>{item.login}</li>)}

            </ul>
            
        </div>
    )
}

export default User
