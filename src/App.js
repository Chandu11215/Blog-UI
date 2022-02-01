import React from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import UsersList  from './UsersList'
import UserShow from './UserShow'
import UsersData from './UsersData'

const App = (props) => {
  return (
    <div>
      <ul>
        <h1>React Routing</h1>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/posts">Posts</Link></li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path="/users" component={Users} />
      <Route path="/posts" component={Posts} />
      <Route path="/users" component={UsersList} exact={true}/>
      <Route path="/users/:id" component={UserShow}/>
      <Route path="/comments/:id" component={UsersData} />
    </div>
  )
}

export default App
