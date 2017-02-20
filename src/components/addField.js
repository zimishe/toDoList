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
        onClick: (event) => {
            event.preventDefault();
            let textValue = document.querySelector('#addItem').value;
            store.dispatch(addItem(textValue))
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
        return(
            <form className="todo__add">
                <input type="text" placeholder="add item" id="addItem" />
                <button className="add-item" onClick={this.props.onClick.bind(this)}>Add</button>
            </form>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddField)
