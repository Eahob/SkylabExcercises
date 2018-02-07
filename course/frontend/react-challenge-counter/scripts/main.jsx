'use strict'

class CountApp extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    decrement = () => {
        /*
        this.setState(prevState => {
            return { counter: prevState.counter - 1 }
        })
        */
        this.setState(prevState => ( { counter: prevState.counter - 1 }))
    }
    increment = () => {
        this.setState(prevState => {
            return { counter: prevState.counter + 1 }
        })
    }
    render() {
        return <section>
            <DecrementCounter onDecrement={this.decrement} />
            <span>{this.state.counter}</span>
            <IncrementCounter onIncrement={this.increment} />
        </section>
    }
}

function DecrementCounter(props) {
    return <button onClick={props.onDecrement}>Less</button>
}
function IncrementCounter(props) {
    return <button onClick={props.onIncrement}>More</button>
}

ReactDOM.render(<CountApp />,
    document.getElementById('main'))
