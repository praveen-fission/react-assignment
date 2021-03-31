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
                 <p>Time: {this.state.counter.getHours()} hours {this.state.counter.getMinutes()} minutes {this.state.counter.getSeconds()} seconds</p>
                <p>time: {this.state.date.toLocaleTimeString()}</p>
            </div >
        )
    }
}
export default AssignmentTimer