import React from "react"

const UpdatedComponent = originalComponent => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }

        //Since we need previous state to increment the value, the argument to setState will not be an simple object,
        //Instead it takes in a function which gets previous state as parameter and returns the new state
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }


        render() {
            return (
            <originalComponent count={this.state.count} incrementCount={this.incrementCount} />
            )
        }
    }
    return NewComponent
}

export default UpdatedComponent