import React, {useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

const UsersList = (props) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        const res = response.data
        setUsers(res)
    })
    .catch((err) => {
        alert(err.message)
    })
    }, [])
    return (
        <div>
            <h1>Listing Users - {users.length}</h1>
            <ul>
                { users.map((user) => {
                    return <li  key={user.id}>
                                <Link 
                                    to={`/users/${user.id}`}>
                                    {user.name}
                                </Link> 
                            </li>
                })}
            </ul>
        </div>
    )
}
export default UsersList

// Empty Array denotes that callback function will be executed only once