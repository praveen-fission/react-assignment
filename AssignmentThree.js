import react, { Component } from "react"

class AssignmentThree extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLogged: false,
            username: '',
            password: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log("button clicked");
        this.setState({
            isLogged: true,
        })
    }

    handleUsername = event => {
        this.setState({
            username: event.target.value
        })
    }

    handlePassword = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogout = event => {
        this.setState({
            username : '',
            password:'',
            isLogged:false
        })
    }

    render() {
        const output = this.state.isLogged ? <div>"The user {this.state.username} is logged in" <br /> <button onClick={this.handleLogout}>Log Out</button></div> : "please log in"
        return (
            <div>
                <h1>Please Fill the Form</h1>
                <form onSubmit={this.submitHandler}>
                    <label>Username:</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsername}/> <br />
                    <label>Password:  </label>
                    <input type="password" value={this.state.password} onChange={this.handlePassword} /> <br />
                    <button>Log In</button>
                </form>

                {output}
            </div>
        )
    }
}

export default AssignmentThree


//Assignment 1 :: Passing arguments to the event handlers
//There are two ways.  One is passing arrow function. Another is using bind

//     The id below is the row ic which you want to delete
//     <button  omClick={(e) => this.deleteRow(id,e)}> Delete row </button>
//     <button onClick={this.deleterow.bind(this,id)}> Delete row </button> 


//2nd assignment  This is controlled component
{/* 

import React, { Component } from 'react';

class App2 extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.input = React.createRef();
    }
    
    handleChange = (newText) => {
        console.log(newText);
    }
    render() {
        return (
            <div className="App2">
                <div className="container">
                    <input type="text"
                        placeholder="Your message here.."
                        ref={this.input}
                        onChange={(event) => this.handleChange(event.target.value)}
                    />
                </div>
            </div>
            
        );
    }
}
export default App2;


*/}
