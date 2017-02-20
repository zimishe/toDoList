/**
 * Created by eugene on 20.02.17.
 */

import React, { Component } from 'react'

class ToDoItem extends Component {
    render() {
        // console.log('props', this.props);
        
        return(
            <div className="todo__item">
                <div className="todo__item__number">{this.props.id}</div>
                <div className="todo__item__text">
                    <p>{this.props.text}</p>
                </div>
                <button className="todo__item__remove">
                    Remove
                </button>
            </div>
        )
    }
}

export default ToDoItem;
