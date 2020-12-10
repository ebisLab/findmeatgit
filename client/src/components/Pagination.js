import React, { useState } from 'react'

const Pagination = ({usersPerPage, users, totalUsers, paginate}) => {
    const [numbr, setNumbr]=useState(1)
    const pageNumbers = [];

    for (let i=1; i<=Math.ceil(totalUsers/ usersPerPage); i++){
        pageNumbers.push(i)
    }

    
    return (
        <div className="d-flex justify-content-center">
            <ul className="pagination">
            {pageNumbers.map(num=>(
                <li  key={num} className={`page-item ${numbr === num? "active":""}`}>
                    <a style={{cursor:"pointer"}} onClick={()=>(paginate(num), setNumbr(num))} className="page-link page-nums">{num}</a>
                </li>
            ))}
            {users.length == 0? "": <div style={{color:"darkgrey", padding:"0 20px"}}>{totalUsers + ` user${totalUsers==1?"":"s"} found`}</div>}

            </ul>
            
        </div>
    )
}

export default Pagination