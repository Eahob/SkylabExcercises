'use strict'

class TaskApp extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: []
        }
    }
    addTask = task => {
        this.setState(prevState => {
            return {
                tasks: [...prevState.tasks, { description: task }]
            }
        })
    }
    changeToDone = index => {
        this.setState(prevState => {
            prevState.tasks[index].done = true;
            return {
                tasks: prevState.tasks
            }
        })
    }
    makeAllDone = () => {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.map(task => ({description:task.description,done:true}))
            }
        })
    }
    removeTask = index => {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.filter((task, _index) => {
                    return index !== _index
                })
            }
        })
    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <ToDos tasks={this.state.tasks} onAddTask={this.addTask} onChangeToDone={this.changeToDone} onMakeAllDone={this.makeAllDone}/>
                </div>
                <div className="col-md-6">
                    <AlreadyDone tasks={this.state.tasks} onRemoveTask={this.removeTask} />
                </div>
            </div>
        </div>
    }
}
function ToDos(props) {
    return <div className="todolist not-done">
        <h1>To Do's</h1>
        <input className="form-control add-todo" placeholder="Add todo" type="text" onKeyDown={e => {
            if (e.keyCode == 13) {
                if (e.target.value) {
                    props.onAddTask(e.target.value)
                    e.target.value = ''
                }
            }
        }} />
        <button id="checkAll" className="btn btn-success" onClick={() => props.onMakeAllDone()}>Mark all as done</button>
        <hr />
        <ul id="sortable" className="list-unstyled">
            {props.tasks.map((task, index) => {
                if (!task.done) {
                    return <li className="ui-state-default" key={index}>
                        <div className="checkbox">
                            <label>
                                <input defaultValue type="checkbox" onClick={() => props.onChangeToDone(index)}/>{task.description}
                            </label>
                        </div>
                    </li>
                }
            })}
        </ul>
        <div className="todo-footer">
            <strong>
                <span className="count-todos">{props.tasks.reduce((sum, task) => task.done ? sum : ++sum, 0)}</span>
            </strong> Items Left
        </div>
    </div>
}
function AlreadyDone(props) {
    return <div className="todolist">
        <h1>Already Done</h1>
        <ul id="done-items" className="list-unstyled">
            {props.tasks.map((task, index) => {
                if (task.done) {
                    return <li key={index}>{task.description}<button className="remove-item btn btn-default btn-xs pull-right" onClick={(e) => {
                        props.onRemoveTask(index)
                    }}>
                        <span className="glyphicon glyphicon-remove" ></span>
                        </button>
                    </li>
                }
            })}
        </ul>
    </div>
}

ReactDOM.render(<TaskApp />,
    document.getElementById('main'))
