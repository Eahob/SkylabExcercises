import React, { Component } from 'react';

function RemoveButton(props) {
    return <button className="remove-item btn btn-default btn-xs pull-right" onClick={e => { e.preventDefault(); props.onClick() }}>
        <span className="glyphicon glyphicon-remove" />
    </button>
}

export default RemoveButton;
