import React,{ useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios  from 'axios'
const Posts = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => {
        const res = response.data
        setData(res)
    })
    .catch((err) => {
        alert(err.message)
    })
    }, [])

    return (
        <div>
            <h2>Total posts: {data.length}</h2>
            <ul>
                { data.map((ele) => {
                    return (
                        <li key={ele.id}>
                                <Link  
                                    to={`/comments/${ele.id}`}>
                                    {ele.title}    
                                </Link>
                            </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Posts