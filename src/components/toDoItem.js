/**
 * Created by eugene on 20.02.17.
 */

import React, { Component } from 'react'
import store from './../store'
import { connect } from 'react-redux'
import {removeItem} from './../actions/removeItem'

const mapDispatchToProps = function(dispatch) {
    return {
        dispatch,
        removeItem: (itemId, addedItems, event) => {
            event.preventDefault();
            
            let filteredItems = addedItems.filter(
                (el, i) => (
                    i !== itemId
                )
            );
            
            // console.log('map', filteredItems);

            store.dispatch(removeItem(filteredItems))
        }
    };
};

const mapStateToProps = function() {
    let data = store.getState();

    return {
        data : data
    }
};

class ToDoItem extends Component {
    removeItem() {
        store.dispatch()
    }
    
    render() {
        let itemId = this.props.id,
            addedItems = this.props.data.addedItems;
        
        return(
            <div className="todo__item">
                <div className="todo__item__number"><p>{itemId + 1}</p></div>
                <div className="todo__item__text">
                    <p>{this.props.text}</p>
                </div>
                <button className="todo__item__remove" onClick={this.props.removeItem.bind(this, itemId, addedItems)}>
                </button>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoItem)