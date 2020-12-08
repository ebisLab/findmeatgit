import React from 'react'

const User = ({users, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }

    console.log(users)
    return (
        <div>
            <ul>
                {/* {users.items.map(item=><li key={item.id}>{item.login}</li>)} */}
                {/* {users.items.map(item=><div>{item.login}</div>)} */}
                {users.items && users.items.map(item=><li key={item.id}>{item.login}</li>)}

            </ul>
            
        </div>
    )
}

export default User
