import React from 'react'

const Pagination = ({usersPerPage, totalUsers, paginate}) => {
    const pageNumbers = [];

    for (let i=1; i<=Math.ceil(totalUsers/ usersPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <div>
            {pageNumbers.map(num=>(
                <li key={num} className="">
                    <a onClick={()=>paginate(num)} className="">{num}</a>
                </li>
            ))}
            
        </div>
    )
}

export default Pagination