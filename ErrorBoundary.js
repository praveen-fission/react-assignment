import react, { Component } from "react"

class ErrorBoundary extends Component{

    constructor(){
        super()
        this.state ={
            hasError : false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info) 
    }

    render(){
            if(this.state.hasError){
                return <h2>Something went wrong</h2> 
            }
            return this.props.children         //this.props.children refers to the component we are actually rendering
    }
}

export default ErrorBoundary
