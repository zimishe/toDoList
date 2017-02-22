import React, { Component } from 'react';

import AddField from './components/addField'
import ToDoItem from './components/toDoItem'
import { connect } from 'react-redux'
import store from './store'

class App extends Component {
    componentDidUpdate() {
        let dataToWrite = JSON.stringify(this.props.data.addedItems);
        
        localStorage.setItem('todoItems', dataToWrite);
    }
    
    render() {
        let addedItems = this.props.data.addedItems;
        
        // console.log('items', addedItems);
        
        return (
            <div className="container">
                <div className="todo">
                    <h2>To do app</h2>
                    <div className="todo__list">
                        <AddField />
                        <div className="todo__list__items">
                            {
                                addedItems.map(
                                    (el, i) => <ToDoItem key={i} id={i} text={el.text} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function() {
    let data = store.getState();
    return {
        data : data
    }
};

export default connect(
    mapStateToProps
)(App)
