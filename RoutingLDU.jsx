import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useRouteMatch, useParams, useLocation } from 'react-router'

function Login() {
    return (
        <div>
            <h1>Login Here</h1>
        </div>
    )
}

function DashBoard() {
    let match = useRouteMatch();
    return (
        <div>
            <h1>DashBoard</h1>
            <ul>
                <li> <Link to={`${match.url}/user`}>User</Link> </li>
                <li> <Link to={`${match.url}/users`}>Users</Link> </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/user`}> <User /> </Route>
                <Route path={`${match.path}/users`}> <Users /> </Route>
            </Switch>
        </div>
    )
}

function User() {
    let match = useRouteMatch();
    return (
        <div>
            User
            <Switch>
                <Route path={`${match.path}/:User_id`}> <UserId /> </Route>
            </Switch>
        </div>
    )
}

function UserId() {
    let { id } = useParams();
    return (
        <div>
            <h3>User Id: {id} </h3>
        </div>
    )
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Users() {
    let match = useRouteMatch();
    let query = useQuery();

    return (
        <div>
            <h3>Users</h3>
            <ul>
                <li> <Link to={`${match.url}?name=telegram`}>Telegram</Link> </li>
                <li> <Link to={`${match.url}?name=skype`}>skype</Link> </li>
            </ul>
            <Child name={query.get("name")} />
        </div>
    )
}

function Child({ name }) {
    return (
        <div>
            { name ? ( <h3>Name:{name}</h3> ) : ( <h3> no name in the query</h3> )}
        </div>
    )
}

function RoutingLDU() {
    return (
        <Router>
            <div>
                <ul>
                    <li> <Link to="/">Login</Link> </li>
                    <li> <Link to="/dashboard">DashBoard</Link> </li>
                </ul>
                <Switch>
                    <Route path="/dashboard"> <DashBoard /> </Route>
                    <Route path="/"> <Login /> </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default RoutingLDU
