import React, { useState } from 'react'

const Pagination = ({usersPerPage, totalUsers, paginate}) => {
    const [numbr, setNumbr]=useState(1)
    const pageNumbers = [];

    for (let i=1; i<=Math.ceil(totalUsers/ usersPerPage); i++){
        pageNumbers.push(i)
    }

    
    return (
        <div>
            <ul className="pagination">
            {pageNumbers.map(num=>(
                <li key={num} className={`page-item ${numbr === num? "active":""}`}>
                    <a onClick={()=>(paginate(num), setNumbr(num))} className="page-link">{num}</a>
                </li>
            ))}
            </ul>
            
        </div>
    )
}

export default Pagination