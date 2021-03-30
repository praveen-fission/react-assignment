import react, { Component } from "react"
import LifeCycleB from "./LifeCycleB"

class LifeCycleA extends Component{

    constructor(){
        super()
        this.state = {
            message : 'Ted'
        }
        console.log('Life cycle A constructor')
    }

    static getDerivedStateFromProps(props, state){
        //It either returns a new state or null
        console.log('life cycle A get derived state from props')
        return null
    }

    componentDidMount(){
        console.log('life cycle A component did mount')
    }

    shouldComponentUpdate(){
        console.log("Life Cycle A shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Life Cycle A getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('Life Cycle A component did update method')
    }

    changeState = () => {
        this.setState({
            name:'barney'
        })
    }

    render(){
        console.log('life cycle A render method')
        return(
            <div>
                Life Cycle A component
                <button onClick={this.changeState}>Change state</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA