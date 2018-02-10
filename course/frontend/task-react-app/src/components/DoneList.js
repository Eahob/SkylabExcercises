import React, { Component } from 'react';
import RemoveButton from './RemoveButton'
import './DoneList.css';

function DoneList(props) {
    return <div className="todolist">
        <h1>Already Done</h1>
        <ul id="done-items" className="list-unstyled">
            {
                props.tasks.map(task =>
                    task.done ? <li key={task.id}>{task.title}
                        <RemoveButton onClick={() => { props.onRemoveTask(task.id) }} />
                    </li> : '')
            }
        </ul>
    </div>
}

export default DoneList;
