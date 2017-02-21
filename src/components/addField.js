/**
 * Created by eugene on 20.02.17.
 */

import React, { Component } from 'react'
import store from './../store'
import { connect } from 'react-redux'
import {addItem} from './../actions/addItem'


const mapDispatchToProps = function(dispatch) {
    return {
        dispatch,
        onClick: (addedItems, index, event) => {
            event.preventDefault();
            
            const input = document.querySelector('#addItem');
            
            let dataToPush = {
                id: index - 1,
                text: input.value
            };
            
            if (input.value !== '') {
                addedItems.push(dataToPush);    
            }
            
            input.value = '';
            
            store.dispatch(addItem(addedItems))
        }
    };
};

const mapStateToProps = function() {
    let data = store.getState();

    return {
        data : data
    }
};


class AddField extends Component {
    onClick() {
        store.dispatch()
    }
    
    render() {
        let addedItems = this.props.data.addedItems,
            index = addedItems.length + 1;
        
        return(
            <form className="todo__add">
                <input type="text" placeholder="add item" id="addItem" />
                <button className="add-item" onClick={this.props.onClick.bind(this, addedItems, index)}>Add</button>
            </form>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddField)
