import React, { Component } from 'react';

import AddField from './components/addField'
import ToDoItem from './components/toDoItem'
import { connect } from 'react-redux'
import store from './store'

class App extends Component {
    render() {
        let addedItems = this.props.data.addedItems;
        
        console.log('tt', addedItems);
        
        return (
            <div className="container">
                <div className="todo">
                    <p>To do app</p>
                    <div className="todo__list">
                        <AddField />
                        <div className="todo__list__items">
                            {
                                addedItems.map(
                                    (el, i) => <ToDoItem key={i} id={el.id} text={el.text} />
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
