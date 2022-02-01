import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const UserShow = (props) => {
    const [Posts, setPosts] = useState([])
    const [user, setUser] = useState({})
    const { id } = props.match.params

    useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
        const res = response.data
        setUser(res)
    })
    .catch((err) => {
        alert(err.message)
    })
    }, [])

    useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((response) => {
        const res = response.data
        setPosts(res)
    })
    .catch((err) => {
        alert(err.message)
    })
    }, [])

    return (
        <div>
            <h1>USER NAME: { user.name }</h1>
            <br />
            <h3>POSTS WRITTEN BY THE USER</h3>
            <ul>
                { 
                    Posts.map((ele,i) => {
                    return (
                            <li key={i}>
                                <Link  
                                    to={`/comments/${ele.userId}`}>
                                    {ele.title}    
                                </Link>
                            </li>
                        ) 
                })}
            </ul>
            <Link to="/users">Back</Link>
        </div>
    )
}
export default UserShow