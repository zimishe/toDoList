/**
 * Created by eugene on 20.02.17.
 */

import { createStore } from 'redux'
import reducer from './reducers/todo'
import initialState from './initialState'

let store = createStore(reducer, initialState);

export default store