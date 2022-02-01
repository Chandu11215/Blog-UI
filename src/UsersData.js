import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios  from 'axios'

const UsersData = (props) => {
const [select, setSelect] = useState([])    
const [userData, setUserData] =  useState({})
const [comments, setComments] = useState([])
const { id } = props.match.params

useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
        const res = response.data
        setUserData(res)
    })
    .catch((err) => {
        alert(err.message)
    })
    }, [])

    useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
    .then((response) => {
        const res = response.data
        setSelect(res)
    })
    .catch((err) => {
        alert(err.message)
    })
    }, [])

    useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then((response) => {
        const res = response.data
        setComments(res)
    })
    .catch((err) => {
        alert(err.message)
    })
    }, [])

    return (
        <div>
            <h2>USER NAME: { userData.name }</h2>
            <br />
            <h2> TITLE: {select.title}</h2>
            <br />
            <h2>BODY: {select.body}</h2>
            <hr />
            <h1>COMMENTS</h1>
            <ul>
                { 
                    comments.map((ele) => {
                    return (
                            <li key={ele.id}>
                                <Link  
                                    to={`/comments/${ele.id}`}>
                                    {ele.body}    
                                </Link>
                            </li>
                        ) 
                })}
            </ul>
            <Link to="/users">More Posts: {userData.name}</Link>
        </div>
    )
}

export default UsersData