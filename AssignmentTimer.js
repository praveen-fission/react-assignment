import React, { Component } from 'react'
import Datetime from 'react-datetime';

class AssignmentTimer extends Component {

    constructor(props) {
        super(props)
        this.state = {
             date: new Date()
            }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ date: new Date() })
        }, 3000);
    }
    render() {
        return (
            <div>
                 <p>Time: {this.state.date.getHours()} hours {this.state.date.getMinutes()} minutes {this.state.date.getSeconds()} seconds</p>
                <p>time: {this.state.date.toLocaleTimeString()}</p>
            </div >
        )
    }
}
export default AssignmentTimer
