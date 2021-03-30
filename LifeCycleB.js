import react, {Component} from "react"

class LifeCycleB extends Component{

    constructor(){
        super()
        this.state = {
            message : ''
        }
        console.log('Life cycle B constructor')
    }

    static getDerivedStateFromProps(props, state){
        //It either returns a new state or null
        console.log('life cycle B get derived state from props')
        return null
    }

    componentDidMount(){
        console.log('life cycle B component did mount')
    }

    shouldComponentUpdate(){
        console.log("Life Cycle B shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Life Cycle B getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('Life Cycle B component did update method')
    }

    render(){
        console.log('Life cycle B render method')
        return(
            <div>
                Life Cycle B Component
            </div>
        )
    }
}

export default LifeCycleB